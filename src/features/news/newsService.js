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

const archiveNews = async (id) => {
  const res = await axios.put(API_URL + "/news/archive/" + id);
  return res.data;
};

const removeNews = async (id) => {
  const res = await axios.delete(API_URL + "/news/" + id);
  return res.data;
};

const newsService = {
  getAll,
  getAllArchive,
  archiveNews,
  removeNews
};

export default newsService;
