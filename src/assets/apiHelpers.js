import axios from "axios";

const url = import.meta.env.VITE_SHOPFLOW_API;

const axiosApi = axios.create({
  baseURL: url,
});

export const getResource = async (path) => {
  try {
    const res = await axiosApi.get(`/${path}`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const postResource = async (body) => {
  try {
    const res = await axiosApi.post(`/${'notes'}`, body);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
