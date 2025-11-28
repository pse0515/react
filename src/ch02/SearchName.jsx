// input 하나를 만들고 입력된 이름과 값과 일치하는 나이를 h2 태그 안에 출력하시오
// 이름이 없으면 '값 없음' 을 출력 

import { useState } from "react";

function SearchName() {

    const names = [
        {   name: "김준일",
            age: 32 
        },
        { 
            name: "김준이",
            age: 33 
        },
        {   name: "김준삼",
            age: 34 
        },
    ];

    const [ result, setResult ] = useState("찾은 결과 없음");
    const [ inputValue, setInputValue ] = useState("");

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
        setResult("찾은 결과 없음");

        for (let i = 0; i < names.length; i++) {
            const profile = names[i];
            if (profile.name === e.target.value) {
                setResult(profile.age);
                break;
            }
        }

    };

    return (
        <>
            <input type="text" value={inputValue} onChange={handleOnChange} />
            <h2>{result}</h2>
        </>
    );
}

export default SearchName;