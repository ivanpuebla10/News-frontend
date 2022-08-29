import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../../features/news/newsSlice";

const NewsDetail = () => {
      const { id } = useParams()
      const dispatch = useDispatch();
      const { news } = useSelector((state) => state.listNews);
      console.log(id)
      useEffect(() => {
        dispatch(getById(id));
      }, []);
      const image =news.images?.map((image,i )=> {
        return <Card.Img src={"http://localhost:5000/images/" + image} key={i} />
      })
    
    return (
        <Card>
        <Card.Body>
        <Card.Title>{news.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{news.description}</Card.Subtitle>
        {image ? image : null}

          <Card.Text>
            {news.content}
          </Card.Text>
        </Card.Body>
        <Card.Footer>{news.author}</Card.Footer>
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
  