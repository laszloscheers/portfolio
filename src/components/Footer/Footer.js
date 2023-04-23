import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from 'react-scroll'
import { TbCircleArrowUpFilled } from 'react-icons/tb';


import './footer.css'

function Footer() {
  // Language swapping tool
  const { t } = useTranslation()

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

  // Handles back-to-top arrow visiblity for small screens

  const mediaQuery = window.matchMedia('(max-width: 991px)');

  return (
    <footer className='text-center text-lg-start text-muted'>

      <section className='border-top'>
        {/* Back-to-top arrow */}
        <div id='back_to_top_cont' onClick={() => scroll.scrollToTop()}><TbCircleArrowUpFilled className={arrowUp && !mediaQuery.matches ? 'back_to_top' : 'arrow-up-hidden'}/></div>
      </section>

      {/* Copyright section */}
      <div className='text-center p-4 d-flex justify-content-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright &nbsp;
        <a className='text-reset bold nav-link footer-nav-link' href={t('linked_in_link')} target="_blank" rel="noreferrer" >
          Laszlo Scheers
        </a>
      </div>
    </footer>
  );
}

export default Footer