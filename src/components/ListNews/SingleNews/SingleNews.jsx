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
    const image =news.images?.map((image,i )=> {
      if(i === 0)
      return <Card.Img className = "car-image" src={"http://localhost:5000/images/" + image} key={i} />
    })
    if(i <= 2) {
      return (
              <Carousel.Item key={news?._id}>
                {
   image ? image : null
 }
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
    const image =news.images?.map((image,i )=> {
      if(i === 0)
      return <Link to={"/details/" + news._id} className="link-class">
      <img className ="card-image" src={"http://localhost:5000/images/" + image} key={i} />
      </Link>
    })
    if(i > 2) {
      let newDate = news.date.replace(/[a-zA-Z]/gi, " ")
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
                <span>{newDate}</span>
                </Card.Footer>
                <Button variant="primary" onClick={()=>dispatch(archiveNews(news._id))}>
      Archive
      </Button>
    </Card.Body>
    </div>
    {/* volver a poner este div y quitar el width del link class */}
    {/* <div style={{ width:'30%', heigth:'100%'}}> */}

{
  image ? image : null
} 
{/* </div> */}
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
          <Placeholder as="p" animation="glow" size={'lg'} style={{height:'70vh'}}>
        <Placeholder xs={12} size={'lg'}/>
      </Placeholder>
      <Placeholder as="p" animation="wave" size={'lg'}>
        <Placeholder xs={12} size={'lg'}/>
      </Placeholder>
      <Placeholder.Button xs={4} aria-hidden="true" />
    </>
    }
    </>;
};

export default SingleNews;
