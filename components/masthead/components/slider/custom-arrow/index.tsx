import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { ICustomArrowProps } from './interface';

const CustomArrow: React.FC<ICustomArrowProps> = ({ handleNext }) => {
	return (
		<div>
			<Image
				onClick={handleNext}
				className={styles.customArrow}
				src='/masthead/arrow.svg'
				alt='Previous'
				width={12.5 / 2}
				height={25 / 2}
			/>
		</div>
	);
};

export default CustomArrow;
