import { Link } from "react-router-dom";
import { Container } from "./styles";
import { MdOutlineFilterAlt } from "react-icons/md";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { useHeaderLogic } from "../../hooks/useHeaderLogic";

export function Header() {
  const {
    margin,
    isMobile,
    showMenu,
    toggleMenu,
    handleMarginOn,
    handleMarginOff,
    menuRef,
  } = useHeaderLogic();

  return (
    <Container
      style={
        margin
          ? { paddingInline: "5%", transition: "1s" }
          : { paddingInline: "1.3rem", transition: "1s" }
      }
    >
      <Link to="/NRVR" onClick={handleMarginOff}>
        <img className="logo" src={logo} alt="Logo NRVR" />
      </Link>

      <button
        className="filter"
        style={{ display: isMobile ? "block" : "none" }}
        onClick={toggleMenu}
      >
        <MdOutlineFilterAlt size={"3rem"} />
      </button>

      <div
        className={isMobile ? "mobile" : "desktop"}
        style={{ display: showMenu ? "flex" : "none" }}
      >
        <motion.ul
          ref={menuRef}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: showMenu ? 1 : 0, height: showMenu ? "auto" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <li>
            <Link className="underline" onClick={handleMarginOn} to="/casas">
              casas
            </Link>
          </li>
          <li>
            <Link
              className="underline"
              onClick={handleMarginOn}
              to="/comercial"
            >
              comercial
            </Link>
          </li>
          <li>
            <Link
              className="underline"
              onClick={handleMarginOn}
              to="/interiores"
            >
              interiores
            </Link>
          </li>
          <li>
            <Link
              className="underline"
              onClick={handleMarginOn}
              to="/edificios"
            >
              edificios
            </Link>
          </li>
          <li>
            <Link className="underline" onClick={handleMarginOn} to="/objetos">
              objetos
            </Link>
          </li>
        </motion.ul>
      </div>

      <button id="about" onClick={handleMarginOff}>
        <Link className="underline" to="/sobre">
          sobre
        </Link>
      </button>
    </Container>
  );
}
