'use client';

import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import SplitType from 'split-type';

const Title: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);
	const titleRef = useRef<HTMLHeadingElement | null>(null);

	useEffect(() => {
		tl.current = gsap.timeline();

		const span = new SplitType(titleRef.current!, {
			types: 'chars',
			charClass: 'charClass',
		});

		tl.current.to([titleRef.current], {
			autoAlpha: 1,
			delay: '-1',
		});

		tl.current.fromTo(
			span.chars,
			{ opacity: 0, y: 48 },
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.8,
				opacity: 1,
				stagger: 0.04,
				ease: 'power3.out',
			},
		);

		return () => {
			tl.current?.kill();
		};
	}, []);
	return (
		<div className={styles.title}>
			<div className={styles.title__container}>
				<h2 className='h2' ref={titleRef}>
					Исторические
					<br />
					даты
				</h2>
			</div>
		</div>
	);
};

export default Title;
