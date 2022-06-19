import { useState } from "react";
import { useEffect } from "react";
import bot from "../img/bot.jpg";

export default function BotScreen({number}){
    const [botnumber, setBotNumber] = useState([])

    useEffect(() => {
        const temp = [];
        for (let i = 0; i < number; i++) {
            temp.push(i)
            
        }
        setBotNumber([...temp])
      }, [number]);


    return(
        <div className="botscreen">
            {
                botnumber.map(b=>
                    <img className="bot" key={b} src={bot} alt="bot" />
                    )
            }
        </div>
    )
}