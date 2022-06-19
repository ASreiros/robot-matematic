import { useState, useEffect } from "react"
import Button from "./Button"

export default function ControlPanel({maxvalue, error, clickHandler}){
    const [values, setValues] = useState([])

    useEffect(() => {
        const temp = [];
        for (let i = 1; i <= maxvalue ; i++) {
            temp.push(i);
        }
        
        setValues([...temp]);
      }, [maxvalue]);     
        
    return(
        <div className="controlpanel">
            {
                values.map(v=>{
                    return <Button key={v} value={v} clickHandler={clickHandler}></Button>
                })
            }
        <p>{error}</p>    
        </div>
    )
}