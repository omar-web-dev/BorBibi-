import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Type from './Type';

const carousel = () => {


    return (
        <div>
            {/* <h1>This is a Carousel</h1> */}
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={50}
                totalSlides={2}
                infinite
                interval={5000}
                isPlaying={true}
            >

                <Slider className='-z-50'>
                    <Slide index={0} >
                        <img className='w-[100%] cover center-center' src="https://i.ibb.co/gjS129Y/2.png" alt="slide-1" />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <div className='w-full text-center' style={{ color: "white", fontFamily: "Poppins" }}>
                                <p>Welcome</p>
                                <div className='text-[300%]' style={{ fontFamily: "Playfair Display" }}>
                                    <Type />
                                </div>
                                <p className='' style={{ fontWeight: "semibold" }}>Thousands of happy marriages happened through us.You could be next !</p>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={1}>
                        <img className='w-[100%] cover center-center' src="https://i.ibb.co/RB1gLJw/3.png" alt="slide-2" />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>

                            <div className='w-full text-center' style={{ color: "white", fontFamily: "Poppins" }}>
                                <p>Why Join</p>
                                <div className='text-[300%]' style={{ fontFamily: "Playfair Display" }}>
                                    <Type />
                                </div>
                                <p className='' style={{ fontWeight: "semibold" }}>Thousands of happy marriages happened through us.You could be next !</p>
                            </div>
                        </div>
                    </Slide>
                </Slider>
                <div className='text-center z-50 -mt-[35px]'>
                    <ButtonBack className='bg-red-500 border-2 rounded-full w-4 h-4'></ButtonBack>
                    <ButtonNext className='bg-red-500 border-2 rounded-full w-4 h-4'></ButtonNext>
                </div>
            </CarouselProvider>
        </div>
    );
};

export default carousel;
