import SingleNews from "./SingleNews/SingleNews"
import PublishNews from "./PublishNews/PublishNews"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAll } from "../../features/news/newsSlice";

const ListNews = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAll());
    }, []);
  
    return (
      <div className="container">
        <PublishNews/>
        <SingleNews/>
      </div>
    )
  }
  
  export default ListNews