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

export const postResource = async (queryObj) => {
  const { path, body } = queryObj;
  try {
    const response = await axiosApi.post(`/${path}`, body);
    return response.data;
  } catch (err) {
    alert(err);
    console.error(err);
  }
}

export const patchResource = async (queryObj) => {
  const { path, body } = queryObj;
  try {
    const response = await axiosApi.patch(`/${path}`, body);
    return response.data;
  } catch (err) {
    alert(err);
    console.error(err);
  }
}

export const putResource = async (queryObj) => {
  const { path, body } = queryObj;
  try {
    const response = await axiosApi.put(`/${path}`, body);
    return response.data;
  } catch (err) {
    alert(err);
    console.error(err);
  }
}

export const deleteResource = async (queryObj) => {
  const { path, id } = queryObj;
  try {
    const response = await axiosApi.delete(`/${path}/${id}`);
    return response.data;
  } catch (err) {
    alert(err);
    console.error(err);
  }
}
