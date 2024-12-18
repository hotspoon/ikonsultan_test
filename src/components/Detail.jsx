import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function Detail() {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const data = await response.json()
      setPost(data)
    }
    fetchPost()
  }, [id])

  if (!post) return <div className="container p-4 mx-auto">Loading...</div>

  return (
    <div className="container p-4 mx-auto">
      <h1>Post Detail</h1>
      <p>User ID:{post.userId}</p>
      <p>ID:{post.id}</p>
      <p>Title:{post.title}</p>
      <p>Body:{post.body}</p>
      <Link to="/">Back to List</Link>
    </div>
  )
}

export default Detail
