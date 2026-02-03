import { useState } from 'react';
import AppWindow from './AppWindow.jsx';

function AppIcon({ name, icon, variant = "desktop" }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleIconClick = (e) => {
        e.preventDefault();
        setIsOpen(true);
    };

    const closeWindow = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(false);
    };

    return (
        <a href="#" className={`app-icon ${variant}`} onClick={handleIconClick} >
            <img className="app-icon-image" src={icon} alt={name} />

            {/* Desktop shows name under icon, taskbar hides it */}
            {variant === "desktop" && (
                <div className="app-icon-name">{name}</div>
            )}

            {/* Tooltip for both desktop and taskbar */}
            <div className={`app-icon-tooltip ${variant}`}>{name}</div>

            {/* Window */}
            <AppWindow 
                name={name}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />

        </a>
    );
}

export default AppIcon;