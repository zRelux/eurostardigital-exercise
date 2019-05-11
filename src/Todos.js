import React, { Component} from "react";


export default function App() {
  useEffect(() => fetch("http://localhost:3000/api/todo"), []);
  return null;
}
