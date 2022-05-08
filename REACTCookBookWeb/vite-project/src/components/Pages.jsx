import React from "react"

export default function Pages (props) {
    const [bookCount,setBookCount] = useState(props.bookCount)

  return (
    <div>
      <button onClick={(e) => nextPage()}>Delete Row</button>
    </div>
  )
}

function nextPage()
{
  alert(bookCount)
}

