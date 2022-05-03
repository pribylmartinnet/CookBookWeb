import React, { useState, useEffect } from "react"
import axios from "axios"

  const UploadAndDisplayImage = (props) => {
  const [topic, setTopic] = useState(props.topic)
  const [id, setId] = useState(props.id)
  const [selectedImage, setSelectedImage] = useState(null)
  
  useEffect(async()=> {
      const picture = await getPicture(id)  
      setSelectedImage(picture)
  }, [])

  return (
    <div>
      {selectedImage && (
        <div>
        <button onClick={()=>deletePicture(id, setSelectedImage)}>Remove</button>
        <br />
        <img alt="img" width={"250px"} src={selectedImage} />
        </div>
      )}
      <br />
     
      <br /> 
      {!selectedImage && ( 
        <input
          type="file"
          name="myImage"
          onChange={(event) => {savePicture(id, event.target.files[0], setSelectedImage)}
          }
        />
      )}

    </div>

  )
}


function savePicture(id, file, stateFunc) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () { 
    axios.post('http://localhost:8080/topic/picture', {
      id: id,
      picture: reader.result
    })
    .then((response) => {
      console.log(reader.result)
      stateFunc(reader.result)
    }, (error) => {
      console.log(error);
    })
    
  }
  reader.onerror = function (error) {
    console.log('Error: ', error);
  }
}

function deletePicture(id, stateFunc) {
  axios.delete('http://localhost:8080/topic/picture/' + id)
    .then((response) => {
      stateFunc(null)
      console.log(response)
    }, (error) => {
      console.log(error);
    })
  

}

async function getPicture(id) {
  const data = await axios.get('http://localhost:8080/topic/picture/' + id)
  console.log(data.data)
  return data.data
  
}


export default UploadAndDisplayImage;