import  React , { useState } from "react";


function Toggle(){

    const [on, setOn] = useState(1)
    const [value, setValue] = useState("Off")

    return (
        <div>
            {on} {value}
        </div>
    );
}

export default Toggle;