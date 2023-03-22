import axios from "axios";

const API_KEY = "AIzaSyDdoSl4WiUAWleS3CXSMSZ-MgjRjwN1ZXg";
const basicURL = "https://www.googleapis.com/books/v1/volumes";
const pageSize = "30";
export const searchBooksAPI = (search, startIndex, orderBy, subject) => {
  return axios.get(
    `${basicURL}?q=` +
      search +
      `+subject:${subject}&key=${API_KEY}&maxResults=${pageSize}&startIndex=${startIndex}&orderBy=${orderBy}`
  );
};
export const showFullInfoAPI = (bookId) => {
  return axios.get(`${basicURL}/${bookId}?key=${API_KEY}`);
};
