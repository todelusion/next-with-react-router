import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "@/routes/Home";
import About from "@/routes/About";
import Contact from "@/routes/Contact";
import { useRouter } from "next/router";

export default function AppRoutes() {
  const router = useRouter();
  const pathname = router.pathname;
  console.log(pathname);
  return (
    <Routes>
      <Route path={pathname} element={<Home />} />
      <Route path={pathname + "/about"} element={<About />} />
      <Route path={pathname + "/contact"} element={<Contact />} />
    </Routes>
  );
}
