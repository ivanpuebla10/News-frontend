import axios from "axios";

const API_URL = "http://localhost:5000";

const getAll = async () => {
  const res = await axios.get(API_URL + "/news");
  return res.data;
};

const getAllArchive = async () => {
  const res = await axios.get(API_URL + "/news/archived");
  return res.data;
};

const newsService = {
  getAll,
  getAllArchive
};

export default newsService;
