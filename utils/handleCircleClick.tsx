import { SetStateAction } from 'react';

const handleCircleClick = (
	index: number,
	currentIndex: number,
	setCurrentIndex: { (value: SetStateAction<number>): void; (arg0: any): void },
	setRotationAngle: { (value: SetStateAction<number>): void; (arg0: (prevAngle: any) => any): void },
	yearRanges: string | any[],
) => {
	const diff = index - currentIndex;
	const angleChange = 360 / yearRanges.length;
	setCurrentIndex(index);
	setRotationAngle((prevAngle: number) => prevAngle + diff * angleChange);
};

export default handleCircleClick;
