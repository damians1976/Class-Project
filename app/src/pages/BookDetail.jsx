import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'

export function BookDetail( props ) {
    return(
        <Container>
            <Row>
                <Col>
                    <h1>Book Detail</h1>
                </Col>
            </Row>

        </Container>
    )
}