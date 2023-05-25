import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { ImArrowRight2 } from 'react-icons/im';

import "./home.css";

function Home() {

    // i18next language swapping tool
    const { t } = useTranslation()

    // Handles offcanvas inner text visiblity for small screens and manage viewport changes for mobiles and tablets landscape mode.

    // Media querry for the first time the page loads
    const firstLoadMediaQuery = window.matchMedia('(max-width: 991px)').matches;
    // Media query for every useEffect event listeners rerenders
    const [mediaQuery, setMediaQuery] = useState(false);

    // Stores the viewport size to recognize changes on it
    const [dimensions, setDimensions] = useState({
      height: window.innerHeight,
      width: window.innerWidth
    })
    
    useEffect(() => {
      function handleResize() {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        })
      }
      window.addEventListener('resize', handleResize);

      window.matchMedia("(max-width: 991px)").addEventListener("change", e => {
        const mediaMatches = e.matches;
        if (mediaMatches){
          setMediaQuery(true)
        } else{
          setMediaQuery(false)
        }
      });
    },[dimensions]);

    return (
        <div>
            {/*Hero Section*/}
            <section className="hero">
                <Container>
                    <Row className="hero-row">
                        <Col lg className={ firstLoadMediaQuery || mediaQuery ? 'hero-col last' : 'hero-col' }>
                            {/* t() calls the key values in the locales/language json file corresponding to the active language*/}
                            <h1 className="bold">{t('header')}</h1>
                            <p>
                                {t('sub_header_1')}
                                <a href="https://www.github.com/laszloscheers" target="_blank" rel="noreferrer" className='nav-link home-link' >{t('sub_header_git_hub')}</a>
                                {t('sub_header_2')}
                                <a href={t('linked_in_link')} target="_blank" rel="noreferrer" className='nav-link home-link' >{t('sub_header_linked_in')}</a>
                                {t('sub_header_3')}
                            </p>
                            <p>
                                {t('under_sub_header_1')}
                                <a href="#littletown"className='nav-link home-link' >{t('under_sub_header_my_proyects')}</a>
                                {t('under_sub_header_2')}
                            </p>
                        </Col>
                        <Col lg className={ firstLoadMediaQuery || mediaQuery ? 'd-flex justify-content-center first' : 'd-flex justify-content-start' }>
                            <Image src="./assets/images/me.png" alt="Drawing of Laszlo Scheers" className="hero-img" fluid></Image>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*First Project Section*/}
            <section className="section-first" id="littletown">
                <Container>
                    <Row className="row-sections d-flex align-items-center">

                        {/* Media query selects the class corresponding with the size of the screen */}
                        <Col lg className={ firstLoadMediaQuery || mediaQuery ? 'd-flex justify-content-center last' : 'd-flex justify-content-center ps-0' }>
                        <a href="https://littletownsagora.fly.dev/" target="_blank" rel="noreferrer" className='img-link' ><Image src="./assets/images/littletown.png" alt="Example of Litletown's web page" className="first-img" ></Image></a>
                        </Col>
                        <Col lg className={ firstLoadMediaQuery || mediaQuery ? 'col-sections-odd col-sections first' : 'col-sections-odd col-sections' }>
                            <h2 className="bold mb-4">Littletown's Agora</h2>
                            <p>{t('little_town_description_1')}<span className="bold">{t('little_town_description_2')}</span>{t('little_town_description_3')}<span className="bold">{t('little_town_description_4')}</span>{t('little_town_description_5')}<span className="bold">{t('little_town_description_6')}</span>{t('little_town_description_7')}</p>
                            <a href="https://littletownsagora.fly.dev/" target="_blank" rel="noreferrer" className='nav-link bold home-link' >{t('visit_web')}<span className='ms-2'><ImArrowRight2 className='expand'/></span></a>
                        </Col>

                    </Row>
                </Container>
            </section>
            
            {/*Second Project Section*/}
            <section className="section-second">
                <Container>
                    <Row className="row-sections d-flex align-items-center">
                        <Col lg className='col-sections col-sections-even'>
                            <h2 className="bold mb-4">{t('festrip_title')}</h2>
                            <p>{t('festrip_description_1')}<span className="bold">{t('festrip_description_2')}</span>{t('festrip_description_3')}<span className="bold">{t('festrip_description_4')}</span>{t('festrip_description_5')}<span className="bold">{t('festrip_description_6')}</span>{t('festrip_description_7')}</p>
                            <a href="https://festriptickets.fly.dev/" target="_blank" rel="noreferrer" className='nav-link bold home-link mt-3' >{t('visit_web')}<span className='ms-2'><ImArrowRight2 className='expand'/></span></a>
                        </Col>
                        <Col lg className="d-flex justify-content-center">
                        <a href="https://festriptickets.fly.dev/" target="_blank" rel="noreferrer" className='img-link' ><Image src="./assets/images/festrip.png" alt="Example of Litletown's web page" className="sections-img" fluid ></Image></a>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*Third Project Section*/}
            <section className="section-first">
                <Container>
                    <Row className="row-sections d-flex align-items-center">
                        <Col lg className={ firstLoadMediaQuery || mediaQuery ? 'd-flex justify-content-center last' : 'd-flex justify-content-center' }>
                        <a href="https://thefootballhub.netlify.app/" target="_blank" rel="noreferrer" className='img-link' ><Image src="./assets/images/footballhub.png" alt="Example of Litletown's web page" className="sections-img" fluid ></Image></a>
                        </Col>
                        <Col lg className={ firstLoadMediaQuery || mediaQuery ? 'col-sections-odd col-sections first' : 'col-sections-odd col-sections' }>
                            <h2 className="bold mb-4">Football Hub</h2>
                            <p>{t('football_app_description_1')}<span className="bold">{t('football_app_description_2')}</span>{t('football_app_description_3')}<span className="bold">{t('football_app_description_4')}</span>{t('football_app_description_5')}<span className="bold">{t('football_app_description_6')}</span>{t('football_app_description_7')}<span className="bold">{t('football_app_description_8')}</span>{t('football_app_description_9')}</p>
                            <a href="https://thefootballhub.netlify.app/" target="_blank" rel="noreferrer" className='nav-link bold home-link mt-3' >{t('visit_web')}<span className='ms-2'><ImArrowRight2 className='expand'/></span></a>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*Fourth Project Section*/}
            <section className="section-second">
                <Container>
                    <Row className="row-sections d-flex align-items-center">
                        <Col lg className='col-sections col-sections-even'>
                            <h2 className="bold mb-4">{t('watsons_title')}</h2>
                            <p>{t('watsons_description_1')}<span className="bold">{t('watsons_description_2')}</span>{t('watsons_description_3')}<span className="bold">{t('watsons_description_4')}</span>{t('watsons_description_5')}</p>
                            <a href="https://laszloscheers.github.io/watsons_detective_agency/" target="_blank" rel="noreferrer" className='nav-link bold home-link mt-3' >{t('visit_web')}<span className='ms-2 '><ImArrowRight2 className='expand'/></span></a>
                        </Col>
                        <Col lg className="d-flex justify-content-center">
                        <a href="https://laszloscheers.github.io/watsons_detective_agency/" target="_blank" rel="noreferrer" className='img-link' ><Image src="./assets/images/watsons.png" alt="Example of Litletown's web page" className="sections-img" fluid ></Image></a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};
  
  export default Home;