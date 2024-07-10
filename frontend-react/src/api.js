
export const fetchPosts = async (page) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
    const data = await response.json();
    return data;
  };
  