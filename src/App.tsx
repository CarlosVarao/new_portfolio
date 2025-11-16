import AppRoutes from "./router/routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return <AppRoutes />;
}
