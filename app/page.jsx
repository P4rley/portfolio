"use client";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Project from "../sections/Project";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Scroll from "../pages/Scrollbar";

const page = () => {
  return (
    <Scroll>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <Hero />
        <About />
        <Project />
        <Footer />
      </motion.div>
    </Scroll>
  );
};
export default page;
