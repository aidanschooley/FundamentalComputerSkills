import { useState, useEffect } from 'react';

function Lessons() {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/lessons')
            .then(res => res.json())
            .then(data => {
                setResponse(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching lessons:', err);
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading lessons</div>;

    return (
        <div className="lessons-page">
            {response?.lessons?.map((category, index) => (
                <div className="lesson" key={index}>
                    <button type="button" className="lesson-header">{category.category}</button>
                    <div className="lesson-content">
                        {category.items.map((lesson, lessonIndex) => (
                            <p key={lessonIndex}>{lesson}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Lessons;
