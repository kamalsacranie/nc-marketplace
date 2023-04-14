import axios from "axios";
const api = axios.create({
  baseURL: "https://nc-marketplace-sem-2.onrender.com/api",
});

export const getCategories = () => {
  return api.get("/categories").then(({ data }) => data.categories);
};

export const getItems = (category) => {
  return api
    .get("/items", {
      params: {
        category_name: category,
      },
    })
    .then(({ data }) => data.items);
};

export function postItem(item) {
  return api.post("/items", item);
}

export function getUsers() {
  return api.get("/users").then(({ data }) => data.users);
}