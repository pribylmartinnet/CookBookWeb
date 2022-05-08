import React from "react"

export default function Pages (props) {
    const [bookCount,setBookCount] = useState(props.bookCount)

  return (
    <div>
      <button onClick={(e) => nextPage()}>Next</button>
    </div>
  )
}

function nextPage()
{
  alert(bookCount)
}

