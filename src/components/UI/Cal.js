import React from "react";
import Button from "./Button";
const Cal = (props) =>{
return <div>
            {props.numpads.map(numpad => (<Button key={numpad} >{numpad}</Button>))}
</div>;
}
export default Cal;