export type ICircleContainerProps = {
	yearRanges: Array<{ startYear: number; endYear: number }>;
	currentIndex: number;
	rotationAngle: number;
	handleCircleClick: (index: number) => void;
	words: string[];
};