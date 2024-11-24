const Button = ({ title, id, rightIcon, leftIcon, containerClass, href }) => {
    return (
        <a
            id={id}
            className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-lg bg-violet-50 px-7 py-3 text-black ${containerClass}`}
            href={href}
        >
            {leftIcon}
            <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                <div>{title}</div>
            </span>
            {rightIcon}
        </a>
    );
};

export default Button;