import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { archiveNews } from "../../../features/news/newsSlice";
import Carousel from 'react-bootstrap/Carousel';


const SingleNews = () => {
  const { listNews } = useSelector((state) => state.listNews);
  const dispatch = useDispatch();

  const carousel = listNews?.map((news, i) => {
    const image =news.images?.map((image,i )=> {
      return <Card.Img variant="top" src={"http://localhost:5000/images/" + image} key={i} />
    })
    if(i <= 2) {
      return (
        <Card key={news._id} style={{ margin: '4rem', background: 'red'}}>
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
      <Button variant="primary"  onClick={()=>dispatch(archiveNews(news._id))}>
      Archive
      </Button>
    </Card.Body>
    </Card> 
    );
  }})


  const news = listNews?.map((news, i) => {
    const image =news.images?.map((image,i )=> {
      return <Card.Img variant="top" src={"http://localhost:5000/images/" + image} key={i} />
    })
    if(i > 2) {
      return (
    <Card key={news._id} style={{ margin: '4rem'}}>
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
      <Button variant="primary"  onClick={()=>dispatch(archiveNews(news._id))}>
      Archive
      </Button>
    </Card.Body>
    </Card> 
    );}
  });
  return <div>
    {carousel}
    {news}
    </div>;
};

export default SingleNews;
