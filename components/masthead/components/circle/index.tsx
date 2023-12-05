'use client';

import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import { ICircleContainerProps } from './interface';

const Circle: React.FC<ICircleContainerProps> = ({
	yearRanges,
	currentIndex,
	rotationAngle,
	handleCircleClick,
	words,
}) => {
	const containerRef = useRef<HTMLUListElement>(null);
	const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

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

	// // тут я создаю рефы для каждого элемента circleItem 
	useEffect(() => {
		itemRefs.current = itemRefs.current.slice(0, yearRanges.length);
	}, [yearRanges.length]);

	return (
		<div className={styles.circleContainer}>
			<ul className={styles.circle} ref={containerRef}>
				{yearRanges.map((_, index) => (
					<li
						className={`${styles.circleItem} ${index === currentIndex ? styles.active : ''}`}
						ref={(el) => (itemRefs.current[index] = el)}
						key={index}
						onClick={() => handleCircleClick(index)}
					>
						<span className={`${styles.circleInfo} ${index === currentIndex ? styles.visible : ''}`}>
							{index + 1}
						</span>
						<span className={`${styles.circleWord} ${index === currentIndex ? styles.visible : ''}`}>
							{words[index]}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Circle;
