import { useState } from "react"
function Data(){
      const name = "Niniwai"
      const [age, setAge] = useState(20)
            const [show, setShow] = useState(true)
      const [data, setData] = useState([
        { id: 1, name: "บิว", gender: "ชาย" },
        { id: 2, name: "บอส", gender: "ชาย" }
      ])
    return (
    <>
          <h1>จำนวนรายการ {data.length}</h1>
      <button onClick={() => setShow(!show)}>ซ่อน/แสดง</button>
      <ul>
        {show && data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
    )
}
export default Data