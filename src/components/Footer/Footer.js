import React, { useState } from 'react';
import { Container, Col, Row, Button, Modal } from 'react-bootstrap';
import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from 'react-scroll'

import './footer.css'

function Footer() {

  const { t } = useTranslation()
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const copyToClipboard = () => navigator.clipboard.writeText('laszloscheers@gmail.com');

  return (
    <footer className='text-center text-lg-start text-muted'>

      <section className='border-top'>
        <Container className='text-center text-md-start py-4 footer-col'>
          <Row className='mt-3 d-flex justify-content-between'>
              <Col md="4" lg="3" xl="3" className='mb-md-0 mb-4 p-0 footer-col'>
              <h6 className='text-uppercase bold mb-3'>{t('footer_contact')}</h6>
              <p>
                <button onClick={handleShow} className='nav-link footer-link'>
                    <HiOutlineMail />&nbsp;laszloscheers@gmail.com
                </button>

                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Body>
                        <a href="mailto:laszloscheers@gmail.com" className='nav-link' onClick={handleClose} ><HiOutlineMail />&nbsp;laszloscheers@gmail.com</a>
                        <p>or</p>
                        <Button onClick={event => {handleClose();copyToClipboard();}}> Copy to clipboard</Button>
                    </Modal.Body>
                </Modal>
              </p>
              <p>
              <a href={t('linked_in_link')} target="_blank" rel="noreferrer" className='nav-link' ><FaLinkedin className='navbarToggleIcon2' />&nbsp;{t('linked_in')}</a>
              </p>
              <p>
              <a href="https://www.github.com/laszloscheers" target="_blank" rel="noreferrer" className='nav-link' ><FaGithub className='navbarToggleIcon2' />&nbsp;github.com/laszloscheers</a>
              </p>
            </Col>

            <Col md="3" lg="4" xl="4" className='mb-4 p-0 text-center footer-col'>
              <h6 className='text-uppercase bold mb-4'>
                {t('footer_about')}
              </h6>
              <p>
                {t('footer_description')}
              </p>
            </Col>

            <Col md="2" lg="2" xl="3" className='mb-4 p-0 text-end'>
              <h6 className='text-uppercase bold mb-3'>{t('footer_site_map')}</h6>
              <p className='d-flex justify-content-end'>
                <button onClick={() => scroll.scrollToTop()} className="nav-link footer-link" >Back to top</button>
              </p>
              <p>
                <a href="#littletowns-agora" className="nav-link" >Littletown's Agora</a>
              </p>
              <p>
                <a href="#festrip-tickets" className="nav-link" >Festrip Tickets</a>
              </p>
              <p>
                <a href="#football-hub" className="nav-link" >Football Hub</a>
              </p>
              <p>
                <a href="#watsons" className="nav-link" >Watson's Detective</a>
              </p>
            </Col>

          </Row>
        </Container>
      </section>

      <div className='text-center p-4 d-flex justify-content-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright &nbsp;
        <a className='text-reset bold nav-link' href={t('linked_in_link')} target="_blank" rel="noreferrer" >
          Laszlo Scheers
        </a>
      </div>
    </footer>
  );
}

export default Footer