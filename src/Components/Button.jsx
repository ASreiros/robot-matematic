export default function Button({value, clickHandler}){



    return(
        <button value={value} onClick={e=>clickHandler(e)}>{value}</button>
    )
}