import http from "../http-common";

const getAll = () => {
  return http.get("/wods");
};

const get = id => {
  return http.get(`/wods/${id}`);
};

const create = data => {
  return http.post("/wods", data);
};

const update = (id, data) => {
  return http.put(`/wods/${id}`, data);
};

const remove = id => {
  return http.delete(`/wods/${id}`);
};

const findByTitle = title => {
  return http.get(`/wods?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByTitle
};
