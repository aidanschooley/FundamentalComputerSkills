function Lessons() {
    const response = fetch('/api/lessons')
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.error('Error fetching lessons:', err));
        console.log(response);
    return <>
    <div class="lessons-page">
        {/* {response.lessons.map((category, index) => (
            <div class="lesson" key={index}>
                <button type="button" class="lesson-header">{category.category}</button>
                <div class="lesson-content">
                    {category.items.map((lesson, lessonIndex) => (
                        <p key={lessonIndex}>{lesson}</p>
                    ))}
                </div>
            </div>
        ))} */}
        <div class="lesson">
            <button type="button" class="lesson-header">Category #1</button>
             <div class="lesson-content">
                <p>Lesson 1</p>
                 <p>Lesson 2</p>
                <p>Lesson 3</p>
                <p>Lesson 4</p>
                <p>Lesson 5</p>
            </div>
        </div>

        <div class="lesson">
            <button type="button" class="lesson-header">Category #2</button>
            <div class="lesson-content">
                <p>Lesson 1</p>
                <p>Lesson 2</p>
                <p>Lesson 3</p>
                <p>Lesson 4</p>
                <p>Lesson 5</p>
                <p>Lesson 6</p>
                <p>Lesson 7</p>
             </div>
         </div>
    </div>
    </>;
}

export default Lessons;