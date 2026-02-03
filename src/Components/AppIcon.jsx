function AppIcon({ name, icon, variant="desktop" }) {
    return (

        <a href="#open-modal" className={`app-icon ${variant}`}>
            <img className="app-icon-image" src={icon} alt={name} />

            {/* Desktop shows name under icon, taskbar hides it */}
            {variant === "desktop" && (
                <div className="app-icon-name">{name}</div>
            )}

            {/* Tooltip for both desktop and taskbar */}
            <div className={`app-icon-tooltip ${variant}`}>{name}</div>

            <div id="open-modal" class="modal-window">
                <div>
                    <h2>Hello!</h2>
                    <p>This is a window.</p>
                    <a href="#" title="Close" class="modal-close">Close &times;</a>
                </div>
            </div>


        </a>
        

    );
}

export default AppIcon;