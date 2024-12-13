'use client'
import { useSelector } from "react-redux"

const GetData = () => {
  const userData = useSelector((data:any) => data.users)
  console.log(userData)
  return(
  <>
  <h1>Test</h1>

  {userData.map((item:any) => 
    item.name
  )}
  </>
  )
}

export default GetData