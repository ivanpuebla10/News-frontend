import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { archiveNews } from "../../../features/news/newsSlice";
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

const SingleNews = () => {
  const { listNews } = useSelector((state) => state.listNews);
  const dispatch = useDispatch();

  const group = listNews?.map((news, i) => {
    const image =news.images?.map((image,i )=> {
      if(i === 0)
      return <Card.Img variant="top" src={"http://localhost:5000/images/" + image} key={i} style={{ opacity: '0.8'}}/>
    })
    if(i <= 2) {
      return (
              <Carousel.Item key={news._id}>
                {
   image ? image : null
 }
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        /> */}
        <Link to={"/details/" + news._id} style={{ all:'unset', cursor: 'pointer'}}>
        <Carousel.Caption>
          <h3>{news.title}</h3>
          <p>{news.description}</p>
          
        </Carousel.Caption>
        </Link>
      </Carousel.Item>)}})
      //   <Card className="bg-dark text-white" style={{ margin: '1rem', border: "0.3rem solid #434B54"}} key={news._id}>
      //   {image ? image : null}
      //   <Card.ImgOverlay>
      //   <Link to={"/details/" + news._id} style={{ all:'unset', cursor: 'pointer'}}>

      //     <Card.Title>{news.title}</Card.Title>
      //     <Card.Text>
      //     {news.description}
      //     </Card.Text>
      //     </Link>
      //     <Button variant="primary" onClick={()=>dispatch(archiveNews(news._id))}>
      // Archive
      // </Button>
      //     {/* <Card.Text>{news.date}</Card.Text> */}
      //   </Card.ImgOverlay>
        
      // </Card>
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
  //   );
  // }})


  const news = listNews?.map((news, i) => {
    const image =news.images?.map((image,i )=> {
      if(i === 0)
      return <Card.Img variant="top" src={"http://localhost:5000/images/" + image} key={i} />
    })
    if(i > 2) {
      return (
    <Card key={news._id} style={{ width:'60rem'}}>

{
  image ? image : null
}
    <Card.Body>
    <Link to={"/details/" + news._id} style={{ all:'unset', cursor: 'pointer'}}>

      <Card.Title>{news.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{news.description}</Card.Subtitle>
      <Card.Text>
        {news.content}
      </Card.Text>
      <ListGroup className="list-group-flush">
            <ListGroup.Item>Author: {news.author}</ListGroup.Item>
            <ListGroup.Item>{news.date}</ListGroup.Item>
      </ListGroup>
      </Link>
      <Button variant="primary" onClick={()=>dispatch(archiveNews(news._id))}>
      Archive
      </Button>
    </Card.Body>

    </Card> 
    );}
  });
  return <>
    {/* <CardGroup style={{background: '#161D25', width: '100%'}} >    
      {group}
   </CardGroup> */}
       <Carousel>{group}</Carousel>
   <div style={{ margin: '2em'}}>
    <h1>Last News</h1>
    {news}
    </div>
    </>;
};

export default SingleNews;
