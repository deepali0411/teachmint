import axios from "axios";
import Services from "../services/services";

export const getUsersFromApi = () =>
  axios
    .get(Services.getUsers)
    .then((res) => res.data)
    .catch((err) => console.error(err));
export const getPostsFromApi = () =>
  axios
    .get(Services.getPosts)
    .then((res) => res.data)
    .catch((err) => console.error(err));
export const getCountriesFromApi = () =>
  axios
    .get(Services.getCountries)
    .then((res) => res.data)
    .catch((err) => console.error(err));
export const getCurrentTimeFromApi = (id) =>
  axios
    .get(Services.getcurrentTime(id))
    .then((res) => res.data)
    .catch((err) => console.error(err));
