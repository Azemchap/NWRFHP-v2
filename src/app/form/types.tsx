// ============================================
// types.ts - Centralized type definitions
// ============================================

export interface Book {
    id: number;
    title: string;
    description: string;
    price: number;
    rating?: number;
    image: string;  // Single main image for card display
    images?: string[];  // Multiple images for product detail page
    category?: string;
    unit?: string;
    keyword?: string;
}