import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Education } from "./pages/Education";
import { Arts } from "./pages/Arts";
import { Courses } from "./pages/Courses";
import { NewTalents } from "./pages/NewTalents";
import { Membership } from "./pages/Membership";
import { Contact } from "./pages/Contact";
import { Sponsor } from "./pages/Sponsor";
import { CookiePolicy } from "./pages/CookiePolicy";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Education />} />
        <Route path="/heritage" element={<Arts />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/student-creation" element={<NewTalents />} />
        <Route path="/scholarships" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />

        <Route path="/education" element={<Navigate to="/experience" replace />} />
        <Route path="/arts-and-culture" element={<Navigate to="/heritage" replace />} />
        <Route path="/new-talents" element={<Navigate to="/student-creation" replace />} />
        <Route path="/membership" element={<Navigate to="/scholarships" replace />} />
        <Route path="/member-benefits" element={<Navigate to="/scholarships" replace />} />
        <Route path="/supporters" element={<Navigate to="/sponsor" replace />} />
        <Route path="/certifications" element={<Navigate to="/about" replace />} />
        <Route path="/partners" element={<Navigate to="/sponsor" replace />} />
        <Route path="/impact" element={<Navigate to="/about" replace />} />
        <Route path="/environment" element={<Navigate to="/experience" replace />} />
        <Route path="/entrepreneurship" element={<Navigate to="/experience" replace />} />
        <Route path="/donate" element={<Navigate to="/sponsor" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
