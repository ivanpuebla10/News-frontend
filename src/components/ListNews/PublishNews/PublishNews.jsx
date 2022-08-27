import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { publish } from '../../../features/news/newsSlice';

//cambiar controlId

const PublishNews = () => {
  const dispatch = useDispatch();
  const [formData2, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    author: '',
    images:''
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (e.target.images.files[0])
      formData.set("images", e.target.images.files[0]);
      formData.set("title", e.target.description.value);
    formData.set("description", e.target.description.value);
    formData.set("content", e.target.content.value);
    formData.set("author", e.target.description.value);

    await dispatch(publish(formData));
    await setFormData(()=>({
    title: '',
    description: '',
    content: '',
    author: '',
    images: ''
    }))
  };
  const onChange = async (e) => {
    e.preventDefault();
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };

    return (
      <Form onSubmit={onSubmit} style={{ margin: '2rem', border: "1px solid #D3D3D3", borderRadius: "1em", padding: "1em" }}>
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
    )
  }
  
  export default PublishNews