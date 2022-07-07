import { Post } from "../../types";
import "./posts.css";
import fetch from "cross-fetch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((posts) => {
          setPosts(posts as Post[]);
          setIsLoading(false);
        });
    };
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>Onset</h1>
      <p>
        This page loads example post data from{" "}
        <a href="https://jsonplaceholder.typicode.com/">jsonplaceholder</a>.
        During tests, this api call is mocked my msw.
      </p>
      <p>
        <Link to="/">Back to main</Link>
      </p>
      <hr />
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

export default Posts;
