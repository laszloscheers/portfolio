import React, { useState } from 'react';
import { Container, Col, Row, Modal } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from 'react-scroll'
import { HiOutlineMail } from 'react-icons/hi';
import { RxCopy } from 'react-icons/rx';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbCircleArrowUpFilled } from 'react-icons/tb';


import './footer.css'

function Footer() {
  // Language swapping tool
  const { t } = useTranslation()

  // Email modal visibiliity
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const copyToClipboard = () => navigator.clipboard.writeText('laszloscheers@gmail.com');

  // Change visibility of back-to-top arrow
  const [arrowUp, setArrowUp] = useState(false);

  const changeVisivility = () => {
      if (window.scrollY >= 70){
          setArrowUp(true)
      } else{
          setArrowUp(false)
      }
  };

  window.addEventListener('scroll', changeVisivility)

  return (
    <footer className='text-center text-lg-start text-muted'>

      <section className='border-top'>
        <Container className='text-center text-md-start py-4 footer-col'>
          <Row className='mt-3 d-flex justify-content-end'>
              <Col md="4" lg="3" xl="3" className='mb-md-0 mb-4 p-0 footer-col'>

              {/* Title */}
              <h6 className='text-uppercase bold mb-3'>{t('footer_contact')}</h6>

              {/* Email Modal */}
              <p>
                <button onClick={handleShow} className='nav-link footer-link app-nav-link'>
                    <HiOutlineMail />&nbsp;laszloscheers@gmail.com
                </button>

                <Modal show={show} onHide={handleClose} centered size="lg">
                    <Modal.Header closeButton className='d-flex justify-content-center'>
                    </Modal.Header>
                    <Modal.Body id='modal-p'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <button onClick={event => {handleClose();copyToClipboard();}} className=' btn-clip d-flex align-items-center'><RxCopy className='me-3'/><span>Copy email to clipboard</span></button>
                            <p className='mb-0 mx-5'>OR</p>
                            <a href="mailto:laszloscheers@gmail.com" className='nav-link btn-clip d-flex align-items-center' onClick={handleClose} ><HiOutlineMail className='me-3'/><span>Send me an email</span></a>

                        </div>
                    </Modal.Body>
                </Modal>
              </p>

              {/* GitHub link */}
              <p>
                <a href="https://www.github.com/laszloscheers" target="_blank" rel="noreferrer" className='nav-link app-nav-link' ><FaGithub className='navbarToggleIcon2' />&nbsp;github.com/laszloscheers</a>
              </p>

              {/* LinkedIn link */}
              <p>
                <a href={t('linked_in_link')} target="_blank" rel="noreferrer" className='nav-link app-nav-link' ><FaLinkedin className='navbarToggleIcon2' />&nbsp;{t('linked_in')}</a>
              </p>
            </Col>

          </Row>
        </Container>

        {/* Back-to-top arrow */}
        <div id='back_to_top_cont' onClick={() => scroll.scrollToTop()}><TbCircleArrowUpFilled className={arrowUp ? 'back_to_top' : 'arrow-up-hidden'}/></div>
      </section>

      {/* Copyright section */}
      <div className='text-center p-4 d-flex justify-content-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright &nbsp;
        <a className='text-reset bold nav-link app-nav-link' href={t('linked_in_link')} target="_blank" rel="noreferrer" >
          Laszlo Scheers
        </a>
      </div>
    </footer>
  );
}

export default Footer