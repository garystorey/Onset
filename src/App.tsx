import { useEffect, useState } from "react";
import fetch from "cross-fetch";
import "./App.css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts as Post[]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const to = setTimeout(() => {
      fetchPosts();
      return () => clearTimeout(to);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      {isLoading && <span aria-label="loading">Loading...</span>}
      <ul>
        {posts &&
          posts.length > 0 &&
          posts.map((post) => <li key={post.id}>{post.title ?? ""}</li>)}
      </ul>
    </div>
  );
}

export default App;
