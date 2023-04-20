import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Modal, Image } from 'react-bootstrap';
import { HiOutlineMail } from 'react-icons/hi';
import { RxCopy } from 'react-icons/rx';
import { ImArrowRight2 } from 'react-icons/im';

import "./home.css";

function Home() {

    // Language swapping tool
    const { t } = useTranslation()

    // Handle visivility for email's modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const copyToClipboard = () => navigator.clipboard.writeText('laszloscheers@gmail.com');

    return (
        <div>
            {/*Hero Section*/}
            <section className="hero">
                <Container>
                    <Row className="hero-row">
                        <Col md className="hero-col">
                            <h1 className="bold">{t('header')}</h1>
                            <p>
                                {t('sub_header_1')}
                                <a href="https://www.github.com/laszloscheers" target="_blank" rel="noreferrer" className='nav-link p-anchors app-link' >{t('sub_header_git_hub')}</a>
                                {t('sub_header_2')}
                                <a href={t('linked_in_link')} target="_blank" rel="noreferrer" className='nav-link p-anchors app-link' >{t('sub_header_linked_in')}</a>
                                {t('sub_header_3')}
                            </p>
                            <p>
                                {t('under_sub_header_1')}
                                <a href="#littletowns-agora"className='nav-link p-anchors app-link' >{t('under_sub_header_my_proyects')}</a>
                                {t('under_sub_header_2')}
                                <button onClick={handleShow} className='nav-link hello-link app-link'>
                                    {t('under_sub_header_contact')}
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
                                {t('under_sub_header_3')}
                            </p>
                        </Col>
                        <Col md className="d-flex justify-content-center">
                            <Image src="./assets/images/me.jpg" alt="Drawing of Laszlo Scheers" className="hero-img"></Image>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*First Project Section*/}
            <section className="section-first" id="littletowns-agora">
                <Container>
                    <Row className="row-sections d-flex align-items-center">
                        <Col md className="d-flex justify-content-start">
                            <Image src="./assets/images/littletown.png" alt="Example of Litletown's web page" className="sections-img" ></Image>
                        </Col>
                        <Col md className='col-sections'>
                            <h1 className="bold mb-4">Littletown's Agora</h1>
                            <p>{t('little_town_description')}</p>
                            <a href="https://littletownsagora.fly.dev/" target="_blank" rel="noreferrer" className='nav-link bold section-link p-anchors mt-3' >{t('visit_web')}<span className='ms-2'><ImArrowRight2 className='expand'/></span></a>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            {/*Second Project Section*/}
            <section className="section-second" id="festrip-tickets">
                <Container>
                    <Row className="row-sections d-flex align-items-center">
                        <Col md>
                            <h1 className="bold mb-4">{t('festrip_title')}</h1>
                            <p>{t('festrip_description')}</p>
                            <a href="https://festrip.fly.dev/" target="_blank" rel="noreferrer" className='nav-link bold section-link p-anchors mt-3' >{t('visit_web')}<span className='ms-2'><ImArrowRight2 className='expand'/></span></a>
                        </Col>
                        <Col md className="d-flex justify-content-start">
                            <Image src="./assets/images/littletown.png" alt="Example of Litletown's web page" className="sections-img" ></Image>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*Third Project Section*/}
            <section className="section-third" id="football-hub">
                <Container>
                    <Row className="row-sections d-flex align-items-center">
                        <Col md className="d-flex justify-content-start">
                            <Image src="./assets/images/littletown.png" alt="Example of Litletown's web page" className="sections-img" ></Image>
                        </Col>
                        <Col md className='col-sections'>
                            <h1 className="bold mb-4">Football Hub</h1>
                            <p>{t('football_app_description')}</p>
                            <a href="https://acsdfinalproject.web.app/" target="_blank" rel="noreferrer" className='nav-link bold section-link p-anchors mt-3' >{t('visit_web')}<span className='ms-2'><ImArrowRight2 className='expand'/></span></a>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*Fourth Project Section*/}
            <section className="section-first" id="watsons">
                <Container>
                    <Row className="row-sections d-flex align-items-center">
                        <Col md>
                            <h1 className="bold mb-4">{t('watsons_title')}</h1>
                            <p>{t('watsons_description')}</p>
                            <a href="https://laszloscheers.github.io/Watson-s/index.html" target="_blank" rel="noreferrer" className='nav-link bold section-link p-anchors mt-3' >{t('visit_web')}<span className='ms-2 '><ImArrowRight2 className='expand'/></span></a>
                        </Col>
                        <Col md className="d-flex justify-content-start">
                            <Image src="./assets/images/littletown.png" alt="Example of Litletown's web page" className="sections-img" ></Image>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};
  
  export default Home;