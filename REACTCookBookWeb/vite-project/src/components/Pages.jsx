import React from "react"

export default function Pages () {

  return (
    <div>
      <button onClick={(e) => nextPage()}>Delete Row</button>
    </div>
  )
}


function nextPage()
{
  alert("Cau buchto !")
}

