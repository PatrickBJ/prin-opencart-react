import React, { useState, useEffect } from 'react';
import { getSliderImages } from '@/api';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
    SliderStyle,
    SlideNavigator,
    SlideBullets,
} from './styled';
import classNames from 'classnames';

export const Slider = () => {
    const navigate = useNavigate();
    const images = getSliderImages();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 10000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    const prevSlideHandler = (event) => {
        event.stopPropagation();
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    const nextSlideHandler = (event) => {
        event.stopPropagation();
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    return (
        <SliderStyle
            imageSrc={images[currentSlide]}
            style={{ backgroundImage: `url(${images[currentSlide]})` }}
            onClick={() => {
                navigate('/produtos');
            }}
        >
            <SlideNavigator style={{ left: '20px' }}>
                <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlideHandler} />
            </SlideNavigator>
            <SlideNavigator style={{ right: '20px' }}>
                <FontAwesomeIcon icon={faChevronRight} onClick={nextSlideHandler} />
            </SlideNavigator>

            <SlideBullets>
                {images.map((img, index) =>
                    <div key={img}
                        className={classNames({ active: index === currentSlide })}
                        onClick={(event) => {
                            event.stopPropagation();
                            setCurrentSlide(index);
                        }}
                    />
                )}
            </SlideBullets>
        </SliderStyle >
    );
};