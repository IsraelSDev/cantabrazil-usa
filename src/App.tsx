import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Certifications } from "./pages/Certifications";
import { Partners } from "./pages/Partners";
import { Impact } from "./pages/Impact";
import { Education } from "./pages/Education";
import { Arts } from "./pages/Arts";
import { Environment } from "./pages/Environment";
import { Entrepreneurship } from "./pages/Entrepreneurship";
import { Courses } from "./pages/Courses";
import { NewTalents } from "./pages/NewTalents";
import { Membership } from "./pages/Membership";
import { MemberBenefits } from "./pages/MemberBenefits";
import { Supporters } from "./pages/Supporters";
import { Contact } from "./pages/Contact";
import { Sponsor } from "./pages/Sponsor";
import { CookiePolicy } from "./pages/CookiePolicy";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/arts-and-culture" element={<Arts />} />
        <Route path="/environment" element={<Environment />} />
        <Route path="/entrepreneurship" element={<Entrepreneurship />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/new-talents" element={<NewTalents />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/member-benefits" element={<MemberBenefits />} />
        <Route path="/supporters" element={<Supporters />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/donate" element={<Navigate to="/sponsor" replace />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
