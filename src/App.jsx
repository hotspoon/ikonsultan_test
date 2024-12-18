import React, { useState, useEffect, useRef } from "react"
import "./App.css"
import axios from "axios"
import { Link } from "react-router-dom"

function App() {
  const [data, setData] = useState([])
  const searchRef = useRef()
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setData(response.data)
      setFilteredData(response.data)
    }
    getData()
  }, [])

  function onSearchTitle() {
    const searchValue = searchRef.current.value.toLowerCase()
    const filtered = data.filter((item) => item.title.toLowerCase().includes(searchValue))
    setFilteredData(filtered)
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
          {filteredData.map((item) => (
            <React.Fragment key={item.id}>
              <Link to={`/posts/${item.id}`}>
                <p>
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
