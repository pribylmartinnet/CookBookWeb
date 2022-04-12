import {useEffect, useState} from 'react'
import axios from "axios"


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
            setBooks([...books, topic])
            setInput("")
        }
    }
    
    useEffect( async() => {
        const apiData = await apiSearch()
        setBooks(apiData)
    }, [])
    
    return (
            <div>
                <h1>List of topics:</h1>
                <input type="text" placeholder="Enter topic" onChange={(e) => setInput(e.target.value)} value={input} onKeyDown={handlerEnter} ></input>
                <ol>
                    {books.length > 0 && books.map((book, idx) => {
                        return <li key={idx}>{ book.topic }</li>
                    })}
                </ol>
            </div>
        )

}

async function apiSearch() {
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