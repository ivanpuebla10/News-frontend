import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { archiveNews } from "../../../features/news/newsSlice";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import "./SingleNews.css";


const SingleNews = () => {
  const { listNews } = useSelector((state) => state.listNews);
  const dispatch = useDispatch();

  const group = listNews?.map((news, i) => {
    const fetched = news.fetched

    if(i <= 2) {
      return (
              <Carousel.Item key={news?._id}>
    {
    fetched ? 
    
    <img className ="car-image" src={news?.images[0]} key={i} />

    :
<img className ="car-image" src={"http://localhost:5000/images/" + news?.images[0]} key={i} />
    }
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

  const news = listNews?.map((news, i) => {
    const fetched = news.fetched

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
        <Card.Subtitle style={{margin:'1rem'}}>Read More{'>>'}</Card.Subtitle>
        </Link>
      </Card.Text>
              <Card.Footer className="footer">
                <span>Author: {news.author}</span>
                <span>{newDate[0]}</span>
                </Card.Footer>
                <Button variant="primary" onClick={()=>dispatch(archiveNews(news._id))}>
      Archive
      </Button>
    </Card.Body>
    </div>
    <div className="image-container">
    {
    fetched ? 
    
    <img className ="card-image" src={news?.images[0]} key={i} />

    :
<img className ="card-image" src={"http://localhost:5000/images/" + news?.images[0]} key={i} />
    }
</div>
</div>
    </Card> 
    );}
  });
  return <>

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
