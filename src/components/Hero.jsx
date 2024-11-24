import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiMediaPlay } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVideoRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    };

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleMiniVideoClick = () => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    };

    useEffect(() => {
        if (loadedVideos === totalVideos - 1) {
            setIsLoading(false);
        }
    }, [loadedVideos]);

    useGSAP(
        () => {
            if (hasClicked) {
                gsap.set("#next-video", { visibility: "visible" });
                gsap.to("#next-video", {
                    transformOrigin: "center center",
                    scale: 1,
                    width: "100%",
                    height: "100%",
                    duration: 1,
                    ease: "power1.inOut",
                    onStart: () => nextVideoRef.current.play(),
                });
                gsap.from("#current-video", {
                    transformOrigin: "center center",
                    scale: 0,
                    duration: 1.5,
                    ease: "power1.inOut",
                });
            }
        },
        {
            dependencies: [currentIndex],
            revertOnUpdate: true,
        }
    );

    useGSAP(() => {
        gsap.set("#video-frame", {
            clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
            borderRadius: "0% 0% 40% 10%",
        });
        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0% 0% 0% 0%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        });
    });

    const getVideoSrc = (index) => `videos/marina-${index}.mp4`;

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            <div
                id="video-frame"
                className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
            >
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div
                            onClick={handleMiniVideoClick}
                            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
                        >
                            <video
                                ref={nextVideoRef}
                                src={getVideoSrc(upcomingVideoIndex)}
                                loop
                                muted
                                playsInline={true}
                                preload="metadata"
                                id="current-video"
                                className="size-64 origin-center scale-150 object-cover object-center"
                            />
                        </div>
                    </div>
                    <video
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIndex)}
                        loop
                        muted
                        playsInline={true}
                        preload="metadata"
                        id="next-video"
                        className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                    />
                    <video
                        src={getVideoSrc(
                            currentIndex === totalVideos - 1 ? 1 : currentIndex
                        )}
                        autoPlay
                        loop
                        muted
                        playsInline={true}
                        preload="metadata"
                        className="absolute left-0 top-0 size-full object-cover object-center"
                    />
                </div>
                <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
                    Ocean
                </h1>

                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10" >
                        <p className="max-w-2xl sm:text-1xl md:text-2xl font-butterscotch text-blue-100">
                            Waste Free Ocean For Future-Fit-Society
                        </p>
                        <h1 className="special-font hero-heading text-blue-100">
                            Menara Marina
                        </h1>
                        <p className="mb-5 mt-6 max-w-2xl sm:text-1xl md:text-2xl font-papernotes text-blue-100">
                            Menuju Nelayan Ramah Lingkungan <br /> Mandiri Dan Sejahtera
                        </p>
                        <Button
                            id="watch-video"
                            title="Tonton Video"
                            leftIcon={<TiMediaPlay />}
                            containerClass="!bg-blue-300 flex-center gap-1"
                            href="https://youtu.be/cRWYc5gO_So?si=V8Y8ItbN2t8XoEWg"
                        />
                    </div>
                </div>
            </div>
            <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
                Ocean
            </h1>
        </div>
    );
};

export default Hero;
