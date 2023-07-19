import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container style = {{backgroundColor : 'transparent', color:'white'}}>
      <Row>
        <Col md={6}>
          
          <p style = {{fontSize:'20px', borderRadius : '30px' , padding:'5px',color:'', backgroundColor:'black', marginTop:'100px', marginBottom:'100px'}}>Welcome to our website! We are a team of dedicated professionals passionate about delivering high-quality stock inventory management solutions to businesses of all sizes. With years of experience in the industry, we specialize in helping companies streamline their operations and optimize their inventory management processes.</p>
          <p style = {{fontSize:'20px', borderRadius : '30px' , padding:'5px',color:'', backgroundColor:'black', marginTop:'100px', marginBottom:'100px'}}>Our mission is to provide efficient and reliable stock inventory management tools that empower businesses to make informed decisions, reduce costs, and improve overall productivity. We understand the challenges faced by businesses in managing their inventory effectively, and we are committed to providing innovative solutions to address these pain points.</p>
          <p style = {{fontSize:'20px', borderRadius : '30px' , padding:'5px',color:'', backgroundColor:'black', marginTop:'100px', marginBottom:'100px'}}>At our company, we believe in the power of technology to revolutionize stock inventory management. Our cutting-edge software solutions leverage advanced algorithms and automation to enable real-time tracking, forecasting, and analysis of inventory levels. With our user-friendly interface and powerful features, businesses can gain complete visibility and control over their stock, leading to enhanced efficiency and profitability.</p>
          <p style = {{fontSize:'20px', borderRadius : '30px' , padding:'5px',color:'', backgroundColor:'black', marginTop:'100px', }}>Customer satisfaction is at the core of our business. We work closely with our clients to understand their unique requirements and tailor our solutions to meet their specific needs. Our dedicated support team is always available to provide assistance and ensure a seamless experience for our customers.</p>
        </Col>
        <Col md={6}>
       
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
