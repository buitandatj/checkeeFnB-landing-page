'use client'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const imagesFnB = [
    { src: '/assets/images/goigiaiphap/f&b/slide-1.avif' },
    { src: '/assets/images/goigiaiphap/f&b/slide-2.avif' },
]

function Arrow({ onClick, direction }: { onClick?: () => void; direction: 'left' | 'right' }) {
    return (
        <button
            onClick={onClick}
            className={`absolute top-1/2 -translate-y-1/2 z-10
        ${direction === 'left' ? 'left-2 md:-left-14' : 'right-2 md:-right-14'}
        md:w-16 md:h-16 rounded-full w-8 h-8
        bg-white/80 backdrop-blur
        shadow-lg hover:shadow-blue-500/30
        flex items-center justify-center
        transition-all hover:scale-110`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                {direction === 'left' ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                )}
            </svg>
        </button>
    )
}

export default function ProcessCarousel({ images }: { images?: { src: string }[] }) {
    const data = images ? images : imagesFnB
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        nextArrow: <Arrow direction="right" />,
        prevArrow: <Arrow direction="left" />,
    }

    return (

        <div className="relative w-full h-full  flex items-center justify-center ">
            <Slider {...settings} className="w-full">
                {data.map((img, i) => (
                    <div key={i} className="flex justify-center">
                        <Image
                            src={img.src}
                            alt="Quy trình quản lý"
                            width={900}
                            height={600}
                            className="w-full h-full object-contain"
                            priority={i === 0}
                        />
                    </div>
                ))}
            </Slider>
        </div>


    )
}