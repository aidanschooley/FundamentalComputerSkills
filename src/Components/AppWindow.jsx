import { useRef } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

function AppWindow({ name, isOpen, onClose }) {

    const handleClose = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onClose(); 
    };

    // resolve FindDOMNode error:
    const nodeRef = useRef(null);

    return (
        <Draggable nodeRef={nodeRef} handle=".window-header">
            <div ref={nodeRef} className={`appWindow ${isOpen ? 'open' : ''}`}>
                <div className="window-content">

                    <div className="window-header">
                        <p>{name}</p>

                        <a href="#" className="appWindowClose" onClick={handleClose}>
                            — &#9744; &times;
                        </a>
                    </div>

                    <div className="window-body">
                        <p>This is the window content for {name}.</p>
                    </div>

                </div>
            </div>
        </Draggable>
    );
}

export default AppWindow;