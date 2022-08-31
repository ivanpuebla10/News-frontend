import { useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { publish, reset } from '../../../features/news/newsSlice';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import CloseButton from 'react-bootstrap/CloseButton';
import "./PublishNews.css";

//cambiar controlId

const PublishNews = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const target = useRef(null);

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
        setFormData(()=>({
          title: '',
          description: '',
          content: '',
          author: '',
          }))
          ref.current.value = "";
          setOpen(!open)
      }
      dispatch(reset());
    }, [isError, isSuccess, message, dispatch]);

  const onSubmit = async (e) => {

    e.preventDefault();
    const formData = new FormData();

for (let img of e.target.images.files) {
  formData.append('images', img)
}
    formData.set("title", e.target.title.value);
    formData.set("description", e.target.description.value);
    formData.set("content", e.target.content.value);
    formData.set("author", e.target.author.value);

    await dispatch(publish(formData));
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

<Overlay target={target.current} show={show} placement="right" delay={3000} autohide>
<Popover id="popover-contained">

          <Popover.Header as="h3"><CloseButton onClick={() => setShow(!show)}/> {type}</Popover.Header>
          <Popover.Body>
            <strong>{desc}</strong> 
          </Popover.Body>
        </Popover>
      </Overlay>
    <Collapse in={open}>

      <Form onSubmit={onSubmit} className="publish-form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" onChange={onChange} name="title" value={formData2.title}/>
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
        <Form.Control type="file" name="images" ref= {ref} multiple="multiple"/>
      </Form.Group>

      <Button variant="primary" type="submit"       ref={target}>
        Publish
      </Button>
    </Form>
    </Collapse>
    </>
    )
  }
  
  export default PublishNews