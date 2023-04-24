import React, { useEffect, useState } from 'react';
import cookie from 'js-cookie';
import i18next from 'i18next';
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from 'react-scroll';
import { Container, Nav, Navbar, Offcanvas, Image, Dropdown} from 'react-bootstrap';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaCopy } from 'react-icons/fa';

import "./appNavbar.css";

const AppNavbar = () => {

    // Language swapping tool
    const { t } = useTranslation();

    // Languages available
    const languages = [
        {
            code: 'en',
            name: 'EN',
            country_code: 'gb'
        },
        {
            code: 'es',
            name: 'ES',
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
    
    // Handles offcanvas inner text visiblity for small screens
    const mediaQuery = window.matchMedia('(max-width: 576px)');

    return (
        <Navbar expand="sm" bg="light" sticky="top" className={navbar ? 'scroll' : 'top'}>
          <Container className='nav-padding'>

            <Navbar.Brand>
                <button onClick={() => scroll.scrollToTop()} className={navbar ? 'brand scroll' : 'brand top'} >
                  <Image src="./assets/images/logo.png" alt="Image of LSZ (logo)" className="logo" fluid></Image>
                </button>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='offcanvasNavbar-expand-sm' />
            <Navbar.Offcanvas
              id='offcanvasNavbar-expand-sm'
              aria-labelledby='offcanvasNavbarLabel-expand-sm'
              placement="end"
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id='offcanvasNavbarLabel-expand-sm'>
                  <button onClick={() => scroll.scrollToTop()} className='brand bold offcanvas-style mt-1' >LSZ</button>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                    {/* Links on offcanvas menu for small screens */}
                    <Nav.Link className={ mediaQuery.matches ? 'nav-bar-link offcanvas-titles mt-1' : 'offcanvas-hidden' } >Links</Nav.Link>


                    {/* LinkedIn link */}
                    <Nav.Link href={t('linked_in_link')} target="_blank" rel="noreferrer" className={ mediaQuery.matches ? 'nav-bar-link  offcanvas-size offcanvas-links' : 'nav-bar-link  text-end' } >{ mediaQuery.matches ? `${t('my')} LinkedIn` : '' }<FaLinkedin className={ mediaQuery.matches ? 'offcanvas-hidden' : '' }/></Nav.Link>

                    {/* GitHub link */}
                    <Nav.Link href="https://www.github.com/laszloscheers" target="_blank" rel="noreferrer" className={ mediaQuery.matches ? 'nav-bar-link  offcanvas-size offcanvas-links' : 'nav-bar-link ' } >{ mediaQuery.matches ? `${t('my')} GitHub` : '' }<FaGithub className={ mediaQuery.matches ? 'offcanvas-hidden' : '' }/></Nav.Link>

                    {/* Dropdown for email */}
                    <Dropdown>
                      <Dropdown.Toggle className={navbar ? `nav-link nav-bar-link  me-4 ${ mediaQuery.matches ? 'offcanvas-style offcanvas-size offcanvas-links' : ' scroll' }` : `nav-link nav-bar-link  me-4 ${ mediaQuery.matches ? 'offcanvas-style offcanvas-size offcanvas-links' : ' top' }`}>
                        { mediaQuery.matches ? `${t('my')} ${t('email_mobile')}` : '' }<MdEmail className={ mediaQuery.matches ? 'offcanvas-hidden' : 'nav-email' }/>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item className='drop-item mb-2'><button onClick={() => navigator.clipboard.writeText('laszloscheers@gmail.com')} className='dropdown-button'><FaCopy className='me-3'/>{t('dropdown-clipboard_1')}<span>{t('email')}</span>{t('dropdown-clipboard_2')}</button></Dropdown.Item>
                        <Dropdown.Item href="mailto:laszloscheers@gmail.com" className='drop-item'><MdEmail className='me-3'/>{t('dropdown-send')}</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* Language title on offcanvas menu */}
                    <Nav.Link className={ mediaQuery.matches ? 'nav-bar-link offcanvas-titles mt-3' : 'offcanvas-hidden' } >{t('languages')}</Nav.Link>

                    {/* Language options */}
                    <div className='d-flex flex-row justify-content-start'>
                    {languages.map(({ code, country_code, name}) => (
                        <div className='d-flex align-items-center' key={country_code}>
                            <button className={navbar ? `nav-link nav-bar-link ${ mediaQuery.matches ? 'offcanvas-style offcanvas-size offcanvas-links' : 'scroll' }` : `nav-link nav-bar-link ${ mediaQuery.matches ? 'offcanvas-style offcanvas-size offcanvas-links' : 'top' }`} key={country_code} onClick={() => i18next.changeLanguage(code)} disabled={ code === currentLanguageCode} ><span className={code === currentLanguageCode ? 'offcanvas-links' : '' } >{name}</span></button>
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