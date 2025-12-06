
import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

interface BookCardProps {
    id: number;
    title: string;
    image: string;
    price: number;
    rating?: number;
}

const BookCard: React.FC<BookCardProps> = ({ id, price, title, image, rating }) => {
    // Clean and validate image path
    const getImageSrc = (): string => {
        // If image is undefined, null, or empty string
        if (!image || image.trim() === '') {
            console.warn(`Book "${title}" (ID: ${id}) has no image`);
            return 'https://placehold.co/300x400/e2e8f0/64748b?text=No+Image';
        }

        // Trim whitespace and clean the path
        const cleanImage = image.trim();

        // filter out images starting with "de"
        if (cleanImage.toLocaleLowerCase().startsWith("de")) {
            return " "
        }



        // If it's already a full URL, return it
        if (cleanImage.startsWith('http://') || cleanImage.startsWith('https://')) {
            return cleanImage;
        }

        // If it starts with /, it's an absolute path from public folder
        if (cleanImage.startsWith('/')) {
            return cleanImage;
        }

        // Otherwise, assume it's in the assets folder
        return `/assets/${cleanImage}`;
    };

    const imageSrc = getImageSrc();

    return (
        <Link to={`/form/${id}`} className="group">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
                <div className="relative overflow-hidden aspect-[3/4] bg-green-100">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onLoad={() => {
                            console.log(`✓ Image loaded for "${title}":`, imageSrc);
                        }}
                        onError={(e) => {
                            console.error(`✗ Image failed for "${title}":`, imageSrc);
                            const target = e.currentTarget;
                            target.src = 'https://placehold.co/300x400/e2e8f0/64748b?text=No+Image';
                            target.onerror = null; // Prevent infinite loop
                        }}
                    />
                    {rating && (
                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-sm font-medium">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{rating.toFixed(1)}</span>
                        </div>
                    )}
                </div>

                <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem] group-hover:text-blue-600 transition-colors">
                        {title}
                    </h3>
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-green-600">${price.toFixed(2)}</span>
                        <span className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                            View Details →
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;