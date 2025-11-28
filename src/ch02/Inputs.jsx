import { useState } from "react";

function Inputs() {
    const [ fullName, setFullName ] = useState("");
    const [ age, setAge ] = useState("");

    const handleInputNameOnChange = (e) => {
        setFullName(e.target.value);
    }
    const handleInputAgeOnChange = (e) => {
        setAge(e.target.value);
        
    }

    return <>
        <input type="text" onChange={handleInputNameOnChange} placeholder="이름" />
        <input type="text" onChange={handleInputAgeOnChange} placeholder="나이" />
        <h2>이름: { fullName }</h2>
        <h2>나이: { age }</h2>
    </>
    
}

export default Inputs;