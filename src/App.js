import './App.css';
import {Outlet} from "react-router-dom";

export default function App() {
  return (
    <>
      <Outlet/> 
      {/*this component is used to render children components  in a single one*/}
    </>
  );
}
