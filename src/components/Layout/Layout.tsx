import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const Layout = () => {
  return (
    <main>
      <Header />
      <div className="h-screen">
        <Outlet />
      </div>
    </main>
  );
};
