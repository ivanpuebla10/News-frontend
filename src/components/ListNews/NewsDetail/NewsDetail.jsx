import { useEffect } from "react";
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
    
    return (
        <div>
        <p>{news.title}</p>
        <p>{news.description}</p>
        <p>{news.content}</p>
        <p>{news.author}</p>
      </div>
    )
  }
  
  export default NewsDetail
  