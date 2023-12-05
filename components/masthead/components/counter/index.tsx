import React from 'react';
import styles from './styles.module.scss';
import handleCounter from '@/utils/handleCounter';
import { INumbersProps } from './interface';

const Counter: React.FC<INumbersProps> = ({ currentIndex, total }) => {
	return (
		<div className={styles.counter}>
			<div className={styles.counter__container}>
				<span className='small'>
					{handleCounter(currentIndex + 1)}/{handleCounter(total)}
				</span>
			</div>
		</div>
	);
};

export default Counter;
