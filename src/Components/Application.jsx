import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import  section  from "../img/png/first.png";

const Application = () => {
  return (
    <div>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6}>
                    <img className='w-100' src={section} alt="#" />
                </Col>
                <Col lg={6}>
                    <h2 className='fw_700 fs_48 font_josefin d-flex'>Application<span className='txt_clr'>Modernization</span></h2>
                    <p className='font_poppins fs_16 fw_400 mb-0'>AgileCube has 10 years of experience in consulting, to enable a continuous usage of<span className='d-xxl-block'>investments and support clients to avoid unnecessary project restarts and costs.</span> <span className='d-xxl-block'>AgileCube has 10 years of experience in consulting, to enable Modernizing or</span> <span className='d-xxl-block'> an application includes code assessment, preparation for cloud migration under a</span> <span className='d-xxl-block'>refreshed, up-to-date infrastructure and software environment, and application</span> <span className='d-xxl-block'>containerization for faster loading times.</span></p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Application