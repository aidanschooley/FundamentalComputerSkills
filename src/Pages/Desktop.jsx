import { Responsive, WidthProvider } from "react-grid-layout";
import { useState } from 'react';

import AppIcon from '../Components/AppIcon.jsx'
import Clock from '../Components/Clock.jsx'
import SideBar from '../Components/SideBar.jsx'
import AppWindow from '../Components/AppWindow.jsx';

import desktopIcon from '../assets/DesktopIconPlaceholder.png'

const ResponsiveGridLayout = WidthProvider(Responsive);

function Desktop() {

    const initialLayout = [
        { i: "app1", x: 0, y: 0, w: 1, h: 1, static: false },
        { i: "app2", x: 0, y: 1, w: 1, h: 1, static: false },
        { i: "app3", x: 0, y: 2, w: 1, h: 1, static: false }
    ]

   

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
                        <AppIcon name="App Name 1" icon={desktopIcon} openWindow={() => setIsOpenApp1(true)} />
                    </div>

                    <div key="app2">
                        <AppIcon name="App Name 2" icon={desktopIcon} openWindow={() => setIsOpenApp2(true)} />
                    </div>

                    <div key="app3">
                        <AppIcon name="App Name 3" icon={desktopIcon} openWindow={() => setIsOpenApp3(true)} />
                    </div>
                </ResponsiveGridLayout>

                {/* Taskbar */}
                <div className="navbar">
                    <div className="navbar-left">
                        {/* Left-aligned widgets can go here */}
                    </div>

                    <div className="navbar-center">
                        <AppIcon name="App Name 1" icon={desktopIcon} openWindow={() => setIsOpenApp1(true)} variant="taskbar" />
                        <AppIcon name="App Name 2" icon={desktopIcon} openWindow={() => setIsOpenApp2(true)} variant="taskbar" />
                        <AppIcon name="App Name 3" icon={desktopIcon} openWindow={() => setIsOpenApp3(true)} variant="taskbar" />
                    </div>

                    <div className="navbar-right">
                        {/* Clock, wifi, etc */}
                        <Clock />
                    </div>
                </div>

                {/* App Windows */}
                <AppWindow
                    name={"App Name 1"}
                    isOpen={isOpenApp1}
                    onClose={() => setIsOpenApp1(false)}
                />

                <AppWindow
                    name={"App Name 2"}
                    isOpen={isOpenApp2}
                    onClose={() => setIsOpenApp2(false)}
                />

                <AppWindow
                    name={"App Name 3"}
                    isOpen={isOpenApp3}
                    onClose={() => setIsOpenApp3(false)}
                />

            </div>

            <div className="sidebar-container">
                <SideBar />
            </div>
        </div>
    </>
}
export default Desktop;
