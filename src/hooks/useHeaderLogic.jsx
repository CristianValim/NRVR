import { useState, useRef, useEffect } from "react";

export function useHeaderLogic() {
  const [margin, setMargin] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [showMenu, setShowMenu] = useState(true);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      setMargin(true);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsMobile(innerWidth < 600);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    function handleNavBar() {
      setShowMenu(innerWidth > 600);
    }

    window.addEventListener("resize", handleNavBar);

    handleNavBar();

    return () => {
      window.removeEventListener("resize", handleNavBar);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function handleMarginOn() {
    setMargin(true);
    setShowMenu(false);
  }

  function handleMarginOff() {
    setMargin(false);
  }

  return {
    margin,
    isMobile,
    showMenu,
    toggleMenu,
    handleMarginOn,
    handleMarginOff,
    menuRef,
  };
}
