import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { removeNews } from "../../../features/news/newsSlice";
import { Link } from "react-router-dom";
import "./ArchivedNews.css";


const ArchivedNews = () => {
    const { listNews } = useSelector((state) => state.listNews);
    const dispatch = useDispatch();

    const news = listNews?.map((news) => {
        let newDate = news.date?.replace(/[a-zA-Z]/gi, " ").substring(".").split(".");
        const fetched = news?.fetched

      return (  
   <Card className="archive-card" key={news._id} >
    {
    fetched ? 
    
    <Link to={"/details/" + news._id} className="link-class">
    <Card.Img variant="top" className="archive-image"  src={news?.images[0]}  />
    </Link>
    :
    <Link to={"/details/" + news._id} className="link-class">
    <Card.Img variant="top" src={"http://localhost:5000/images/" + news?.images[0]} className="archive-image" />
    </Link>
    }
  <Card.Body >
  <Link to={"/details/" + news._id} className="link-class">
    <Card.Title >{news.title}</Card.Title>
    </Link>
      <Card.Text className="mb-2 text-muted">
        {news.description} 
        <Link to={"/details/" + news._id} className="link-class"><Card.Subtitle className="read-more" style={{margin:'1rem'}}>Read More{'>>'}</Card.Subtitle></Link>
      </Card.Text>
              <Card.Footer className="footer"><span>Author: {news.author}</span><span>{newDate[0]}</span></Card.Footer>
    <Button variant="primary" onClick={()=>dispatch(removeNews(news._id))}>
    Remove
    </Button>
  </Card.Body>
  </Card> 
      );
    });
    return <div>
        {listNews.length !== 0 ?
        <>{news}</>
        :
        <Card style={{height:'100vh'}}>
        <Card.Header as="h5">Still empty</Card.Header>
        <Card.Body>
          <Card.Title>There are no archived news</Card.Title>
          <Card.Text>
            Go to news page and click on "archive".
          </Card.Text>
          <Button variant="primary"><Link to={"/"} className="link-class">Go home</Link></Button>
        </Card.Body>
      </Card>
    }
        </div>;
  };
  
  export default ArchivedNews