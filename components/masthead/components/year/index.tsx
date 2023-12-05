import React from 'react';
import styles from './styles.module.scss';
import { IYearProps } from './interface';

const Year: React.FC<IYearProps> = ({startYear, endYear}) => {
	return (
		<div className={styles.year}>
			<h1 className='h1'>{startYear}</h1>
			<h1 className='h1'>{endYear}</h1>
		</div>
	);
};

export default Year;
