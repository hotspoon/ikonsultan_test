import React, { useState, useEffect, useRef } from "react"
import "./App.css"
import axios from "axios"
import { Link } from "react-router-dom"

function App() {
  const [data, setData] = useState([])
  const searchRef = useRef()
  const [inputResult, setInputResult] = useState()

  useEffect(() => {
    async function getData() {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setData(response.data)
    }
    getData()
  }, [])

  async function onSearchTitle() {
    console.log(searchRef.current.value)
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${searchRef.current.value}`
    )
    const result = response.data
    setInputResult(result)
  }

  return (
    <>
      <div className="container h-screen px-4 py-4 mx-auto">
        <div className="flex gap-4 mb-4 flex-column">
          <input type="text" ref={searchRef} />
          <button className="btn" onClick={onSearchTitle}>
            Cari
          </button>
        </div>

        <div>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <Link to={`/posts/${item.id}`}>
                <p key={item.id}>
                  {item.id} - {item.title}
                </p>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
}

export default App

// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// },
