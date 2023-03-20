import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

const overscrollOptions = {
  enable: true,
  effect: "bounce",
  damping: 0.15,
  maxOverscroll: 150,
  glowColor: "#fff",
};

const options = {
  damping: 0.07,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const Scroll = ({ children }) => {
  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);

    Scrollbar.init(document.querySelector("#my-scrollbar"), options);
    return () => {
      if (Scrollbar) Scrollbar.destroy(document.querySelector("#my-scrollbar"));
    };
  }, []);

  return (
    <main id="my-scrollbar" style={{ height: "100vh" }}>
      {children}
    </main>
  );
};

export default Scroll;
