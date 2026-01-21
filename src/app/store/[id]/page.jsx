"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BookDetailsPage({ params }) {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                setLoading(true);
                const response = await fetch("/books.json");
                if (!response.ok) throw new Error("Failed to fetch books");

                const books = await response.json();
                const foundBook = books.find(
                    (b) => String(b.id) === String(params.id)
                );

                if (foundBook) {
                    setBook({
                        ...foundBook,
                        image: foundBook.image || foundBook.cover || "/images/formulary.jpg",
                        price: foundBook.price || foundBook.sellPrice || 0,
                    });
                } else {
                    setError("Book not found");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [params.id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-pulse text-gray-500">Loading...</div>
            </div>
        );
    }

    if (error || !book) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Book Not Found</h1>
                <p className="text-gray-500">{error || "The requested book could not be found."}</p>
                <Link href="/store">
                    <Button variant="outline">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Store
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <Link href="/store" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Store
                </Link>

                <Card>
                    <CardContent className="p-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                <Image
                                    src={book.image}
                                    alt={book.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            <div className="flex flex-col">
                                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                                    {book.title}
                                </h1>

                                {book.category && (
                                    <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-4 w-fit capitalize">
                                        {book.category}
                                    </span>
                                )}

                                {book.rating && (
                                    <div className="flex items-center gap-2 mb-4">
                                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        <span className="text-gray-700">{book.rating.toFixed(1)}</span>
                                    </div>
                                )}

                                <p className="text-3xl font-bold text-blue-600 mb-6">
                                    ${book.price.toFixed(2)}
                                </p>

                                {book.description || book.desc ? (
                                    <p className="text-gray-600 mb-6">
                                        {book.description || book.desc}
                                    </p>
                                ) : null}

                                {book.unit && (
                                    <p className="text-sm text-gray-500 mb-6">
                                        Unit: {book.unit}
                                    </p>
                                )}

                                <Button className="w-full md:w-auto" size="lg">
                                    <ShoppingCart className="w-5 h-5 mr-2" />
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
