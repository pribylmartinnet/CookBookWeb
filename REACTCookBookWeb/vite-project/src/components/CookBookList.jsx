import {useEffect, useState} from 'react'
import axios from "axios"
import UploadAndDisplayImage from './UploadAndDisplayImage'
import Pages from './Pages'
import './CookBookList.css'


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
                        return (
                        <div key={idx} id="content">                                                         
                            <div>{ book.topic }</div>
                            <div id="grid">
                                <div id="img">
                                    <UploadAndDisplayImage  topic={book.topic} idTopic={book._id} />
                                </div>
                                <div id="description">
                                    <div id="text">{book.description}</div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                    
                </div>
                
                <div>
                    <button onClick={(e) => nextPage(books.length,setBooks,books)}>Next</button>
                </div>
            </div>
        )

}

async function nextPage(bookCount,setFnc,books)
{
    const data = await axios.get('http://localhost:8080/topic/list/'+bookCount)
    setFnc([...books,...data.data])
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