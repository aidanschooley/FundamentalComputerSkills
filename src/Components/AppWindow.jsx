import { Rnd } from 'react-rnd';


function AppWindow({ name, isOpen, onClose, zIndex, bringToFront }) {

    const handleClose = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onClose();
    };

    const handleFocus = (e) => {
        // When window is clicked, bring it to front (function is managed by Desktop.jsx)
        e.stopPropagation();
        if (bringToFront) {
            bringToFront();
        }
    };

    return (
        <Rnd 
            default={{
                x: 400,
                y: 100,
                width: 500,
                height: 400,
            }}
            minWidth={300}
            minHeight={100}
            onMouseDown={handleFocus}
            className={`appWindow ${isOpen ? 'open' : ''}`}
            style={{ zIndex: zIndex }}
        >
            <div className="window-content">
                <div className="window-header">
                    <h2>{name}</h2>

                    <a href="#" className="appWindowClose" onClick={handleClose}>
                        Close &times;
                    </a>
                </div>

                <div className="window-body">
                    <p>This is the window content for {name}.</p>
                </div>
            </div>
        </Rnd>
    );
}

export default AppWindow;