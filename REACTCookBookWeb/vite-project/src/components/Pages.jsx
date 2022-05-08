import React from "react"

export default function Pages () {

  return (
    <div>
      <button onClick={(e) => nextPage()}>Next</button>
    </div>
  )
}


function nextPage()
{
  alert("Cau buchto !")
}

