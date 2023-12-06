'use client';

import React, { useState } from 'react';
import styles from './styles.module.scss';
import Slider from './components/slider';
import Counter from './components/counter';
import Buttons from './components/buttons';
import Year from './components/year';
import Circle from './components/circle';
import { yearRanges, words } from './components/circle/data';
import { sliderData } from './components/slider/data';
import handleCircleClick from '@/utils/handleCircleClick';
import { nextButton, prevButton } from '@/utils/handleButtons';
import useAnimatedYear from '@/hooks/useAnimateYear';
import Title from './components/title';

const Masthead: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [rotationAngle, setRotationAngle] = useState(0);
	const animatedYear = useAnimatedYear(currentIndex, yearRanges);

	return (
		<div className={styles.masthead}>
			<div className={styles.masthead__container}>
				<Title />
				<Year startYear={animatedYear.startYear} endYear={animatedYear.endYear} />
				<div className={styles.counterButtons}>
					<Counter currentIndex={currentIndex} total={yearRanges.length} />
					<Buttons
						onPrevClick={() => prevButton(currentIndex, setCurrentIndex, setRotationAngle, yearRanges)}
						onNextClick={() => nextButton(currentIndex, setCurrentIndex, setRotationAngle, yearRanges)}
						currentIndex={currentIndex}
						total={yearRanges.length}
					/>
				</div>
				<Circle
					yearRanges={yearRanges}
					currentIndex={currentIndex}
					rotationAngle={rotationAngle}
					handleCircleClick={(index) =>
						handleCircleClick(index, currentIndex, setCurrentIndex, setRotationAngle, yearRanges)
					}
					words={words}
				/>
				<Slider slidesData={sliderData[currentIndex].contents} />

				<div className={styles.leftLine} />
				<div className={styles.middleLine} />
				<div className={styles.rightLine} />
				<div className={styles.horizontalLine} />
			</div>
		</div>
	);
};

export default Masthead;
