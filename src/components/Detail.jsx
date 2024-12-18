import React from "react"

const detailData = {
  userId: 1,
  id: 1,
  title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
function Detail() {
  return (
    <>
      <div className="card">
        {detailData && (
          <>
            <p>{detailData.userId}</p>
            <p>{detailData.id}</p>
            <p>{detailData.title}</p>
            <p>{detailData.body}</p>
          </>
        )}
      </div>
    </>
  )
}

export default Detail
