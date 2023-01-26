import axios from "axios";

 const BASE_URL2 = "https://youtube-v31.p.rapidapi.com" 

const options = {
//   url: process.env.BASE_URL,
  url: BASE_URL2,
  params: { maxResults: '50'},
  headers: {
    // "X-RapidAPI-Key": process.env.API_KEY,
    'X-RapidAPI-Key': '2a836d9dcamsh8bf9be7ab4e542fp13d75fjsn2698d6553560',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};

export async function fetchFromApi(url) {
    // const { data } =  await axios.get(`${process.env.BASE_URL}/${url}`,options)
    const { data } =  await axios.get(`${BASE_URL2}/${url}`,options)
    return data;
}
