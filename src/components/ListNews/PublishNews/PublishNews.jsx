import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { publish, reset } from '../../../features/news/newsSlice';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer'
import Collapse from 'react-bootstrap/Collapse';


//cambiar controlId

const PublishNews = () => {
  const dispatch = useDispatch();
  const { isSuccess, message, isError } = useSelector((state) => state.listNews);
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [open, setOpen] = useState(false);

  const [formData2, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    author: '',
    images:''
    });

    useEffect(() => {
      if (isError) {
        setType("Error")
        setDesc(message)
        setShow(true)
      }
      if (isSuccess) {
        setType("Success")
        setDesc(message)
        setShow(true)
      }
      dispatch(reset());
    }, [isError, isSuccess, message, dispatch]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (e.target.images.files[0])
    formData.set("images", e.target.images.files[0]);
    formData.set("title", e.target.title.value);
    formData.set("description", e.target.description.value);
    formData.set("content", e.target.content.value);
    formData.set("author", e.target.author.value);

    await dispatch(publish(formData));
    await setFormData(()=>({
    title: '',
    description: '',
    content: '',
    author: '',
    images: ''
    }))
    setOpen(!open)
  };

  const onChange = async (e) => {
    e.preventDefault();
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };

    return (
      <>      
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{ margin: '2rem'}}
      >
        Click to publish
      </Button>
      <ToastContainer position='top-end'>
      <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide >
          <Toast.Header>
            <strong className="me-auto">{type}</strong>
          </Toast.Header>
          <Toast.Body>{desc}</Toast.Body>
        </Toast>
      </Col>
    </Row>
    </ToastContainer>
    <Collapse in={open}>

      <Form onSubmit={onSubmit} style={{ margin: '2rem', border: "1px solid #D3D3D3", borderRadius: "1em", padding: "1em", background: '#F2F4F6' }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" onChange={onChange} name="title" value={formData2.title}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" onChange={onChange} name="description" value={formData2.description}/>
      </Form.Group>

      <InputGroup>
        <InputGroup.Text>Content</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" onChange={onChange} name="content" value={formData2.content}/>
      </InputGroup>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Author" onChange={onChange} name="author" value={formData2.author}/>
      </Form.Group>

      <Form.Group controlId="formFileDisabled" className="mb-3">
        <Form.Label>Image(s)</Form.Label>
        <Form.Control type="file" name="images"/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Publish
      </Button>
    </Form>
    </Collapse>
    </>
    )
  }
  
  export default PublishNews