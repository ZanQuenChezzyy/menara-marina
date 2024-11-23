import { FaGlobe, FaInstagram } from "react-icons/fa6";

const links = [
    { href: 'https://instagram.com/coopbadaklng38', icon: <FaInstagram /> },
    { href: 'https://www.badaklng.com/', icon: <FaGlobe /> }
];

const Footer = () => {
    return (
        <footer className="w-screen bg-white py-4 text-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm md:text-left">
                    &copy; Andereyan Muhammat 2024. All right reserved
                </p>
                <div className="flex justify-center gap-4 md:justify-start">
                    {links.map((link) => (
                        <a key={link} href={link.href} target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-500 ease-in-out hover:text-blue-500">
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer