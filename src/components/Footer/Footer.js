import React, { useState, useEffect } from 'react';
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

  // Handles offcanvas inner text visiblity for small screens
  const [mediaQuery, setMediaQuery] = useState(false);
  const firstLoadMediaQuery = window.matchMedia('(max-width: 991px)').matches;
  
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
    window.addEventListener('resize', handleResize)

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
    <footer>

      {/* Back-to-top arrow */}
      <div id='back_to_top_cont' onClick={() => scroll.scrollToTop()}><TbCircleArrowUpFilled className={arrowUp && !(firstLoadMediaQuery || mediaQuery) ? 'back_to_top' : 'arrow-up-hidden'}/></div>

      {/* Copyright section */}
      <div className='text-center p-4 d-flex justify-content-center footer-colour'>
        © 2021 Copyright &nbsp;
        <a className='text-reset bold nav-link footer-nav-link' href={t('linked_in_link')} target="_blank" rel="noreferrer" >
          Laszlo Scheers
        </a>
      </div>
      
    </footer>
  );
}

export default Footer