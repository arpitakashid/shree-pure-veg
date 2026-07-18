import { BrowserRouter, Routes, Route } from "react-router-dom";

import GalleryManagement from "./pages/admin/GalleryManagement";
import RoomsManagement from "./pages/admin/RoomsManagement";
import ReviewsManagement from "./pages/admin/ReviewsManagement";

import ProtectedRoute from "./components/admin/ProtectedRoute";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// Public Pages
import Home from "./pages/public/Home";
import Gallery from "./pages/public/Gallery";
import Restaurant from "./pages/public/Restaurant";
import Rooms from "./pages/public/Rooms";
import Reviews from "./pages/public/Reviews";
import Contact from "./pages/public/Contact";

// Admin Pages
import Login from "./pages/admin/Loginn";
import Dashboard from "./pages/admin/Dashboard";
import FoodManagement from "./pages/admin/FoodManagement";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC WEBSITE ================= */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* ================= ADMIN LOGIN ================= */}
        <Route path="/admin/login" element={<Login />} />

        {/* ================= ADMIN PANEL ================= */}
       
      <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminLayout />
    </ProtectedRoute>
  }
>
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="gallery" element={<GalleryManagement />} />
  <Route path="food" element={<FoodManagement />} />
  <Route path="/admin/rooms" element={<RoomsManagement />}/>
  <Route
  path="/admin/reviews"
  element={<ReviewsManagement />}
/>
</Route>

      </Routes>
    </BrowserRouter>
  );
}