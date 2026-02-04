function AppIcon({ name, icon, openWindow, variant = "desktop"}) {

    const handleIconClick = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        openWindow(true);
    };

    const clickProps = variant === "taskbar"
        ? { onClick: handleIconClick }
        : { onDoubleClick: handleIconClick };

    return (
        <div role="button" tabIndex={0} className={`app-icon ${variant}`} {...clickProps} >
            <img className="app-icon-image" src={icon} alt={name} />

            {/* Desktop shows name under icon, taskbar hides it */}
            {variant === "desktop" && (
                <div className="app-icon-name">{name}</div>
            )}

            {/* Tooltip for both desktop and taskbar */}
            <div className={`app-icon-tooltip ${variant}`}>{name}</div>

        </div>
    );
}

export default AppIcon;