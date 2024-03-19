import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function Layout({saveData}) {
    return <>
    <NavBar saveData={saveData}/>
    <Outlet></Outlet>
    </>;
}