"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { StoreContext } from "../../context";
import { ArrowLeft, ShoppingBag, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CartPage() {
    const { cartData } = useContext(StoreContext);

    const booksToBuy = cartData.filter((book) => book.type === "Buy");
    const totalPrice = booksToBuy.reduce(
        (acc, book) => acc + (book.sellPrice || book.price || 0),
        0
    );

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <Link href="/store" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Store
                </Link>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <ShoppingBag className="w-6 h-6" />
                            Your Cart
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {cartData.length > 0 ? (
                            <div className="space-y-4">
                                {cartData.map((book, index) => (
                                    <div key={book._id || book.id || index} className="flex gap-4 p-4 bg-white border rounded-lg">
                                        <div className="relative w-24 h-24 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                                            <Image
                                                src={book.cover || book.image || "/images/formulary.jpg"}
                                                alt={book.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900">{book.title}</h3>
                                            {book.category && (
                                                <p className="text-sm text-gray-500">Category: {book.category}</p>
                                            )}
                                            {book.unit && (
                                                <p className="text-sm text-gray-500">Unit: {book.unit}</p>
                                            )}
                                            <p className="text-lg font-bold text-blue-600 mt-2">
                                                {(book.sellPrice || book.price || 0).toLocaleString()} FR CFA
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                <div className="border-t pt-4 mt-4">
                                    <div className="flex justify-between items-center text-lg font-semibold">
                                        <span>Subtotal ({booksToBuy.length} items)</span>
                                        <span className="text-blue-600">{totalPrice.toLocaleString()} FR CFA</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <ShoppingBag className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                                <p className="text-gray-500">Your cart is empty</p>
                                <Link href="/store">
                                    <Button className="mt-4">Browse Products</Button>
                                </Link>
                            </div>
                        )}

                        {cartData.length > 0 && (
                            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                <p className="text-gray-700 mb-4">
                                    Thanks for your purchase! Please contact our sales officer to complete your order.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link href="/store" className="flex-1">
                                        <Button variant="outline" className="w-full">
                                            <ArrowLeft className="w-4 h-4 mr-2" />
                                            Continue Shopping
                                        </Button>
                                    </Link>
                                    <Link href="/contact" className="flex-1">
                                        <Button className="w-full">
                                            <MessageCircle className="w-4 h-4 mr-2" />
                                            Contact Sales
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
