import React, { useState, useCallback } from 'react';
import styles from './styles.module.scss';
import { SliderProps } from './interface';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CustomArrow from './custom-arrow';
import { Swiper as SwiperClass } from 'swiper/types';
// import { SwiperNavButtons } from './arrow';

const Slider: React.FC<SliderProps> = ({ slidesData }) => {
	const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

	const handleNext = useCallback(() => {
		swiperRef?.slideNext();
	}, [swiperRef]);

	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				navigation
				pagination
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => setSwiperRef(swiper)}
				style={{ position: 'absolute', bottom: '100px' }}
				breakpoints={{
					320: {
						slidesPerView: 2,
						spaceBetween: 25,
						navigation: {
							enabled: false,
						},
						pagination: {
							enabled: true,
							el: '.swiper-custom-pagination',
						},
					},

					768: {
						slidesPerView: 3.3,
						spaceBetween: 50,
						pagination: {
							enabled: false,
						},
					},
				}}
			>
				<div className={styles.slider}>
					<div className={styles.slider__container}>
						{slidesData.map((content, index) => (
							<SwiperSlide key={index}>
								<div className={styles.content}>
									<h5 className='h5'>{content.year}</h5>
									<p className='p'>{content.content}</p>
								</div>
							</SwiperSlide>
						))}
					</div>
				</div>
			</Swiper>
			<div className="swiper-custom-pagination"/>
			<CustomArrow handleNext={handleNext} />
		</>
	);
};

export default Slider;
