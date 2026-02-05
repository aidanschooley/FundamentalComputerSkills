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
            {/* Will need to seperate structure for different apps, currently File Explorer*/}
            <div className="window-content">
                <div className="window-header">
                    <div className="top-header">
                        <p>{name}</p>

                        <a href="#" className="appWindowClose" onClick={handleClose}>
                            ─ &#9744; &times;
                        </a>
                    </div>
                    
                    <div className="bottom-header">
                        {/*various icons*/}
                    </div>
                </div>

                <div className="window-body-top-nav">
                        <p>&#8592; &#8594; &darr;</p>
                        <input type="text" placeholder="Find..." />
                        <input type="text" placeholder="Search..." />
                    </div>

                <div className="window-body">
                    <div className="window-body-side-nav">
                        <ul> &#8964; Quick Access
                            <li>&#8250; Desktop</li>
                            <li>&#8250; Downloads</li>
                            <li>&#8250; Documents</li>
                            <li>&#8250; Pictures</li>
                            <li>&#8250; Music</li>
                            <li>&#8250; Videos</li>
                        </ul>
                        <ul>&#8250; OneDrive </ul>
                        <ul>&#8250; This PC </ul>
                        <ul>&#8250; Network </ul>
                    </div>
                    <div className="window-body-main-content">
                        <p>This is the main window content for {name}.</p>
                    </div>
                </div>
            </div>
        </Rnd>
    );
}

export default AppWindow;