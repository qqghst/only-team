import React from 'react';
import styles from './styles.module.scss';
import { SliderProps } from './interface';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider: React.FC<SliderProps> = ({ slidesData }) => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={50}
			navigation
			pagination
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
			style={{ width: '75vw', position: 'absolute', bottom: '100px' }}
			breakpoints={{
				320: {
					slidesPerView: 2,
					spaceBetween: 25,
					navigation: {
						enabled: false,
					},
					pagination: {
						enabled: true,
						el: '.swiper-pagination', 
					},
				},

				768: {
					slidesPerView: 3,
					spaceBetween: 50,
					pagination: {
						enabled: false,
					},
				},
			}}
		>
			<div className={styles.slider}>
				{slidesData.map((content, index) => (
					<SwiperSlide key={index}>
						<div className={styles.textContainer}>
							<h5 className='h5'>{content.year}</h5>
							<p className='p'>{content.content}</p>
						</div>
					</SwiperSlide>
				))}
			</div>
		</Swiper>
	);
};

export default Slider;
