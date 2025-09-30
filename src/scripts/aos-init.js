import AOS from "aos";
import "aos/dist/aos.css";

export function initAOS() {
  if (typeof window !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });
  }
}
