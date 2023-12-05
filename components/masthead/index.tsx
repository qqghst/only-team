'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Slider from './components/slider';
import Counter from './components/counter';
import Buttons from './components/buttons';
import Year from './components/year';
import Circle from './components/circle';
import { yearRanges } from './components/circle/data';
import { words } from './components/circle/data';
import { sliderData } from './components/slider/data';

const Masthead: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [animatedYear, setAnimatedYear] = useState(yearRanges[0]);
	const [rotationAngle, setRotationAngle] = useState(0);

	const containerRef = useRef<HTMLUListElement>(null);
	const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

	useEffect(() => {
		const targetYear = yearRanges[currentIndex];
		const interval = setInterval(() => {
			setAnimatedYear((prevYear) => {
				let newStartYear = prevYear.startYear;
				let newEndYear = prevYear.endYear;

				if (newStartYear !== targetYear.startYear) {
					newStartYear = newStartYear < targetYear.startYear ? newStartYear + 1 : newStartYear - 1;
				}

				if (newEndYear !== targetYear.endYear) {
					newEndYear = newEndYear < targetYear.endYear ? newEndYear + 1 : newEndYear - 1;
				}

				if (newStartYear === targetYear.startYear && newEndYear === targetYear.endYear) {
					clearInterval(interval);
				}

				return { startYear: newStartYear, endYear: newEndYear };
			});
		}, 50);

		return () => clearInterval(interval);
	}, [currentIndex, yearRanges]);

	const nextRange = () => {
		if (currentIndex < yearRanges.length - 1) {
			setCurrentIndex((prevIndex) => prevIndex + 1);
			setRotationAngle((prevAngle) => prevAngle + 360 / yearRanges.length);
		}
	};

	const prevRange = () => {
		if (currentIndex > 0) {
			setCurrentIndex((prevIndex) => prevIndex - 1);
			setRotationAngle((prevAngle) => prevAngle - 360 / yearRanges.length);
		}
	};

	const handleCircleItemClick = (index: number) => {
		const diff = index - currentIndex; // Разница между текущим и новым индексом
		const angleChange = 360 / yearRanges.length; // Угол изменения для одного элемента
		setCurrentIndex(index);
		setRotationAngle((prevAngle) => prevAngle + diff * angleChange);
	};

	const formatNumber = (num: number) => `0${num}`.slice(-2);

	useEffect(() => {
		const container = containerRef.current;
		const circles = itemRefs.current.filter((circle) => circle !== null);
		if (container) {
			const radius = container.offsetWidth / 2;
			const individualRotation = 360 / circles.length;

			circles.forEach((circle, i) => {
				const totalRotation = i * individualRotation + rotationAngle;
				const value = `rotate(${totalRotation}deg) translate(${radius}px) rotate(-${totalRotation}deg)`;
				if (circle) {
					circle.style.transform = value;
				}
			});
		}
	}, [rotationAngle, yearRanges.length]);

	// Создание refs для каждого circleItem
	useEffect(() => {
		itemRefs.current = itemRefs.current.slice(0, yearRanges.length);
	}, [yearRanges.length]);

	return (
		<div className={styles.masthead}>
			<div className={styles.masthead__container}>
				<div className={styles.suka}>
					<h2 className='h2'>
						Исторические
						<br />
						даты
					</h2>
				</div>
				<div className={styles.leftLine} />
				<div className={styles.middleLine} />
				<div className={styles.rightLine} />
				<div className={styles.horizontalLine} />
				<Year startYear={animatedYear.startYear} endYear={animatedYear.endYear} />
				<div className={styles.lol}>
					<Counter currentIndex={currentIndex} total={yearRanges.length} />
					<Buttons
						onPrevClick={prevRange}
						onNextClick={nextRange}
						currentIndex={currentIndex}
						total={yearRanges.length}
					/>
				</div>
				<Circle
					yearRanges={yearRanges}
					currentIndex={currentIndex}
					rotationAngle={rotationAngle}
					handleCircleItemClick={handleCircleItemClick}
					words={words}
				/>
				<Slider slidesData={sliderData[currentIndex].contents} />
			</div>
		</div>
	);
};

export default Masthead;
