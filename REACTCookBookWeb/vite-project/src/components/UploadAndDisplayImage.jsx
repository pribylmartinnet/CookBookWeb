import React, { useState, useEffect } from "react"
import axios from "axios"

  const UploadAndDisplayImage = (props) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [topic, setTopic] = useState(props.topic)
  const [id, setId] = useState(props.idTopic)
  
  useEffect(async()=>{
    
    await loadPicture(id,setSelectedImage)
  },[])

  return (
    <div>
      {selectedImage && (
        <div>
        <img alt="image" width={"250px"} src={selectedImage} />
        <br />
        <button onClick={()=>deletePicture(id, setSelectedImage)}>Remove</button>
        </div>
      )}
      <br /> 
      { !selectedImage && (
        <input id="picture-input"
          type="file"
          name="myImage"
          onChange={(event) => {savePicture(id, event.target.files[0], setSelectedImage )}    
        }/>
      )}
    </div>
  )
}

async function savePicture(id, file, stateFunc) {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function () {
    axios.post('http://localhost:8080/topic/picture', {
      id: id,
      picture: reader.result
    })
    .then((response) => {
      stateFunc(reader.result)
    }, (error) => {
      alert("obrázek není možné nahrát: "+error)
    })
  }
}


async function loadPicture(id,stateFunc) {
  axios.get("http://localhost:8080/topic/picture/" + id)
  .then((response) => {
    stateFunc(response.data)
  })
  
}

function deletePicture(id, stateFunc){
  axios.delete("http://localhost:8080/topic/picture/" + id)
  .then((response) => {
    stateFunc(null)
  }, (error) => {
      console.log(error)
  })
  
}


export default UploadAndDisplayImage;