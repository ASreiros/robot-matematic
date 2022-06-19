import rand from "./rand";

export default function RandomColor(){
    return `rgb(${rand(1,256)},${rand(1,256)}, ${rand(1,256)})`
}