

//I see the artifact system doesn't support react-router-dom. Let me provide you with the code directly and explain how to set it up in your project:
//=================================================
//Step 1: Create the Detail Page Component
//=======================================

//Create a new file BookDetailPage.tsx in your components folder:
//typescript

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, ArrowLeft, Heart } from 'lucide-react';

// Import your books data
import { booksData } from '../data/books'; // Adjust path as needed

const BookDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);

    const book = booksData.find(b => b.id === Number(id));

    if (!book) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Book Not Found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                        Return to Home
                    </button>
                </div>
            </div>
        );
    }

    const getImageSrc = (image: string): string => {
        if (!image || image.trim() === '') {
            return 'https://placehold.co/600x800/e2e8f0/64748b?text=No+Image';
        }
        const cleanImage = image.trim();
        if (cleanImage.toLowerCase().startsWith("de")) return "";
        if (cleanImage.startsWith('http://') || cleanImage.startsWith('https://')) return cleanImage;
        if (cleanImage.startsWith('/')) return cleanImage;
        return `/assets/${cleanImage}`;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Back</span>
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
                        {/* Image Section */}
                        <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                            <img
                                src={getImageSrc(book.image)}
                                alt={book.title}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={() => setIsFavorite(!isFavorite)}
                                className="absolute top-4 right-4 p-2 bg-white/90 rounded-full"
                            >
                                <Heart className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                            </button>
                        </div>

                        {/* Details Section */}
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                    {book.title}
                                </h1>

                                {book.rating && (
                                    <div className="flex items-center gap-2 mb-4">
                                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        <span className="text-lg font-semibold">{book.rating.toFixed(1)}</span>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-green-600">
                                        ${book.price.toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            {/* Quantity Selector */}
                            <div className="flex items-center gap-4">
                                <label className="text-sm font-medium">Quantity:</label>
                                <div className="flex items-center border rounded-lg">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-4 py-2 hover:bg-gray-100"
                                    >
                                        -
                                    </button>
                                    <span className="px-6 py-2">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-4 py-2 hover:bg-gray-100"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2">
                                <ShoppingCart className="w-5 h-5" />
                                Add to Cart - ${(book.price * quantity).toFixed(2)}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;


//Step 2: Update Your Router
//In your App.tsx or router configuration file:
//typescript


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookCard from './components/BookCard';
import BookDetailPage from './components/BookDetailPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/form/:id" element={<BookDetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}



//Step 3: Extend Your Book Data Type
//Add these fields to your book data structure:
//typescript


interface Book {
    id: number;
    title: string;
    image: string;
    price: number;
    rating ?: number;
    author ?: string;
    description ?: string;
    isbn ?: string;
    pages ?: number;
    publisher ?: string;
    language ?: string;
    category ?: string;
}


//The detail page includes features like quantity selection, favorite button, responsive design, and a clean layout.Your existing BookCard component already links to / form / ${ id }, so clicking any card will navigate to its detail page automatically!Claude is AI and can make mistakes.Please double - check responses.Sonnet 4.5