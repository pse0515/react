import { useState } from "react";

function App02_5() {

    const [ todos, setTodos ] = useState([]);
    const [ author, setAuthor ] = useState("");
    const [ value, setValue ] = useState("");

    const handleOnClick = () => {

        const todo = {
            content: value,
            author: author,
            writeDate: new Date().toLocaleString(),
        };

        setTodos([...todos, todo]);

        setAuthor("");
        setValue("");
    };

    return (
        <>
            <div>
                <input 
                    type="text" 
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)} 
                />
                <input 
                    type="text" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                />
                <button onClick={handleOnClick}>등록</button>
            </div>

            <ul>
                {todos.map((todo, idx) => (
                    <li key={idx}>
                        작성자: {todo.author} 내용: {todo.content} 작성일: {todo.writeDate}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App02_5;