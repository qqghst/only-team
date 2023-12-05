import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { IButtonsProps } from './interface';

const Buttons: React.FC<IButtonsProps> = ({ onPrevClick, onNextClick, currentIndex, total }) => {
	return (
		<div className={styles.buttons}>
			<div className={styles.buttons__container}>
				<Image
					src='/masthead/arrow.svg'
					alt='Previous'
					width={12.5 / 2}
					height={25 / 2}
					onClick={onPrevClick}
					style={{
						opacity: currentIndex > 0 ? 1 : 0.5,
						pointerEvents: currentIndex > 0 ? 'auto' : 'none',
					}}
				/>
				<Image
					src='/masthead/arrow.svg'
					alt='Next'
					width={12.5 / 2}
					height={25 / 2}
					onClick={onNextClick}
					style={{
						opacity: currentIndex < total - 1 ? 1 : 0.5,
						pointerEvents: currentIndex < total - 1 ? 'auto' : 'none',
					}}
				/>
			</div>
		</div>
	);
};

export default Buttons;
