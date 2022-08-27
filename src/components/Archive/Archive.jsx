import ArchivedNews from "./ArchivedNews/ArchivedNews"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllArchive } from "../../features/news/newsSlice";

const Archive = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllArchive());
    }, []);
  
    return (
      <div className="container">
        <ArchivedNews/>
      </div>
    )
  }
  
  export default Archive