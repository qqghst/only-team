export type IButtonsProps = {
	onPrevClick: () => void;
	onNextClick: () => void;
	currentIndex: number;
	total: number;
};