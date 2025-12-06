// ============================================
// Sidebar.tsx - Improved with better UX
// ============================================
import { DollarSign, Search, X } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { useFilter } from "./FilterContext";
import { Book } from "../types";

const Sidebar: React.FC = () => {
    const {
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,

        keyword,
        setKeyword,




        resetFilters,
    } = useFilter();


    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const keywords = useMemo(
        () => ["anti-hypertensive", "anti-gastritis", "anti-biotics", "anti-inflammatory", "anti-pyretic", "anti-malaria", "anti-helminthics", "anti-convulsive", "anesthesia", "steroids", "disinfectant", "anti-fungi", "electrolytes", "print", "analgesics"],
        []
    );

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setLoading(true);
                const response = await fetch("/books.json");

                if (!response.ok) {
                    throw new Error("Failed to fetch categories");
                }

                const books: Book[] = await response.json();
                const uniqueCategories = Array.from(
                    new Set(books.map((book) => book.category).filter(Boolean))
                );

                setCategories(uniqueCategories.sort());
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to load categories");
                console.error("Error fetching categories:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMinPrice(value ? parseFloat(value) : undefined);
    };

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMaxPrice(value ? parseFloat(value) : undefined);
    };

    const hasActiveFilters = !!(
        searchQuery ||
        selectedCategory ||
        minPrice ||
        maxPrice ||
        keywords
    );

    return (
        <aside className="w-72 bg-white border-r border-gray-200 h-screen overflow-y-auto sticky top-0">
            <div className="p-6">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        BookStore
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">Find your next read</p>
                </div>

                {/* Search */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Search Books
                    </label>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            placeholder="Search by title..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                    <label className=" text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Price Range
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="number"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            placeholder="Min"
                            value={minPrice ?? ""}
                            onChange={handleMinPriceChange}
                            min="0"
                        />
                        <input
                            type="number"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            placeholder="Max"
                            value={maxPrice ?? ""}
                            onChange={handleMaxPriceChange}
                            min="0"
                        />
                    </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                    <h2 className="text-sm font-medium text-gray-700 mb-3">Categories</h2>
                    {loading ? (
                        <div className="text-sm text-gray-500">Loading categories...</div>
                    ) : error ? (
                        <div className="text-sm text-red-500">{error}</div>
                    ) : (
                        <div className="space-y-2">
                            {categories.map((category) => (
                                <label
                                    key={category}
                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition group"
                                >
                                    <input
                                        type="radio"
                                        name="category"
                                        value={category}
                                        checked={selectedCategory === category}
                                        onChange={() => setSelectedCategory(category)}
                                        className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                                    />
                                    <span className="text-sm text-gray-700 group-hover:text-gray-900 capitalize">
                                        {category}
                                    </span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Keywords */}
                <div className="mb-6">
                    <h2 className="text-sm font-medium text-gray-700 mb-3">Keywords</h2>
                    <div className="flex flex-wrap gap-2">
                        {keywords.map((kw) => (
                            <button
                                key={kw}
                                onClick={() => setKeyword(kw)}
                                className={`px-3 py-1.5 text-sm rounded-full transition-all ${keyword === kw
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                {kw}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Reset Filters */}
                {hasActiveFilters && (
                    <button
                        onClick={resetFilters}
                        className="w-full py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2 font-medium"
                    >
                        <X className="w-4 h-4" />
                        Reset Filters
                    </button>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;
