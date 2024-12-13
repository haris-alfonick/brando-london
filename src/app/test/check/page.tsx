"use client"
import { addUser } from "@/lib/slice"
import { useState } from "react"
import { useDispatch } from "react-redux"
import GetData from "../getdata/page"


const Check = () => {
  const [name, setName] = useState("")
  const dispatch = useDispatch()
  
  const userDispatch = () => {
    dispatch(addUser(name))
  }
  return(
    <>
      <input type="text" placeholder="Add User" onChange={(e) => setName(e.target.value)} />
      <button onClick={userDispatch}>Add User</button>
      <GetData />
    </>
  )
}

export default Check