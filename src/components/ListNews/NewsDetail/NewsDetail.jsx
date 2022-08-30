import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../../features/news/newsSlice";
import Carousel from 'react-bootstrap/Carousel';


const NewsDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const { news } = useSelector((state) => state.listNews);

    useEffect(() => {
        dispatch(getById(id));
    }, []);

    const image =news.images?.map((image,i )=> {
        return <Carousel.Item key={i}><Card.Img src={"http://localhost:5000/images/" + image} style={{ height: '35rem', width:'60rem'}}/></Carousel.Item>
    })
    
    let newDate = news.date?.replace(/[a-zA-Z]/gi, " ")

    return (
        <Card className="container">
        <Card.Body>
            <div style={{textAlign:'left', marginBottom:'2rem'}}>
        <h2 style={{marginBottom:'1rem'}}>{news.title}</h2>
    <Card.Subtitle className="mb-2 text-muted">{news.description}</Card.Subtitle>        
        </div>
        <Carousel >
        {image ? image : null}
        </Carousel>
          <Card.Text style={{textAlign:'justify', padding:'3rem'}}>
            {news.content}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{display:"flex", justifyContent:"space-around"}}><span>Author: {news.author}</span><span>{newDate}</span></Card.Footer>
      </Card>
    //     <div>
    //     <p>{news.title}</p>
    //     <p>{news.description}</p>
    //     {image ? image : null}
    //     <p>{news.content}</p>
    //     <p>{news.author}</p>
    //   </div>
    )
  }
  
  export default NewsDetail
  