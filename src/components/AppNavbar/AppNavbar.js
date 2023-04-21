import React, { useEffect, useState } from 'react';
import cookie from 'js-cookie';
import i18next from 'i18next';
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from 'react-scroll';
import { Container, Nav, Navbar, Button, Modal, Offcanvas} from 'react-bootstrap';
import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RxCopy } from 'react-icons/rx';

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

    // Handles email modal visibiliity
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const copyToClipboard = () => navigator.clipboard.writeText('laszloscheers@gmail.com');
    
    // Handles offcanvas inner text visiblity for small screens
    const mediaQuery = window.matchMedia('(max-width: 576px)');

    return (
        <Navbar expand="sm" bg="light" sticky="top" className={navbar ? 'scroll' : 'top'}>
          <Container>

            <Navbar.Brand>
                <button onClick={() => scroll.scrollToTop()} className={navbar ? 'brand scroll bold app-link' : 'brand top bold app-link'} >LSZ</button>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='offcanvasNavbar-expand-sm' />
            <Navbar.Offcanvas
              id='offcanvasNavbar-expand-sm'
              aria-labelledby='offcanvasNavbarLabel-expand-sm'
              placement="end"
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id='offcanvasNavbarLabel-expand-sm'>
                  <button onClick={() => scroll.scrollToTop()} className='brand  bold app-link offcanvas-style mt-1' >LSZ</button>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                    {/* Links on offcanvas menu for small screens */}
                    <Nav.Link className={ mediaQuery.matches ? 'nav-bar-link offcanvas-titles mt-4' : 'offcanvas-hidden' } >Links</Nav.Link>

                    {/* Email Modal */} {/* Classes changes depending on scroll on desktops(navbar) or for offcanvas menu on small screens (mediaQuerry). */}
                    <Button onClick={handleShow} className={navbar ? `nav-link nav-bar-link app-nav-link d-flex justify-content-start ${ mediaQuery.matches ? 'align-items-center offcanvas-style offcanvas-size offcanvas-links' : 'align-items-end scroll' }` : `nav-link nav-bar-link app-nav-link d-flex justify-content-start ${ mediaQuery.matches ? 'align-items-center offcanvas-style offcanvas-size offcanvas-links' : 'align-items-end top' }`}> { mediaQuery.matches ? `${t('my')} ${t('email_mobile')}` : '' } &nbsp;<HiOutlineMail className={ mediaQuery.matches ? 'offcanvas-hidden' : '' }/>
                    </Button>

                    <Modal show={show} onHide={handleClose} centered size="lg">
                        <Modal.Header closeButton className='d-flex justify-content-center'>
                        </Modal.Header>
                        <Modal.Body id='modal-p'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <button onClick={event => {handleClose();copyToClipboard();}} className='btn-clip d-flex align-items-center'><RxCopy className='me-3'/><span>Copy email to clipboard</span></button>
                                <p className='mb-0 mx-5'>OR</p>
                                <a href="mailto:laszloscheers@gmail.com" className='btn-clip d-flex align-items-center' onClick={handleClose} ><HiOutlineMail className='me-3'/><span>Send me an email</span></a>
                            </div>
                        </Modal.Body>
                    </Modal>

                    {/* GitHub link */}
                    <Nav.Link href="https://www.github.com/laszloscheers" target="_blank" rel="noreferrer" className={ mediaQuery.matches ? 'nav-bar-link app-nav-link offcanvas-size offcanvas-links' : 'nav-bar-link app-nav-link' } >{ mediaQuery.matches ? `${t('my')} GitHub` : '' }<FaGithub className={ mediaQuery.matches ? 'offcanvas-hidden' : '' }/></Nav.Link>

                    {/* LinkedIn link */}
                    <Nav.Link href={t('linked_in_link')} target="_blank" rel="noreferrer" className={ mediaQuery.matches ? 'nav-bar-link app-nav-link offcanvas-size offcanvas-links' : 'nav-bar-link app-nav-link me-4 text-end' } >{ mediaQuery.matches ? `${t('my')} LinkedIn` : '' }<FaLinkedin className={ mediaQuery.matches ? 'offcanvas-hidden' : '' }/></Nav.Link>

                    {/* Language title on offcanvas menu */}
                    <Nav.Link className={ mediaQuery.matches ? 'nav-bar-link offcanvas-titles mt-5' : 'offcanvas-hidden' } >{t('languages')}</Nav.Link>

                    {/* Language options */}
                    <div className='d-flex flex-row justify-content-start'>
                    {languages.map(({ code, country_code, name}) => (
                        <div className='d-flex align-items-center' key={country_code}>
                            <button className={navbar ? `nav-link nav-bar-link ${ mediaQuery.matches ? 'offcanvas-style offcanvas-size offcanvas-links' : 'scroll' }` : `nav-link nav-bar-link ${ mediaQuery.matches ? 'offcanvas-style offcanvas-size offcanvas-links' : 'top' }`} key={country_code} onClick={() => i18next.changeLanguage(code)} disabled={ code === currentLanguageCode} ><span style ={{ opacity: code === currentLanguageCode ? 0.5 : 1 }} >{name}</span></button>
                            &nbsp;
                            {code === 'en' ? '/' : ''}
                            &nbsp;
                        </div>
                    ))}
                    </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
}

export default AppNavbar;