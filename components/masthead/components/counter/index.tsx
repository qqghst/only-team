import React from 'react';
import styles from './styles.module.scss'
import { INumbersProps } from './interface';

const Counter: React.FC<INumbersProps> = ({ currentIndex, total }) => {
	const formatNumber = (num: number) => `0${num}`.slice(-2);

	return (
		<div className={styles.numbers}>
			<span className='small'>
				{formatNumber(currentIndex + 1)}/{formatNumber(total)}
			</span>
		</div>
	);
};

export default Counter;
