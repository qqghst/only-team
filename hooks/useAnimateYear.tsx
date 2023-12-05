import { useState, useEffect } from 'react';

interface YearRange {
	startYear: number;
	endYear: number;
}

const useAnimatedYear = (currentIndex: number, yearRanges: YearRange[]): YearRange => {
	const [animatedYear, setAnimatedYear] = useState<YearRange>(yearRanges[0]);

	useEffect(() => {
		const { startYear: targetStart, endYear: targetEnd } = yearRanges[currentIndex];

		const interval = setInterval(() => {
			setAnimatedYear((prevYear) => {
				const newStartYear =
					prevYear.startYear !== targetStart
						? prevYear.startYear + (prevYear.startYear < targetStart ? 1 : -1)
						: prevYear.startYear;

				const newEndYear =
					prevYear.endYear !== targetEnd
						? prevYear.endYear + (prevYear.endYear < targetEnd ? 1 : -1)
						: prevYear.endYear;

				return { startYear: newStartYear, endYear: newEndYear };
			});
		}, 50);

		return () => clearInterval(interval);
	}, [currentIndex, yearRanges]);

	return animatedYear;
};

export default useAnimatedYear;
