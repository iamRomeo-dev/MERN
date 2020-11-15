import http from "../http-common";

const getAll = () => {
  return http.get("/mvts");
};

const get = id => {
  return http.get(`/mvts/${id}`);
};

const create = data => {
  return http.post("/mvts", data);
};

const update = (id, data) => {
  return http.put(`/mvts/${id}`, data);
};

const remove = id => {
  return http.delete(`/mvts/${id}`);
};

const findByTitle = title => {
  return http.get(`/mvts?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByTitle
};
