import { useEffect, useRef } from "react";

function StartMenu({ closeStartMenu, isOpen }) {
    const nodeRef = useRef(null);

    // Close on outside click
    useEffect(() => {
        function handleOutside(e) {
            if (!isOpen) return;    
            if (nodeRef.current && !nodeRef.current.contains(e.target)) {
                closeStartMenu?.();
            }
        }
        document.addEventListener("mousedown", handleOutside);
        document.addEventListener("touchstart", handleOutside);
        return () => {
            document.removeEventListener("mousedown", handleOutside);
            document.removeEventListener("touchstart", handleOutside);
        };
    }, [isOpen, closeStartMenu]);

    // Close on Escape and manage focus
    useEffect(() => {
        function handleKey(e) {
            if (!isOpen) return;
            if (e.key === "Escape") {
                closeStartMenu?.();
            }
        }
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [isOpen, closeStartMenu]);

    // Move focus into menu when opened
    useEffect(() => {
        if (isOpen && nodeRef.current) {
            const firstFocusable = nodeRef.current.querySelector(
                'button, [href], input, [tabindex]:not([tabindex="-1"])'
            );
            (firstFocusable || nodeRef.current).focus();
        }
    }, [isOpen]);

    return (
        <div
            ref={nodeRef}
            className={`start-menu ${isOpen ? 'open' : ''}`}
            tabIndex={-1}
        >
            Hello there
        </div>
    )
}

export default StartMenu;