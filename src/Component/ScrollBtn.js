import React, { useState, useEffect } from "react";
import "./ScrollBtn.css";

function ScrollBtn() {
  const [scrollerDisplay, setScrollerDisplay] = useState("none");

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrollerDisplay("block");
    } else {
      setScrollerDisplay("none");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      style={{ display: scrollerDisplay }}
      onClick={scrollToTop}
      className="scrollBtn"
    >
      <i className="fa-solid fa-arrow-right"></i>
    </button>
  );
}

export default ScrollBtn;
