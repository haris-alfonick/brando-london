'use client'
import { removeUser } from "@/lib/slice"
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const GetData = () => {
  const userData = useSelector((data: any) => data.users);
  const dispatch = useDispatch();

  useEffect(() => {
    // Sync with localStorage after the component mounts
    localStorage.setItem("users", JSON.stringify(userData));
  }, [userData]);

  return (
    <>
      <h1>Test</h1>
      {userData.map((item: any) => (
        <p key={item.id}>
          {item.name} <button onClick={() => dispatch(removeUser(item.id))}>delete</button>
        </p>
      ))}
    </>
  );
};

export default GetData