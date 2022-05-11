import React, { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";

export default function GlobalState(props) {
    const [listPost,setListPost] = useState([])
    const [post,setPost] = useState([])
    const [comments,setComments] = useState([])

  useEffect(()=>{ 
  },[])

  const states = {listPost, post, comments}
  const setter = {setListPost, setPost, setComments}
  const requests = {}

  return (
    <GlobalContext.Provider value={{ states, setter, requests }}>
      {props.children}
    </GlobalContext.Provider>
  );
}