import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

//cambiar controlId

const PublishNews = () => {
    return (
      <Form style={{ margin: '2rem', border: "1px solid #D3D3D3", borderRadius: "1em", padding: "1em" }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" />
      </Form.Group>

      <InputGroup>
        <InputGroup.Text>Content</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Author" />
      </Form.Group>

      <Form.Group controlId="formFileDisabled" className="mb-3">
        <Form.Label>Image(s)</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Publish
      </Button>
    </Form>
    )
  }
  
  export default PublishNews