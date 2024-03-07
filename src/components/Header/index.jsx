import { Link } from 'react-router-dom';
import { Container } from './styles';
import { MdOutlineFilterAlt } from "react-icons/md";

import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react';

export function Header() {
    const [ margin, setMargin ] = useState(false);
    const [ isMobile, setIsMobile ] = useState(true)
    const [ showMenu, setShowMenu ] = useState(false)

    useEffect(() => {
        function handleScroll() {
            setMargin(true);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        function handleResize() {
            setIsMobile(innerWidth < 600)
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return() => {
            window.removeEventListener('resize', handleResize);
        };
    },[]);

    function toggleMenu() {
        setShowMenu(!showMenu);
    };

    function handleMarginOn() {
        setMargin(true);
    };

    function handleMarginOff() {
        setMargin(false)
    };

    return (
        <Container
            style={ margin ? {paddingInline: "5%", transition: "1s"} : {paddingInline: "1.3rem", transition: "1s"}}
            >
                <Link to="/NRVR" onClick={handleMarginOff}>
                    <img className='logo' src={logo} alt="Logo NRVR" />
                </Link>

                <button 
                    className='filter'
                    style={{display: isMobile ? "block" : "none"}}
                    onClick={toggleMenu}
                    >
                        <MdOutlineFilterAlt size={"3rem"}/>
                </button>

                <div className="modal"
                    style={{display: showMenu ? "flex" : "none"}}>
                    <ul>
                        <li><Link className='underline' onClick={handleMarginOn} to="/casas" >casas</Link></li>
                        <li><Link className='underline' onClick={handleMarginOn} to="/comercial">comercial</Link></li>
                        <li><Link className='underline' onClick={handleMarginOn} to="/interiores">interiores</Link></li>
                        <li><Link className='underline' onClick={handleMarginOn} to="/edificios">edificios</Link></li>
                        <li><Link className='underline' onClick={handleMarginOn} to="/objetos">objetos</Link></li>
                    </ul>
                </div>

                <button id='about'onClick={handleMarginOff}>
                    <Link className="underline" to="/sobre">sobre</Link>
                </button>
        </Container>
    )
}