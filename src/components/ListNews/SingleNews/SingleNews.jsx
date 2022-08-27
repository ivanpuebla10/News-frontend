import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const SingleNews = () => {
  const { listNews } = useSelector((state) => state.news);

  const news = listNews?.map((news) => {
    const image =news.images?.map(image => {
      return <Card.Img variant="top" src={"http://localhost:5000/images/" + image} />
    })
    return (
    //     <Card style={{ width: '18rem' }} key={news.id}>
    //   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    //   <Card.Body>
    //     <Card.Title>{news.title}</Card.Title>
    //     <Card.Subtitle className="mb-2 text-muted">{news.description}</Card.Subtitle>
    //     <Card.Text>
    //     {news.content}
    //     </Card.Text>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroup.Item>Author: {news.author}</ListGroup.Item>
    //     <ListGroup.Item>{news.date}</ListGroup.Item>
    //   </ListGroup>
    //   <Button variant="primary">
    //     <Card.Link href="/archive" style={{ color: 'white'}}>Archive</Card.Link>
    //   </Button>
    // </Card>

 <Card key={news.id} style={{ margin: '4rem' }}>
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
  <Button variant="primary">
  <Card.Link href="/archive" style={{ color: 'white'}}>Archive</Card.Link>
  </Button>
</Card.Body>
</Card> 
    //   <div className="news" key={news.id}>
    //     <p>{news.title}</p>
    //     <p>{news.description}</p>
    //     <p>{news.content}</p>
    //   </div>
    );
  });
  return <div>{news}</div>;
};

export default SingleNews;
