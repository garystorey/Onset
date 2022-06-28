import "./App.css";
import fetch from "cross-fetch";
import { useEffect, useState } from "react";

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
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>Onset</h1>
      {isLoading && <span aria-label="loading">Loading...</span>}
      {posts &&
        posts.length > 0 &&
        posts.map((post) => (
          <div className="post" key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
