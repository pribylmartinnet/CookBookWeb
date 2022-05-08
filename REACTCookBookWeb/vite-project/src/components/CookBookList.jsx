import {useEffect, useState} from 'react'
import axios from "axios"
import UploadAndDisplayImage from './UploadAndDisplayImage'
import Pages from './Pages'



export default function CookBookList () {

    const [books, setBooks] = useState([])
    const [input, setInput] = useState("")
    
    const handlerEnter = (e) => {
        if(e.key === "Enter" ) {
            let topic = {
                topic: input,
                description: ""
            }
            createTopic(topic)
            //findTopic(topic)
            setBooks([...books, topic])
            setInput("")
        }
    }
    
    useEffect( async() => {
        const topics = await getTopics()
        setBooks(topics)
    }, [])
    
    return (
            <div>
                <h1>List of topics:</h1>
                <input type="text" placeholder="Enter topic" onChange={(e) => setInput(e.target.value)} value={input} onKeyDown={handlerEnter} ></input>
                <div>
                    {books.length > 0 && books.map((book, idx) => {
                        return <div key={idx}><UploadAndDisplayImage topic={book.topic} id={book._id} />{ book.topic }</div>
                    })}
                </div>
                <div>
                    <Pages></Pages>
                </div>
            </div>
        )

}

async function getTopics() {
    const data = await axios.get('http://localhost:8080/topic/list')
    return data.data
} 

async function createTopic(topic) {
    axios.post('http://localhost:8080/topic', {
        topic: topic.topic,
        description: topic.description
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
} 

async function findTopic(topic) {
    axios.post('http://localhost:8080/topic/list', {
        topic: "M"
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
}