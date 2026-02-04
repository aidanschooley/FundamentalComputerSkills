import { Responsive, WidthProvider } from "react-grid-layout";
import { useState } from 'react';

import AppIcon from '../Components/AppIcon.jsx'
import Clock from '../Components/Clock.jsx'
import SideBar from '../Components/SideBar.jsx'
import AppWindow from '../Components/AppWindow.jsx';
import StartButton from "../Components/StartButton.jsx";
import StartMenu from "../Components/StartMenu.jsx";

import desktopIcon from '../assets/DesktopIconPlaceholder.png'

const ResponsiveGridLayout = WidthProvider(Responsive);

function Desktop() {

    const initialLayout = [
        { i: "app1", x: 0, y: 0, w: 1, h: 1, static: false },
        { i: "app2", x: 0, y: 1, w: 1, h: 1, static: false },
        { i: "app3", x: 0, y: 2, w: 1, h: 1, static: false }
    ]

    const [isStartOpen, setIsStartOpen] = useState(false);

    const [isApp1Open, setIsApp1Open] = useState(false);
    const [isApp2Open, setIsApp2Open] = useState(false);
    const [isApp3Open, setIsApp3Open] = useState(false);

    return <>
        <div className="desktop-page">
            <div className="desktop-container">
                <ResponsiveGridLayout
                    className="layout"
                    layouts={{ lg: initialLayout }}
                    breakpoints={{ lg: 1200 }}
                    cols={{ lg: 12 }}
                    compactType={null}
                    preventCollision={true}
                    rowHeight={80}          // Controls vertical snap
                    width={1200}
                    isResizable={false}     // Desktop icons don’t resize   
                    draggableHandle=".app-icon" // Only drag by the icon
                >
                    <div key="app1">
                        <AppIcon name="App Name 1" icon={desktopIcon} openWindow={() => setIsApp1Open(true)} />
                    </div>

                    <div key="app2">
                        <AppIcon name="App Name 2" icon={desktopIcon} openWindow={() => setIsApp2Open(true)} />
                    </div>

                    <div key="app3">
                        <AppIcon name="App Name 3" icon={desktopIcon} openWindow={() => setIsApp3Open(true)} />
                    </div>
                </ResponsiveGridLayout>

                {/* Taskbar */}
                <div className="navbar">
                    <div className="navbar-left">
                        {/* Left-aligned widgets can go here */}
                    </div>

                    <div className="navbar-center">
                        <StartButton toggleStartMenu={() => setIsStartOpen(prev => !prev)} />
                        <AppIcon name="App Name 1" icon={desktopIcon} openWindow={() => setIsApp1Open(true)} variant="taskbar" />
                        <AppIcon name="App Name 2" icon={desktopIcon} openWindow={() => setIsApp2Open(true)} variant="taskbar" />
                        <AppIcon name="App Name 3" icon={desktopIcon} openWindow={() => setIsApp3Open(true)} variant="taskbar" />
                    </div>

                    <div className="navbar-right">
                        {/* Clock, wifi, etc */}
                        <Clock />
                    </div>
                </div>

                <StartMenu
                    closeStartMenu={() => setIsStartOpen(false)} 
                    isOpen={isStartOpen}
                />

                {/* App Windows */}
                <AppWindow
                    name={"App Name 1"}
                    isOpen={isApp1Open}
                    onClose={() => setIsApp1Open(false)}
                />

                <AppWindow
                    name={"App Name 2"}
                    isOpen={isApp2Open}
                    onClose={() => setIsApp2Open(false)}
                />

                <AppWindow
                    name={"App Name 3"}
                    isOpen={isApp3Open}
                    onClose={() => setIsApp3Open(false)}
                />

            </div>

            <div className="sidebar-container">
                <SideBar />
            </div>
        </div>
    </>
}
export default Desktop;
