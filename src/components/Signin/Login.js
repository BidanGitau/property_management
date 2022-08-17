import React from 'react'
import { useState } from 'react'
import {FloatingLabel} from 'react-bootstrap'
import { Container,Row,Col,Form,Button,InputGroup} from 'react-bootstrap'

import Log from '../../assets/images/modern.jpg'
import './Login.css'
export const Login = () => {

    const [password,setPassword]=useState('password')
    const [passwordInput,setPasswordInput]=useState("");
    const handlePasswordChange=(e)=>{
        setPasswordInput(e.target.value)
    }
    const togglePassword =()=>{
        if(password==="password")
        {
         setPassword("text")
         return;
        }
        setPassword("password")
      }
  return (
    
    <Container>
       
    <h1 className="shadow-sm  mt-5 p-3 text-center rounded fw-bold">
           TAMIRAT PROPERTY  MANAGER
    </h1>
    <Row>
    <Col lg={6} md={6} sm={12} className="p-5 m-auto  rounded-lg " >
       <div className="start">
      <img src={Log} alt="home"  className='home_image'/>
      </div>
     </Col>
        <Col lg={6} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
            <h4 className='fw-semibold'>Sign In
</h4>
    <Form className='mt-5'>
     
      <InputGroup className="mb-3">
        <InputGroup.Text controlId="floatingInput">@</InputGroup.Text>
        <FloatingLabel className="mb-3" controlId="floatingInput" label="Email address">
        <Form.Control type="email" placeholder="Enter email" />
               
      </FloatingLabel>
      </InputGroup>
      <Form.Text className="text-muted m-3">
          We'll never share your email with anyone else.
        </Form.Text>
      <FloatingLabel className="mb-3" controlId="formBasicPassword" label="Password">
      
       <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} name="password" value={passwordInput} />
      
      </FloatingLabel>

      <Form.Group className="mb-3 text-muted " controlId="formBasicCheckbox">
        
        <Form.Check type="checkbox" label="Rememeber Me" />
      </Form.Group>
      <Button variant="success btn-block" type="submit">
        Login
      </Button>
    </Form>
        </Col>
    </Row>
       
    </Container>
    
  )
}
