// CustomPagination.tsx
import React from 'react';

interface CustomPaginationProps {
    currentIndex: number;
    totalSlides: number;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({ currentIndex, totalSlides }) => {
    return (
        <div>
            <span>Slide {currentIndex + 1} of {totalSlides}</span>
        </div>
    );
}

export default CustomPagination;
