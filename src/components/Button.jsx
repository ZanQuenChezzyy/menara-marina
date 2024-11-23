// Import PropTypes
import PropTypes from 'prop-types';

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
    return (
        <button
            id={id}
            className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-lg bg-violet-50 px-7 py-3 text-black ${containerClass}`}
        >
            {leftIcon}
            <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                <div>{title}</div>
            </span>
            {rightIcon}
        </button>
    );
};

// Define PropTypes for validation
Button.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
    rightIcon: PropTypes.node,
    leftIcon: PropTypes.node,
    containerClass: PropTypes.string,
};

// Set default props (optional)
Button.defaultProps = {
    id: '',
    rightIcon: null,
    leftIcon: null,
    containerClass: '',
};

export default Button;