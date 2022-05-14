import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export default function GlobalState(props) {
    const [atualiza, setAtualiza] = useState(false)

  const states = {atualiza}
  const setter = {setAtualiza}

  return (
    <GlobalContext.Provider value={{ states, setter }}>
      {props.children}
    </GlobalContext.Provider>
  );
}