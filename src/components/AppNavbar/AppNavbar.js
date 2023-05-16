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

    // i18next language swapping tool
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

    // Current Language from cookies
    const currentLanguageCode = cookie.get('i18next') || 'en';

    // Change navbar colour on scroll
    const [navbar, setNavbar] = useState(false);

    const changeNavColour = () => {
        if (window.scrollY >= 65){
            setNavbar(true)
        } else{
            setNavbar(false)
        }
    };

    window.addEventListener('scroll', changeNavColour)
    
    // Handles offcanvas inner text visiblity for small screens and manage viewport changes for mobiles and tablets landscape mode.

    // Media querry for the first time the page loads
    const firstLoadMediaQuery = window.matchMedia('(max-width: 576px)').matches;

    // Media query for every useEffect event listeners rerenders
    const [mediaQuery, setMediaQuery] = useState(false);

    // Stores the viewport size to recognize changes on it
    const [dimensions, setDimensions] = useState({
      height: window.innerHeight,
      width: window.innerWidth
    })

    useEffect(() => {

      // Change tab title on language swap
      document.title = t('app_title');

      function handleResize() {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        })
      }
      window.addEventListener('resize', handleResize)

      window.matchMedia("(max-width: 576px)").addEventListener("change", e => {
        const mediaMatches = e.matches;
        if (mediaMatches){
          setMediaQuery(true)
        } else{
          setMediaQuery(false)
        }
      });
    },[dimensions, t]);

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
                  <button onClick={() => scroll.scrollToTop()} className='offcanvas-logo bold offcanvas-style mt-1' >LSZ</button>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                    {/* Links on offcanvas menu for small screens */}
                    <Nav.Link className={ firstLoadMediaQuery || mediaQuery ? 'nav-bar-link offcanvas-titles' : 'offcanvas-hidden' } >Links</Nav.Link>


                    {/* LinkedIn link */}
                    <Nav.Link href={t('linked_in_link')} target="_blank" rel="noreferrer" className={ firstLoadMediaQuery || mediaQuery ? 'nav-bar-link offcanvas-size offcanvas-links' : 'nav-bar-link  text-end' } >{ firstLoadMediaQuery || mediaQuery ? `${t('my')} LinkedIn` : '' }<FaLinkedin className={ firstLoadMediaQuery || mediaQuery ? 'offcanvas-hidden' : '' }/></Nav.Link>

                    {/* GitHub link */}
                    <Nav.Link href="https://www.github.com/laszloscheers" target="_blank" rel="noreferrer" className={ firstLoadMediaQuery || mediaQuery ? 'nav-bar-link  offcanvas-size offcanvas-links' : 'nav-bar-link ' } >{ firstLoadMediaQuery || mediaQuery ? `${t('my')} GitHub` : '' }<FaGithub className={ firstLoadMediaQuery || mediaQuery ? 'offcanvas-hidden' : '' }/></Nav.Link>

                    {/* Dropdown for email */}
                    <Dropdown>
                      <Dropdown.Toggle className={navbar ? `nav-link nav-bar-link me-4 ${ firstLoadMediaQuery || mediaQuery ? 'offcanvas-style offcanvas-size offcanvas-links mb-2' : ' scroll' }` : `nav-link nav-bar-link me-4 ${ firstLoadMediaQuery || mediaQuery ? 'offcanvas-style offcanvas-size offcanvas-links mb-2' : ' top' }`}>
                        { firstLoadMediaQuery || mediaQuery ? `${t('my')} ${t('email_mobile')} ` : '' }<MdEmail className={ firstLoadMediaQuery || mediaQuery ? 'offcanvas-hidden' : 'nav-email' }/>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='p-4 mt-2 mb-3 ms-1'>
                        <Dropdown.Item className='drop-item'><button onClick={() => navigator.clipboard.writeText('laszloscheers@gmail.com')} className={ firstLoadMediaQuery || mediaQuery ? 'dropdown-button mb-3 dropdown-size' : 'dropdown-button mb-2' }><FaCopy className='me-3'/>{t('dropdown-clipboard')}</button></Dropdown.Item>
                        <Dropdown.Item href="mailto:laszloscheers@gmail.com" className={ firstLoadMediaQuery || mediaQuery ? 'drop-item dropdown-size' : 'drop-item' }><MdEmail className='me-3'/>{t('dropdown-send')}</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* Language title on offcanvas menu */}
                    <Nav.Link className={ firstLoadMediaQuery || mediaQuery ? 'nav-bar-link offcanvas-titles mt-2' : 'offcanvas-hidden' } >{t('languages')}</Nav.Link>

                    {/* Language options */}
                    <div className='d-flex flex-row justify-content-start'>
                    {languages.map(({ code, country_code, name}) => (
                        <div className='d-flex align-items-center' key={country_code}>
                            <button className={navbar ? `nav-link nav-bar-link ${ firstLoadMediaQuery || mediaQuery ? 'offcanvas-style offcanvas-size' : 'scroll' }` : `nav-link nav-bar-link ${ firstLoadMediaQuery || mediaQuery ? 'offcanvas-style offcanvas-size' : 'top' }`} key={country_code} onClick={() => i18next.changeLanguage(code)} disabled={ code === currentLanguageCode} ><span className={code === currentLanguageCode ? 'offcanvas-languages-faded' : 'offcanvas-languages' } >{name}</span></button>
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