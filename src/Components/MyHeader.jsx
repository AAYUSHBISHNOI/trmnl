
import React from 'react'
import {Container} from 'react-bootstrap'
import Slider from "react-slick";

const MyHeader = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    slidesToScroll: 1
  };
  return (
    <div className='bcg_img'>
        <Container className='d-flex flex-column justify-content-center align-item-center min-h-100 d-flex'>
        <Slider {...settings} >
          <div className='text-center'>
          <h1 className='font_josefin fs_96 text-white fw_700'>Et dictumst <span className='txt_clr'>diam</span> <span className='d-lg-block'><span className='txt_clr'>pharetra</span> volutpat.</span></h1>
          <p className='text-white font_poppins fs_22 fw_600'>Dolor lacus nisl at elementum, aliquet ac. Consectetur viverra ornare vel morbi <span className='d-lg-block'>ut in tincidunt viverra. Aenean feugiat malesuada nunc aliquet vitae, commodo,</span> <span className='d-lg-block'>pellentesque laoreet amet.</span></p>
          <button className='font_Roboto fs_22 fw_700 text-white bttn_get'>GET STARTED</button>
          </div>
          <div className='text-center'>
          <h1 className='font_josefin fs_96 text-white fw_700'>Et dictumst <span className='txt_clr'>diam</span> <span className='d-lg-block'><span className='txt_clr'>pharetra</span> volutpat.</span></h1>
          <p className='text-white font_poppins fs_22 fw_600'>Dolor lacus nisl at elementum, aliquet ac. Consectetur viverra ornare vel morbi <span className='d-lg-block'>ut in tincidunt viverra. Aenean feugiat malesuada nunc aliquet vitae, commodo,</span> <span className='d-lg-block'>pellentesque laoreet amet.</span></p>
          <button className='font_Roboto fs_22 fw_700 text-white bttn_get'>GET STARTED</button>
          </div>
        </Slider>
        </Container>
    </div>
  )
}

export default MyHeader