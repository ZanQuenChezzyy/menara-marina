import { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap';
import RoundedCorners from './RoundedCorners';
import Button from './Button';

const Story = () => {
    const frameRef = useRef('null');
    const handleMouseLeave = () => {
        const element = frameRef.current;

        gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: 'power1.inOut'
        })
    }
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut'
        })
    }

    return (
        <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
            <div className="flex size-full flex-col items-center py-10 pb-24">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    Menara Marina
                </p>
                <div className="relative size-full">
                    <AnimatedTitle
                        title="Jejak Menara Marina"
                        sectionId="#story"
                        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />
                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img
                                    ref={frameRef}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                    src="/img/marina-2.webp"
                                    alt="Menara Marina"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <RoundedCorners />
                    </div>
                </div>
                <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                        <p className="mt-20 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                            Menara Marina adalah saksi bisu perjalanan Kampung Tihi-Tihi menuju kemandirian. Dari pelatihan teknologi hingga solusi pelampung ramah lingkungan, cerita ini merangkum kolaborasi dan inovasi yang menghadirkan perubahan nyata di pesisir Bontang.
                        </p>
                        <Button
                            id="realm-button"
                            title="Tonton Video"
                            containerClass="mt-5"
                            href="https://youtu.be/cRWYc5gO_So?si=V8Y8ItbN2t8XoEWg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story