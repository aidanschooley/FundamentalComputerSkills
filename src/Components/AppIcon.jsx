function AppIcon({ name, icon, openWindow, variant = "desktop", isAppOpen = false}) {

    // functions for single click (on taskbar) and double click (on desktop)
    const handleIconClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (variant === "taskbar") {
            openWindow();
        }
    };
    const handleDoubleClick = (e) => {
        console.log("double click");
        e.preventDefault();
        e.stopPropagation();
        if (variant === "desktop") {
            openWindow();
        }
    };

    return (
        <div 
            role="button" 
            tabIndex={0} 
            className={`app-icon ${variant}`} 
            onClick={variant === "taskbar" ? handleIconClick : undefined}
            onDoubleClick={variant === "desktop" ? handleDoubleClick : undefined}
        >
            <img className="app-icon-image" src={icon} alt={name} />

            {/* Desktop shows name under icon, taskbar hides it */}
            {variant === "desktop" && (
                <div className="app-icon-name">{name}</div>
            )}

            {/* Tooltip for both desktop and taskbar */}
            <div className={`app-icon-tooltip ${variant}`}>{name}</div>

            {/* Active indicator for taskbar (only shown when app is open) */}
            {variant === "taskbar" && isAppOpen && (
                <div className="app-icon-indicator"></div>
            )}

        </div>
    );
}

export default AppIcon;