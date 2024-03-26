import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'ba0e23ad660a4b85a64e479662fa1fb7'
  }
})