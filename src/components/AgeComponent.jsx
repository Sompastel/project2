import { useState } from "react"
function AgeComponent(){
    const [age, setAge] = useState(20);
    function add() {
    setAge(age + 1)
  }
  function Subtract() {
    setAge(age - 1)
  }
  return(
    <>
    <p>Lorem ipsum dolor sit amet consectetur</p>
      <h3>อายุ = {age}</h3>

      <button onClick={add}>เพิ่มอายุ</button>
      <button onClick={Subtract}>ลดอายุ</button>
    </>
   )  
}
export default AgeComponent