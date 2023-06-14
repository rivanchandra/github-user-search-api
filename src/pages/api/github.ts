import axios from 'axios';

interface Users {
  id:number;
  login: string;
}

export const fetchUser = async (data:string) => {
  try {
    const response = await axios.get<{ items: Users[] }>(`https://api.github.com/search/users?q=${data}&per_page=5`);
    return(response.data.items);
  } catch (error) {
    console.error('Error:', error);
  }
};