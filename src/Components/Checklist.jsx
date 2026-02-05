import React, { useState, useEffect } from 'react';
function Checklist() {

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
    return( 
        <div>
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
        </div>
    )
}

export default Checklist;