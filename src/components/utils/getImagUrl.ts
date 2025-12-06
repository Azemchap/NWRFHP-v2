
export const getImgUrl = (imagePath: string): string => {
    // If it's already a full URL, return it
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('/')) {
        return imagePath;
    }

    // For relative paths, assume they're in assets folder
    // Adjust this path based on your project structure
    return `/assets/${imagePath}`;
};
