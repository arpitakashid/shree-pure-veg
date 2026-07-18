import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingCallButton from "../components/FloatingCallButton";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B]">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      <FloatingCallButton />
    </div>
  );
}