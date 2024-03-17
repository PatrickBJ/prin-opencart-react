import React, { useRef, useState, useEffect } from 'react';
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
    const intervalRef = useRef();
    const navigate = useNavigate();
    const images = getSliderImages();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 10000);

        return () => clearInterval(intervalRef.current);
    }, [images.length]);

    const prevSlideHandler = () => {
        clearInterval(intervalRef.current);
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    const nextSlideHandler = () => {
        clearInterval(intervalRef.current);
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    return (
        <SliderStyle style={{ backgroundImage: `url(${images[currentSlide]})` }}>
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}
                onClick={() => {
                    navigate('/produtos');
                }}
            />
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
                        onClick={() => {
                            clearInterval(intervalRef.current);
                            setCurrentSlide(index);
                        }}
                    />
                )}
            </SlideBullets>
        </SliderStyle >
    );
};