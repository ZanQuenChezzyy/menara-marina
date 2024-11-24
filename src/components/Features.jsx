import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti"

const BentoTilt = ({ children, className = '' }) => {
    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef();
    const handleMouseMove = (e) => {
        if (!itemRef.current) return;
        const { left, top, width, height } = itemRef.current.getBoundingClientRect();
        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;
        const tiltX = (relativeY - 0.05) * 5;
        const tiltY = (relativeX - 0.05) * -5;
        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
        setTransformStyle(newTransform);
    }
    const handleMouseLeave = () => {
        setTransformStyle('');
    }

    return (
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: transformStyle }}>
            {children}
        </div>
    )
}

const BentoCard = ({ src, title, description }) => {
    return (
        <div className="relative size-full">
            <video
                src={src}
                loop
                muted
                autoPlay
                playsInline
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div className="text-justify">
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

const Features = () => {
    return (
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-lg text-blue-50">Apa itu Menara Marina ?</p>
                    <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50 text-justify">
                        Menara Marina adalah program Corporate Social Responsibility (CSR) yang diusung oleh PT Badak LNG,
                        bertujuan untuk memberdayakan masyarakat pesisir di Kampung Terapung Tihi-Tihi, Kelurahan Bontang Lestari.
                        Nama Menara Marina merupakan singkatan dari &quot;Menuju Nelayan Ramah Lingkungan Mandiri dan Sejahtera&quot;.
                        Program ini juga bertujuan untuk mengurangi dampak mikroplastik di laut, mendukung keberlanjutan lingkungan, dan
                        meningkatkan potensi Kampung Tihi-Tihi sebagai destinasi wisata.
                    </p>
                </div>
                <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                    <BentoCard
                        src="videos/marina-4.mp4"
                        title={<>Inovasi Hijau</>}
                        description="Inovasi ramah lingkungan yang diciptakan oleh PT Badak LNG dan warga Tihi-Tihi untuk mendukung kelestarian laut sekaligus meningkatkan efisiensi budidaya rumput laut dengan solusi berkelanjutan."
                    />
                </BentoTilt>
                <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoCard
                            src="videos/marina-teaser.mp4"
                            title={<>Kapsul Laut</>}
                            description="Kapsul pelampung khusus untuk budidaya rumput laut, yang ramah lingkungan dan tahan hingga 40 tahun, menggantikan penggunaan botol plastik yang mencemari ekosistem laut."
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoCard
                            src="videos/marina-3.mp4"
                            title={<>Solusi Tihi-Tihi</>}
                            description="Program dan inovasi yang dirancang untuk mengatasi tantangan sosial, ekonomi, dan lingkungan di Kampung Terapung Tihi-Tihi."
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                        <BentoCard
                            src="videos/marina-2.mp4"
                            title={<>Ekonomi Berkelanjutan</>}
                            description="Melalui inovasi seperti Kapsurula, pelatihan teknologi e-FAD, dan budidaya rumput laut, Badak LNG membantu warga Tihi-Tihi membangun ekonomi lokal yang mandiri dan berkelanjutan."
                        />
                    </BentoTilt>
                    <div className="bento_tilt_2">
                        <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                            <h1 className="bento-title special-font max-w-64 text-black">
                                lebih banyak lagi akan segera hadir
                            </h1>
                            <TiLocationArrow className="m-5 scale-[5] self-end" />
                        </div>
                    </div>
                    <BentoTilt className="bento_tilt_2">
                        <video
                            src="videos/marina-5.mp4"
                            loop
                            muted
                            autoPlay
                            playsInline={true}
                            className="size-full object-cover object-center"
                        />
                    </BentoTilt>
                </div>
            </div>
        </section>
    )
}

export default Features