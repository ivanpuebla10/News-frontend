import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { archiveNews } from "../../../features/news/newsSlice";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Placeholder from 'react-bootstrap/Placeholder'
import "./SingleNews.css";


const SingleNews = () => {
  const { listNews } = useSelector((state) => state.listNews);
  const dispatch = useDispatch();

  const group = listNews?.map((news, i) => {
    const fetched = news.fetched
    const image =news.images?.map((image,i )=> {
      if(i === 0)
      return (
      <>
      {fetched ? 
      <>
      {/* // <Link to={"/details/" + news._id} className="link-class"> */}
      <img className ="card-image" src={image} key={i} />
      {/* // </Link> */}
      </>
    :
    <>
    {/* // <Link to={"/details/" + news._id} className="link-class"> */}
    <img className ="card-image" src={"http://localhost:5000/images/" + image} key={i} />
    {/* // </Link> */}
    </>
    
    }
    </>
      )
    })

    if(i <= 2) {
      return (
              <Carousel.Item key={news?._id}>
                <>
    {
    fetched ? 
    
    <img className ="card-image" src={news?.images[0]} key={i} />

    :
<img className ="card-image" src={"http://localhost:5000/images/" + news?.images[0]} key={i} />
    }
    </>
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        /> */}
        <Carousel.Caption>
        <Link className = "link-class" to={"/details/" + news?._id} >

          <h3>{news?.title}</h3>
          <p>{news?.description}</p>
          </Link>
          <Button variant="primary" onClick={()=>dispatch(archiveNews(news._id))}>
       Archive
       </Button>
        </Carousel.Caption>


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
    const fetched = news.fetched
    const image =news.images?.map((image,i )=> {
      if(i === 0)
      return (
      <>
      {fetched ? 
      <>
      {/* // <Link to={"/details/" + news._id} className="link-class"> */}
      <img className ="card-image" src={image} key={i} />
      {/* // </Link> */}
      </>
      
    :
    <>
    {/* // <Link to={"/details/" + news._id} className="link-class"> */}
    <img className ="card-image" src={"http://localhost:5000/images/" + image} key={i} />
    {/* // </Link> */}
    </>
    
    }
    </>
      )
    })


    if(i > 2) {
      let newDate = news.date?.replace(/[a-zA-Z]/gi, " ").substring(".").split(".");
      return (
    <Card key={news._id} className="card-class">
<div  className="card-flex">
<div className="body-container">
    <Card.Body>
    <Link to={"/details/" + news._id} className="link-class">
      <Card.Title >{news.title}</Card.Title>
      </Link>
      <Card.Text className="mb-2 text-muted">
        {news.description} 
        <Link to={"/details/" + news._id} className="link-class">
          <Card.Subtitle>Read More{'>>'}</Card.Subtitle>
        </Link>
      </Card.Text>
      {/* <Card.Text>
        {news.content}
      </Card.Text> */}
              <Card.Footer className="footer">
                <span>Author: {news.author}</span>
                <span>{newDate[0]}</span>
                </Card.Footer>
                <Button variant="primary" onClick={()=>dispatch(archiveNews(news._id))}>
      Archive
      </Button>
    </Card.Body>
    </div>
    {/* volver a poner este div y quitar el width del link class */}
    <div className="image-container">
{
  image ? image : null
} 
</div>
</div>
    </Card> 
    );}
  });
  return <>
    {/* <CardGroup style={{background: '#161D25', width: '100%'}} >    
      {group}
   </CardGroup> */}
   {listNews.length !== 0 ? 
   <>
    <Carousel >{group}</Carousel>
   <div className="container">
   <h1>Last News</h1>
    {news}
    </div>
    </>
    :
    <>
        <Card style={{height:'100vh'}}>
        <Card.Header as="h5">Still empty</Card.Header>
        <Card.Body>
          <Card.Title>There are no news</Card.Title>
          <Card.Text>
            Click on publish and write some articles!
          </Card.Text>
        </Card.Body>
      </Card>
    </>
    }
    </>;
};

export default SingleNews;
