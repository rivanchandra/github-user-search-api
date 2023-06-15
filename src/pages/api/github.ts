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

interface Repository {
  id: number;
  name: string;
  description:string;
  stargazers_count:number;
}

export const fetchRepos = async (data:string) => {
  try {
    const response = await axios.get<Repository[]>(`https://api.github.com/users/${data}/repos`);
    return(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};