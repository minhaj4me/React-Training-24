import "./App.css"
import moduleCss from "./moduleCss.module.css"




import { useRef } from "react";

export default function Form() {
    const udata = useRef();
    const pdata = useRef();

    const display = () => {
        console.log("Username :",udata.current.value, " and ", "Password :",pdata.current.value);
    }

    return (
        <div style={{fontFamily:"cursive", fontSize:"24px"}} className={moduleCss.star}>
            <label htmlFor="un">UserName</label>
            <input type="text" name="" id="un" ref={udata} />
            <label htmlFor="pwd">Password</label>
            <input type="Password" name="" id="pwd" ref={pdata} />
            <button onClick={display}>getData</button>
        </div>
    );
}
