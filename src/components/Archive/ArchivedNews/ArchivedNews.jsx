import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { removeNews } from "../../../features/news/newsSlice";
import { Link } from "react-router-dom";
import Figure from 'react-bootstrap/Figure';


const ArchivedNews = () => {
    const { listNews } = useSelector((state) => state.listNews);
    const dispatch = useDispatch();

    const news = listNews?.map((news) => {
        let newDate = news.date?.replace(/[a-zA-Z]/gi, " ").substring(".").split(".");

      const image =news.images?.map((image, i) => {
        if(i === 0)
        return <Link to={"/details/" + news._id} style={{ all:'unset', cursor: 'pointer'}}>
        <Card.Img variant="top" src={"http://localhost:5000/images/" + image} key={i} />
        </Link>
      })
      return (  
   <Card key={news._id} style={{ margin: '4rem' }}>
  {
    image ? image : null
  }
  <Card.Body>
  <Link to={"/details/" + news._id} style={{ all:'unset', cursor: 'pointer'}}>
    <Card.Title>{news.title}</Card.Title>
    </Link>
      <Card.Text className="mb-2 text-muted">
        {news.description} 
        <Link to={"/details/" + news._id} style={{ all:'unset', cursor: 'pointer'}}><Card.Subtitle>Read More{'>>'}</Card.Subtitle></Link>
      </Card.Text>
      {/* <Card.Text>
        {news.content}
      </Card.Text> */}
              <Card.Footer style={{display:"flex", justifyContent:"space-around"}}><span>Author: {news.author}</span><span>{newDate[0]}</span></Card.Footer>
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
          <Button variant="primary"><Link to={"/"} style={{ all:'unset', cursor: 'pointer'}}>Go home</Link></Button>
        </Card.Body>
      </Card>
    }
        </div>;
  };
  
  export default ArchivedNews