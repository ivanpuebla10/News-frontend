import SingleNews from "./SingleNews/SingleNews"
import PublishNews from "./PublishNews/PublishNews"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../features/news/newsSlice";
import Spinner from 'react-bootstrap/Spinner';

const ListNews = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.listNews);

    const getAllAndReset = async() => {
      await dispatch(getAll());
      await dispatch(reset());
    }

    useEffect(() => {
    getAllAndReset()
    }, []);
    
    if (isLoading) { 
           return (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>)
      }
    
    return (
      <div className="container">
        <PublishNews/>
        <SingleNews/>
      </div>
    )
  }
  
  export default ListNews