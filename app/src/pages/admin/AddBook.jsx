import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export function AddBook( props ) {
    return (
        <Container>
            <Row>
                <Col>
                <Form id="add-book-form">
                    <Form.Group>
                        <Form.Label>Book Title</Form.Label>
                        <Form.Control type="text" name="title" placeholder="Book Title" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Book Author</Form.Label>
                        <Form.Control type="text" name="author" placeholder="Book Author" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Book Publisher</Form.Label>
                        <Form.Control type="text" name="publisher" placeholder="Book Publisher" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Book Category</Form.Label>
                        <Form.Select name="category">
                            <option value="fiction">Fiction</option>
                            <option value="non-fiction">Non-Fiction</option>
                            <option value="thriller">Thriller</option>
                            <option value="programming">Programming</option>

                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Language</Form.Label>
                        <Form.Select name="language">
                            <option value="english">English</option>
                            <option value="french">French</option>
                            <option value="chinese">Chinese</option>
                            <option value="spanish">Spanish</option>

                        </Form.Select>
                    </Form.Group>
                    <Button type="submit" variant="primary">Add book</Button>
                </Form>
                </Col>
            </Row>
        </Container>
    )
}