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
        <Draggable
            nodeRef={nodeRef}
            handle=".window-header"
            cancel=".react-resizable-handle"
        >
            <div ref={nodeRef}>
                
                <ResizableBox
                    width={400}
                    height={300}
                    minConstraints={[250, 150]}
                    maxConstraints={[1600, 900]}
                    handleSize={[12, 12]}
                    resizeHandles={['n','s','e','w','ne','nw','se','sw']}
                    className={`appWindow ${isOpen ? 'open' : ''}`}
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
                </ResizableBox>

            </div>
        </Draggable>

    );
}

export default AppWindow;