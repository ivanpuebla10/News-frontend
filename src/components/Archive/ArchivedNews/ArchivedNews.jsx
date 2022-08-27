import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { removeNews } from "../../../features/news/newsSlice";

const ArchivedNews = () => {
    const { listNews } = useSelector((state) => state.listNews);
    const dispatch = useDispatch();

    const news = listNews?.map((news) => {
      const image =news.images?.map(image => {
        return <Card.Img variant="top" src={"http://localhost:5000/images/" + image} />
      })
      return (  
   <Card key={news._id} style={{ margin: '4rem' }}>
  {
    image ? image : null
  }
  <Card.Body>
    <Card.Title>{news.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{news.description}</Card.Subtitle>
    <Card.Text>
      {news.content}
    </Card.Text>
    <ListGroup className="list-group-flush">
          <ListGroup.Item>Author: {news.author}</ListGroup.Item>
          <ListGroup.Item>{news.date}</ListGroup.Item>
    </ListGroup>
    <Button variant="primary" onClick={()=>dispatch(removeNews(news._id))}>
    Remove
    </Button>
  </Card.Body>
  </Card> 
      );
    });
    return <div>{news}</div>;
  };
  
  export default ArchivedNews