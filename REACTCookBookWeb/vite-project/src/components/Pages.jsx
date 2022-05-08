import React, { useState, useEffect } from "react"



export default function Pages (props) {
    const [bookCount,setBookCount] = useState(props.bookCount)

    useEffect( async() => {
      //nextPage(bookCount)
      console.log(bookCount)
  }, [])

  return (
    <div>
      <button onClick={(e) => nextPage(bookCount)}>Next</button>
    </div>
  )
}


function nextPage(bookCount)
{
  alert(bookCount)
}

