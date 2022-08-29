import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { archiveNews } from "../../../features/news/newsSlice";
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";

const SingleNews = () => {
  const { listNews } = useSelector((state) => state.listNews);
  const dispatch = useDispatch();

  const group = listNews?.map((news, i) => {
    const image =news.images?.map((image,i )=> {
      return <Card.Img variant="top" src={"http://localhost:5000/images/" + image} key={i} style={{ opacity: '0.8'}}/>
    })
    if(i <= 2) {
      return (
        <Card className="bg-dark text-white" style={{ margin: '1rem', border: "0.3rem solid #434B54"}} key={news._id}>
        <Link to={"/details/" + news._id}>
        {image ? image : null}
        <Card.ImgOverlay>
          <Card.Title>{news.title}</Card.Title>
          <Card.Text>
          {news.description}
          </Card.Text>
          <Button variant="primary" onClick={()=>dispatch(archiveNews(news._id))}>
      Archive
      </Button>
          {/* <Card.Text>{news.date}</Card.Text> */}
        </Card.ImgOverlay>
        </Link>
      </Card>
//         <Card key={news._id} >
// {
//   image ? image : null
// }
//     <Card.Body>
//       <Card.Title>{news.title}</Card.Title>
//       <Card.Subtitle className="mb-2 text-muted">{news.description}</Card.Subtitle>
//       <Card.Text>
//         {news.content}
//       </Card.Text>
//       <ListGroup className="list-group-flush">
//             <ListGroup.Item>Author: {news.author}</ListGroup.Item>
//             <ListGroup.Item>{news.date}</ListGroup.Item>
//       </ListGroup>
//       <Button variant="primary"  onClick={()=>dispatch(archiveNews(news._id))}>
//       Archive
//       </Button>
//     </Card.Body>
//     </Card> 
    );
  }})


  const news = listNews?.map((news, i) => {
    const image =news.images?.map((image,i )=> {
      return <Card.Img variant="top" src={"http://localhost:5000/images/" + image} key={i} />
    })
    if(i > 2) {
      return (
    <Card key={news._id} style={{ width:'60rem'}}>
    <Link to={"/details/" + news._id}>

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
      <Button variant="primary" onClick={()=>dispatch(archiveNews(news._id))}>
      Archive
      </Button>
    </Card.Body>
    </Link>
    </Card> 
    );}
  });
  return <>
    <CardGroup style={{background: '#161D25', width: '100%'}} >    
      {group}
   </CardGroup>
   <div style={{ margin: '2em'}}>
    <h1>Last News</h1>
    {news}
    </div>
    </>;
};

export default SingleNews;
