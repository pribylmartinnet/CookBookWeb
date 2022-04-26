import React, { useState } from "react"
import axios from "axios"

const UploadAndDisplayImage = (props) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [topic, setTopic] = useState(props.topic)
  const [id, setId] = useState(props.id)


  return (
    <div>
      <h1>{topic}</h1>
      {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          savePicture(id, URL.createObjectURL(event.target.files[0]))
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

async function savePicture(id, picture) {
  axios.post('http://localhost:8080/topic/picture', {
      id: id,
      picture: picture
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
} 


export default UploadAndDisplayImage;