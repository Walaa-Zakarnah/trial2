import {useState} from "react";
function About() {
    let [count, setCount]=useState(0);
    function changeCount(){
        setCount(count+1);
    }
    return (
        <>
            <button onClick={changeCount}>Walaa Zakarneh {count}</button>
        </>
    )
}

export default About