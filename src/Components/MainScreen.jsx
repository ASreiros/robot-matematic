import { useEffect } from "react"
import { useState } from "react"
import rand from "../Common/rand";
import BotScreen from "./BotScreen";
import ControlPanel from "./ControlPanel";
import MainRobot from "./MainRobot";

export default function MainScreen(){
    const [number, setNumber] = useState(1);
    const [oldnumber, setOldNumber] = useState(-1);
    const [stage, setStage] = useState(0);
    const [maxvalue, setMaxValue] =useState(5);
    const [error, setError] = useState(" ")




    useEffect(() => {
         
    let temp = rand(1, maxvalue);
    while(temp === oldnumber){
        temp = rand(1, maxvalue);
    }

    setNumber(temp);
    setOldNumber(temp);
    console.log("new number is", temp );

      }, [maxvalue, stage]);

    const ChangeMaxValue = (e) =>{
        if(e.target.value>1){
            setMaxValue(e.target.value)
        }

    }  

    const clickHandler = (e)=>{
        console.log(e.target.value, number);
        if(e.target.value == number){
            console.log("ping");
            setError("")
            let temp = stage;
            temp=temp+1;
            setStage(temp);


        } else{
            console.log("pong");
            setError("Неправильное количество, попробуй еще раз")
        }
    }


    return(
        <div className="mainscreen">
            <div>
                <label> Максимальное количество роботов</label>
                <input id="maxvalue" type="number" value={maxvalue} onChange={e=>ChangeMaxValue(e)}/>
            </div>
            <div className="roboscreen">
                <BotScreen number={number}></BotScreen>
                <MainRobot stage={stage}></MainRobot>
            </div>
            <ControlPanel clickHandler={clickHandler} maxvalue={maxvalue} error={error}></ControlPanel>
        </div>
    )
}