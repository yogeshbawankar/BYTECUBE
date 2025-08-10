import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-background font-inter flex flex-col">
      <main className="flex-1">
        <Navbar />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;


