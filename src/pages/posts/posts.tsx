import { Post } from "../../types"
import "./posts.css"
import fetch from "cross-fetch"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"

function Posts() {
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery(["POSTS"], () =>
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    )
  )

  if (isLoading) return <>Loading...</>
  if (error instanceof Error) return <>An error has occurred {error.message}</>

  return (
    <div className="App">
      <h1>Onset</h1>
      <p>
        This page loads example post data from{" "}
        <a href="https://jsonplaceholder.typicode.com/">jsonplaceholder</a> and
        is cached by react-query. During tests, this api call is mocked my MSW.
      </p>
      <p>
        <Link to="/">Back to main</Link>
      </p>
      <hr />
      {posts.map((post: Post) => (
        <div className="post" key={post.id}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts
