import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users/",
});

export const usersAPI = {
  getUsers() {
    return instance.get().then((response) => response.data); //Возможно, нужно написать response.json
  },
  getUser(userId) {
    return instance.get(`${userId}`).then((response) => response.data);
  },
};
