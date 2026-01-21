"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from "./catalog.module.css";
import { getAllBooks } from "../../lib/fake-data";

const categories = ["choose a genre", "stock", "store", "wum", "nkambe", "fundong", "kumbo", "substore", "secretariat", "logistics", "accounts", "coverage", "lab", "genitor", "supervision", "admin", "obstetrics", "committee", "quality control"];

const Catalog = () => {
    const books = getAllBooks();
    const [selectedCategory, setSelectedCategory] = useState("choose a genre");
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
    });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    const filteredBooks = selectedCategory === "choose a genre"
        ? books
        : books.filter(book => book.category === selectedCategory.toLowerCase());

    return (
        <div className="py-8">
            <h2 className={styles.gallery}>Staff Gallery</h2>

            <div className={styles.galleries}>
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    name="category"
                    id="category"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                >
                    {categories.map((category, index) => (
                        <option className={styles.option} key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div className="relative mt-6">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-4">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((book, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2"
                                >
                                    <Link href={`/details/${book.id}`}>
                                        <div className={styles.image}>
                                            <h4 className={styles.name}>{book.title}</h4>
                                            <Image
                                                className={styles.img}
                                                src={book.cover}
                                                alt={book.title}
                                                width={300}
                                                height={200}
                                            />
                                            <h4 className="text-sm text-gray-600 mt-2">
                                                Click on the image for more details
                                            </h4>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <div className="w-full text-center py-8 text-gray-500">
                                No items found in this category
                            </div>
                        )}
                    </div>
                </div>

                {filteredBooks.length > 0 && (
                    <>
                        <button
                            onClick={scrollPrev}
                            disabled={!canScrollPrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={scrollNext}
                            disabled={!canScrollNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Catalog;
