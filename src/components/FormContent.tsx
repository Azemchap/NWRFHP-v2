// ============================================
// MainContent.tsx - Fixed with proper image field mapping
// ============================================
import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import BookCard from "./BookCard";
import { useFilter } from "./FilterContext";

interface Book {
    id: number;
    title: string;
    description?: string;
    price: number;
    rating?: number;
    image?: string;  // Main field
    cover?: string;  // Alternative field for backwards compatibility
    images?: string[];
    category?: string;
}

type SortFilter = "all" | "expensive" | "cheap" | "popular";

const FormContent: React.FC = () => {
    const { searchQuery, selectedCategory, minPrice, maxPrice, keyword } = useFilter();

    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState<SortFilter>("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const itemsPerPage = 12;

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch("/books.json");

                if (!response.ok) {
                    throw new Error("Failed to fetch books");
                }

                const data: Book[] = await response.json();

                // Normalize the data: if 'cover' exists but 'image' doesn't, use 'cover'
                const normalizedData = data.map(book => ({
                    ...book,
                    image: book.image || book.cover || (book.images && book.images[0]) || ''
                }));

                setBooks(normalizedData);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to load books");
                console.error("Error fetching books:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    const filteredBooks = useMemo(() => {
        let filtered = [...books];

        // Apply category filter
        if (selectedCategory) {
            filtered = filtered.filter((book) => book.category === selectedCategory);
        }

        // Apply price filters
        if (minPrice !== undefined) {
            filtered = filtered.filter((book) => book.price >= minPrice);
        }
        if (maxPrice !== undefined) {
            filtered = filtered.filter((book) => book.price <= maxPrice);
        }

        // Apply search query
        if (searchQuery) {
            filtered = filtered.filter((book) =>
                book.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply keyword filter
        if (keyword) {
            filtered = filtered.filter(
                (book) =>
                    book.title.toLowerCase().includes(keyword.toLowerCase()) ||
                    book.description?.toLowerCase().includes(keyword.toLowerCase()) ||
                    book.category?.toLowerCase().includes(keyword.toLowerCase())
            );
        }

        // Apply sorting
        switch (filter) {
            case "expensive":
                return filtered.sort((a, b) => b.price - a.price);
            case "cheap":
                return filtered.sort((a, b) => a.price - b.price);
            case "popular":
                return filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
            default:
                return filtered;
        }
    }, [books, selectedCategory, minPrice, maxPrice, searchQuery, keyword, filter]);

    const paginatedBooks = useMemo(() => {
        const startIdx = (currentPage - 1) * itemsPerPage;
        const endIdx = startIdx + itemsPerPage;
        return filteredBooks.slice(startIdx, endIdx);
    }, [filteredBooks, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

    const handlePageChange = useCallback(
        (page: number) => {
            if (page > 0 && page <= totalPages) {
                setCurrentPage(page);
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        },
        [totalPages]
    );

    const getPaginationButtons = useMemo(() => {
        const buttons: number[] = [];
        const maxButtons = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
        let endPage = Math.min(totalPages, startPage + maxButtons - 1);

        if (endPage - startPage < maxButtons - 1) {
            startPage = Math.max(1, endPage - maxButtons + 1);
        }

        for (let page = startPage; page <= endPage; page++) {
            buttons.push(page);
        }
        return buttons;
    }, [currentPage, totalPages]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedCategory, minPrice, maxPrice, keyword, filter]);

    if (loading) {
        return (
            <section className="flex-1 p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="border rounded-lg overflow-hidden animate-pulse">
                            <div className="aspect-[3/4] bg-gray-200" />
                            <div className="p-4 space-y-3">
                                <div className="h-4 bg-gray-200 rounded w-3/4" />
                                <div className="h-4 bg-gray-200 rounded w-1/2" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="flex-1 p-8">
                <div className="text-center text-red-600">
                    <p className="text-lg font-semibold">Error loading books</p>
                    <p className="text-sm mt-2">{error}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="flex-1 p-8 bg-gray-50">
            {/* Header with filter dropdown */}
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        {filteredBooks.length} {filteredBooks.length === 1 ? "Book" : "Books"} Found
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        {selectedCategory && `in ${selectedCategory}`}
                    </p>
                </div>

                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition shadow-sm"
                    >
                        <SlidersHorizontal className="w-4 h-4" />
                        <span className="capitalize">
                            {filter === "all" ? "Sort by" : filter}
                        </span>
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                            <button
                                onClick={() => {
                                    setFilter("all");
                                    setDropdownOpen(false);
                                }}
                                className="block w-full px-4 py-2 text-left hover:bg-gray-50 rounded-t-lg"
                            >
                                Default
                            </button>
                            <button
                                onClick={() => {
                                    setFilter("cheap");
                                    setDropdownOpen(false);
                                }}
                                className="block w-full px-4 py-2 text-left hover:bg-gray-50"
                            >
                                Price: Low to High
                            </button>
                            <button
                                onClick={() => {
                                    setFilter("expensive");
                                    setDropdownOpen(false);
                                }}
                                className="block w-full px-4 py-2 text-left hover:bg-gray-50"
                            >
                                Price: High to Low
                            </button>
                            <button
                                onClick={() => {
                                    setFilter("popular");
                                    setDropdownOpen(false);
                                }}
                                className="block w-full px-4 py-2 text-left hover:bg-gray-50 rounded-b-lg"
                            >
                                Most Popular
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Books Grid */}
            {paginatedBooks.length === 0 ? (
                <div className="text-center py-16">
                    <p className="text-xl text-gray-500">No books found</p>
                    <p className="text-sm text-gray-400 mt-2">Try adjusting your filters</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                    {paginatedBooks.map((book) => (
                        <BookCard
                            key={book.id}
                            id={book.id}
                            title={book.title}
                            image={book.image || ''}
                            price={book.price}
                            rating={book.rating}
                        />
                    ))}
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-white transition disabled:opacity-50 disabled:cursor-not-allowed bg-white shadow-sm"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Previous
                    </button>

                    <div className="flex gap-2">
                        {getPaginationButtons.map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-10 h-10 rounded-lg font-medium transition ${page === currentPage
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-white border border-gray-300 hover:bg-gray-50"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-white transition disabled:opacity-50 disabled:cursor-not-allowed bg-white shadow-sm"
                    >
                        Next
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            )}
        </section>
    );
};

export default FormContent;