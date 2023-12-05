import { Dispatch, SetStateAction } from 'react';

type YearRange = { startYear: number; endYear: number };

const nextButton = (
	currentIndex: number,
	setCurrentIndex: Dispatch<SetStateAction<number>>,
	setRotationAngle: Dispatch<SetStateAction<number>>,
	yearRanges: YearRange[],
) => {
	if (currentIndex < yearRanges.length - 1) {
		setCurrentIndex((prevIndex) => prevIndex + 1);
		const angleChange = 360 / yearRanges.length;
		setRotationAngle((prevAngle) => prevAngle + angleChange);
	}
};

const prevButton = (
	currentIndex: number,
	setCurrentIndex: Dispatch<SetStateAction<number>>,
	setRotationAngle: Dispatch<SetStateAction<number>>,
	yearRanges: YearRange[],
) => {
	if (currentIndex > 0) {
		setCurrentIndex((prevIndex) => prevIndex - 1);
		const angleChange = 360 / yearRanges.length;
		setRotationAngle((prevAngle) => prevAngle - angleChange);
	}
};

export { nextButton, prevButton };
