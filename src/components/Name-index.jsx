import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function NamesList ({events}) {
    const [event, setEvent] = useState ([])

    const names = events.map((event) => <h2 key={event._id}>{event.people.forEach((e)=> {return `${e.name}`} )} </h2>)
    console.log (names)

    return (
        <div>
            <h1>List of Names</h1>
            {names}
        </div>
        
    )
}