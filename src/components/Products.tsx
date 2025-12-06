// ============================================
// Products.tsx - Fixed with proper image handling
// ============================================
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Star } from 'lucide-react';
import type { Book } from '../types';


const Products: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>('');

    useEffect(() => {
        if (!id) {
            setError('No book ID provided');
            setLoading(false);
            return;
        }

        const fetchBook = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('/books.json');

                if (!response.ok) {
                    throw new Error('Failed to fetch books');
                }

                const books: Book[] = await response.json();
                const foundBook = books.find(book => book.id === parseInt(id));

                if (!foundBook) {
                    throw new Error('Medicine not found');
                }

                setBook(foundBook);

                // Set initial selected image
                if (foundBook.images && foundBook.images.length > 0) {
                    setSelectedImage(foundBook.images[0]);
                } else if (foundBook.image) {
                    setSelectedImage(foundBook.image);
                }
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'An error occurred';
                setError(errorMessage);
                console.error('Error fetching book data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);

    // Helper function to normalize image paths
    const getImageSrc = (imagePath: string): string => {
        if (imagePath.startsWith('http') || imagePath.startsWith('/')) {
            return imagePath;
        }
        return `/assets/${imagePath}`;
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-5">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-5 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                >
                    Back
                </button>
                <div className="text-red-600 text-lg">{error}</div>
            </div>
        );
    }

    if (!book) {
        return (
            <div className="p-5">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-5 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                >
                    Back
                </button>
                <div className="text-lg">Medicine not found</div>
            </div>
        );
    }

    const allImages = book.images || (book.image ? [book.image] : []);

    return (
        <div className="min-h-screen bg-gray-50 p-5">
            <button
                onClick={() => navigate(-1)}
                className="mb-5 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
                ← Back
            </button>

            <div className="max-w-6xl mx-auto bg-green-500 rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Image Section */}
                    <div>
                        {selectedImage ? (


                            

                                <div className="space-y-4">

                                
                                    <img
                                        src={getImageSrc(selectedImage)}
                                        alt={book.title}
                                        className="w-full h-auto rounded-lg shadow-md"
                                        onError={(e) => {
                                            const target = e.currentTarget;
                                            target.src = 'https://placehold.co/400x600/e2e8f0/64748b?text=No+Image';
                                            target.onerror = null;
                                        }}
                                    />


                                


                                    {/* Thumbnail Gallery */}
                                    {allImages.length > 1 && (
                                        <div className="grid grid-cols-4 gap-2">
                                            {allImages.map((img, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setSelectedImage(img)}
                                                    className={`border-2 rounded-lg overflow-hidden transition ${selectedImage === img
                                                        ? 'border-blue-600'
                                                        : 'border-gray-200 hover:border-gray-400'
                                                        }`}
                                                >
                                                    <img
                                                        src={getImageSrc(img)}
                                                        alt={`${book.title} thumbnail ${index + 1}`}
                                                        className="w-full h-20 object-cover"
                                                        onError={(e) => {
                                                            const target = e.currentTarget;
                                                            target.src = 'https://placehold.co/100x100/e2e8f0/64748b?text=No+Image';
                                                            target.onerror = null;
                                                        }}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>


                           


                        ) : (
                            <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg flex items-center justify-center">
                                <span className="text-gray-500">No image available</span>
                            </div>
                        )}
                    </div>

                    {/* Product Info Section */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
                            {book.category && (
                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                    {book.category}
                                </span>
                            )}
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold text-green-600">
                                ${book.price.toFixed(2)}
                            </span>
                            {book.unit && (
                                <span className="text-gray-500">per {book.unit}</span>
                            )}
                        </div>

                        {book.rating && (
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.round(book.rating!)
                                                ? 'fill-yellow-400 text-yellow-400'
                                                : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-600 font-medium">
                                    {book.rating.toFixed(1)} out of 5
                                </span>
                            </div>
                        )}

                        <div className="border-t pt-6">
                            <h2 className="text-xl font-semibold mb-3">Description</h2>
                            <p className="text-gray-700 leading-relaxed">{book.description}</p>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;