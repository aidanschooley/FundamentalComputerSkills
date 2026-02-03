function SideBar() {
    return (
        <>
            <div id='sidebar' className='sidebar'>
                {/* dropdown menu 
                <div class="dropdown">
                    <button class="dropdown-button">Menu</button>
                    <div class="dropdown-content">
                        <a href="#">Name</a>
                        <a href="/lessons">Lessons</a> 
                        <a href="/">Desktop</a>
                        <a href="#">Setting</a> 
                        <a href="/login">Log Out</a> 
                    </div>
                </div>
                */}

                {/* Lesson number and progress */}
                <div className='lesson-num'>
                    <p>Lesson #1</p>
                    <div className="lesson-progress"></div>
                </div>

                {/* Lesson instructions */}
                <div className='lesson-instructions'>
                    <p>Step 1</p>
                    <p>Step 2</p>
                    <p>Step 3</p>
                    <p>Step 4</p>
                    <p>Step 5</p>
                </div>

                {/* Help buttons */}
                <div className="help-buttons">
                    <button className="hint-button">
                        Hints
                    </button>
                    <button className="chat-button">
                        Questions
                    </button>
                </div>
                
            </div>
        </>
    );
}

export default SideBar;