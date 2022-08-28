import ArchivedNews from "./ArchivedNews/ArchivedNews"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllArchive, reset } from "../../features/news/newsSlice";
import Spinner from 'react-bootstrap/Spinner';

const Archive = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.listNews);

    const getAllArchAndReset = async() => {
        await dispatch(getAllArchive());
        await dispatch(reset());
      }
  
      useEffect(() => {
      getAllArchAndReset()
      }, []);
  
    if (isLoading) { 
        return (<Spinner animation="border" role="status">
         <span className="visually-hidden">Loading...</span>
       </Spinner>)
   }
    return (
      <div className="container">
        <ArchivedNews/>
      </div>
    )
  }
  
  export default Archive