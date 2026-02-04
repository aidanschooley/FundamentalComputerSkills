import React, { useState, useEffect } from 'react';
function SideBar() {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

     useEffect(() => {
        fetch('/api/step')
            .then(res => res.json())
            .then(data => {
                setResponse(data);
                setLoading(false);
                console.log("Step data:", data);
            })
            .catch(err => {
                console.error('Error fetching step data:', err);
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading step data</div>;

    const handleSubmit = (e) => {
        e.preventDefault(); 
        // Handle form submission logic here
    }

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
                    <form onSubmit={handleSubmit}>
                    {response?.step?.map((step, index) => (
                        <div key={index}>
                            <input type="checkbox" name={`step-${index}`} />
                            <label>{step.EventName}</label>
                        </div>
                    ))}
                    </form>
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