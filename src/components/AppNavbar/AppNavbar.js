import React, { useEffect, useState } from 'react';
import cookie from 'js-cookie';
import i18next from 'i18next';
import { useTranslation } from "react-i18next";
import { Container, Nav, Navbar, Button, Modal} from 'react-bootstrap';
import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import "./appNavbar.css";

const AppNavbar = () => {

    // Language swapping tool
    const { t } = useTranslation();

    // Languages available
    const languages = [
        {
            code: 'en',
            name: 'En',
            country_code: 'gb'
        },
        {
            code: 'es',
            name: 'Es',
            country_code: 'es'
        }
    ];

    // Current Language
    const currentLanguageCode = cookie.get('i18next') || 'en';

    // Change tab title on language swap
    useEffect(() => {
        document.title = t('app_title')
    },[t]);

    // Change navbar colour on scroll
    const [navbar, setNavbar] = useState(false);

    const changeNavColour = () => {
        if (window.scrollY >= 70){
            setNavbar(true)
        } else{
            setNavbar(false)
        }
    };

    window.addEventListener('scroll', changeNavColour)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const copyToClipboard = () => navigator.clipboard.writeText('laszloscheers@gmail.com');
    return (
            <Navbar collapseOnSelect expand="lg" bg="light" sticky="top" className={navbar ? 'scroll' : 'top'}>
                <Container >

                    <Navbar.Brand>
                        <button onClick={() => scroll.scrollToTop()} className={navbar ? 'brand scroll bold' : 'brand top bold'} >LSZ</button>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">

                    </Nav>

                    <Nav>
                        <Button onClick={handleShow} className={navbar ? 'nav-link scroll nav-bar-link' : 'nav-link top nav-bar-link'}>
                            <HiOutlineMail />
                        </Button>

                        <Modal show={show} onHide={handleClose} centered>
                            <Modal.Body>
                                <div className='d-flex justify-content-between align-items-center m-3'>
                                    <a href="mailto:laszloscheers@gmail.com" className='nav-link btn-clip' onClick={handleClose} >Mail to: <span id="mail">laszloscheers@gmail.com</span></a>
                                    <p id='or'>OR</p>
                                    <button onClick={event => {handleClose();copyToClipboard();}} className='nav-link btn-clip'><span>Copy email to clipboard</span></button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <a href="https://www.github.com/laszloscheers" target="_blank" rel="noreferrer" className='nav-link nav-bar-link'><FaGithub  /></a>
                        <a href={t('linked_in_link')} target="_blank" rel="noreferrer" className='nav-link nav-bar-link me-4' ><FaLinkedin /></a>
                        {languages.map(({ code, country_code, name}) => (
                            <div className='d-flex align-items-center' key={country_code}>
                            <button className={navbar ? 'nav-link languages scroll nav-bar-link' : 'nav-link languages top nav-bar-link'} key={country_code} onClick={() => i18next.changeLanguage(code)} disabled={ code === currentLanguageCode} ><span style ={{ opacity: code === currentLanguageCode ? 0.5 : 1 }} >{name}</span></button>
                            &nbsp;
                            {code === 'en' ? '/' : ''}
                            &nbsp;
                            </div>
                        ))}
                    </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default AppNavbar;