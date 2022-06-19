
import { useState, useEffect } from "react";
import robot0 from "../img/robot0.jpg";
import robot1 from "../img/robot1.jpg";
import robot2 from "../img/robot2.jpg";
import robot3 from "../img/robot3.jpg";
import robot4 from "../img/robot4.jpg";
import robot5 from "../img/robot5.jpg";

export default function MainRobot({stage}){
    const [link, setLink] = useState(robot0)

    useEffect(() => {
        switch (stage) {
            case 0:
                setLink(robot0)
                break;
            case 1:
                setLink(robot1)
                break;    
            case 2:
                setLink(robot2)
                break;   
            case 3:
                setLink(robot3)
                break;
            case 4:
                setLink(robot4)
                break; 
            case 5:
                setLink(robot5)
                break;                                         
            default:
                setLink(robot5)
                break;
        }
        
      }, [stage]);  

    return(
        <img className="mainrobot" src={link} alt="robot" />
    )
}