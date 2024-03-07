import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = async (page = 1, limit = 10) => {
  const response = await axios.get(baseUrl, {
    params: {
      _limit: limit,
      _page: page
    }
  })
  return response
}
