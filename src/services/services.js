const base = "http://worldtimeapi.org/api/timezone";

const getCountries = base;
const getcurrentTime = (id) => `${base}/${id}`;
const getUsers = "https://jsonplaceholder.typicode.com/users";
const getPosts = "https://jsonplaceholder.typicode.com/posts";

export default {
  getCountries,
  getcurrentTime,
  getUsers,
  getPosts,
};
