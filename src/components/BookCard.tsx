import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

interface BookCardProps {
    id: number
    title: string
    image: string
    price: number
    rating?: number
}

export default function BookCard({ id, title, image, price, rating }: BookCardProps) {
    return (
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200">
            <Link href={`/books/${id}`}>
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                    <Image
                        src={image || '/placeholder-book.png'}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                </div>
                <CardContent className="p-4">
                    <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 min-h-[2.5rem]">
                        {title}
                    </h3>
                    {rating !== undefined && (
                        <div className="flex items-center gap-1 mt-2">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-gray-600">{rating.toFixed(1)}</span>
                        </div>
                    )}
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    <p className="text-lg font-bold text-blue-600">
                        ${price.toFixed(2)}
                    </p>
                </CardFooter>
            </Link>
        </Card>
    )
}
