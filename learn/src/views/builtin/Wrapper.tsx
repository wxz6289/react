import { Outlet } from "react-router";

export default function Wrapper() {
  return (
    <div>
      <div>Component</div>
      <Outlet/>
    </div>
  )
}