import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newPerson) => {
  const request = axios.post("http://localhost:3001/persons", newPerson);
  return request.then((response) => response.data);
};

const update = () => {};

export default { getAll, create, update };
