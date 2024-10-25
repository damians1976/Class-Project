import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Signup(props) {

    const [ password, setPassword ] = useState('')
    const [ validpassword, setValidPassword ] = useState( false )

    const navigate = useNavigate()
    const reqNumbers = "0123456789"
    const reqChars ="abcdefghijklmnopqrstuvwxyz"
    const reqCaps ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const reqSymbols ="!@#$%^&*()_-+=?"

    const includesNumbers = () => {
        const numbersArray = reqNumbers.split('')
        let result = false
        numbersArray.forEach( ( number ) => {
            if( password.includes(number)) {
                result = true
            }

        })
        return result 
    }

    useEffect{ () => {
        if( password.length >= 8 && password.length <= 15) {
            setValidPassword( true )
        }
        else {
            setValidPassword( false )
        }
    } , [ password ]}

    const signUpUser = (event) => {
        event.preventDefault()
        const formdata = new FormData(event.target)
        const email = formdata.get("email")
        const password = formdata.get("password")
        createUserWithEmailAndPassword( props.authapp, email, password)
        .then ( (response) => navigate("/") )
        .catch ( (error) => console.log(error) )
    }
    
    
    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Form className="mt-4" onSubmit={ (event) => signUpUser(event) }>
                            <h4>Sign up for an account</h4>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                type="email" 
                                placeholder="you@domain.com"
                                name="email" 
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                type="password" 
                                placeholder="minimum 6 characters"
                                name="password"
                                value={ password }
                                onChange{ (event) => setPassword( event.target.value)}
                                />
                            </Form.Group>
                            <Button 
                            type="submit" 
                            variant="primary" 
                            className="my-3 mx-auto d-block w-50"
                            disabled = { (validpassword) ? false : true }
                            >
                                Sign up
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}