import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID -bRUZHJ6VS5HgU9B4EOACnKD7XvmU682oI7UxP2l4to'
  }
})