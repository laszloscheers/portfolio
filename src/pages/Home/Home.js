import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import Image from 'react-bootstrap/Image'

import "./home.css";

function Home() {

    const { t } = useTranslation()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const copyToClipboard = () => navigator.clipboard.writeText('laszloscheers@gmail.com');

    return (
        <div>
            <section className="hero">
                <Container>
                    <Row className="hero-row">
                        <Col md className="hero-col">
                            <h1 className="bold">{t('header')}</h1>
                            <p>
                                {t('sub_header_1')}
                                <a href="https://www.github.com/laszloscheers" target="_blank" rel="noreferrer" className='nav-link p-anchors' >{t('sub_header_git_hub')}</a>
                                {t('sub_header_2')}
                                <a href={t('linked_in_link')} target="_blank" rel="noreferrer" className='nav-link p-anchors' >{t('sub_header_linked_in')}</a>
                                {t('sub_header_3')}
                            </p>
                            <p>
                                {t('under_sub_header_1')}
                                <a href="#littletowns-agora"className='nav-link p-anchors' >{t('under_sub_header_my_proyects')}</a>
                                {t('under_sub_header_2')}
                                <button onClick={handleShow} className='nav-link hello-link'>
                                    {t('under_sub_header_contact')}
                                </button>

                                <Modal show={show} onHide={handleClose} centered>
                                    <Modal.Body>
                                        <a href="mailto:laszloscheers@gmail.com" className='nav-link' onClick={handleClose} ><HiOutlineMail />&nbsp;laszloscheers@gmail.com</a>
                                        <p>or</p>
                                        <Button onClick={event => {handleClose();copyToClipboard();}}> Copy to clipboard</Button>
                                    </Modal.Body>
                                </Modal>
                                {t('under_sub_header_3')}
                            </p>
                        </Col>
                        <Col md className="d-flex justify-content-end">
                            <Image src="./assets/images/me.jpg" alt="Drawing of Laszlo Scheers" className="hero-img"></Image>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section-first" id="littletowns-agora">
                <Container>
                    <Row className="row-sections d-flex align-items-center">
                        <Col md className="d-flex justify-content-start">
                            <Image src="./assets/images/littletown.png" alt="Example of Litletown's web page" className="sections-img" ></Image>
                        </Col>
                        <Col md >
                            <h1 className="bold">Littletown's Agora</h1>
                            <p>{t('little_town_description')}</p>
                            <a href="https://littletownsagora.fly.dev/" target="_blank" rel="noreferrer" className='nav-link' >{t('visit_web')}&nbsp;<BsArrowRight/></a>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section-second" id="festrip-tickets">
                <Container>
                    <Row className="row-sections d-flex align-items-center">
                        <Col md>
                            <h1 className="bold">Festrip Tickets</h1>
                            <p>{t('festrip_description')}</p>
                            <a href="https://festrip.fly.dev/" target="_blank" rel="noreferrer" className='nav-link' >{t('visit_web')}&nbsp;<BsArrowRight/></a>
                        </Col>
                        <Col md className="d-flex justify-content-start">
                            <Image src="./assets/images/placeholder.png" alt="Example of Litletown's web page" className="sections-img" ></Image>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section-third" id="football-hub">
                <Container>
                    <Row className="row-sections d-flex align-items-center">
                        <Col md className="d-flex justify-content-start">
                            <Image src="./assets/images/placeholder.png" alt="Example of Litletown's web page" className="sections-img" ></Image>
                        </Col>
                        <Col md>
                            <h1 className="bold">Football Hub</h1>
                            <p>{t('football_app_description')}</p>
                            <a href="https://littletownsagora.fly.dev/" target="_blank" rel="noreferrer" className='nav-link' >{t('visit_web')}&nbsp;<BsArrowRight/></a>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section-first" id="watsons">
                <Container>
                    <Row className="row-sections d-flex align-items-center">
                        <Col md>
                            <h1 className="bold">Watson's Detective Agency</h1>
                            <p>{t('watson\'s_description')}</p>
                            <a href="https://littletownsagora.fly.dev/" target="_blank" rel="noreferrer" className='nav-link' >{t('visit_web')}&nbsp;<BsArrowRight/></a>
                        </Col>
                        <Col md className="d-flex justify-content-start">
                            <Image src="./assets/images/placeholder.png" alt="Example of Litletown's web page" className="sections-img" ></Image>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};
  
  export default Home;