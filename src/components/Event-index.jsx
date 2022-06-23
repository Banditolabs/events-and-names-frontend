
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

export default function EventIndex ({events, setShowEvent}) {
    let navigate = useNavigate();
    
    const handleClick = (event) => {
      navigate(`/events/${event._id}/names`);
    };

    
    const titles = events.map((event) => <h2 onClick={() => handleClick(event)} key={event._id}>{event.title}</h2>)
    
    return (
        <div>
            <h1>All events go here</h1>
            {titles}
            
        </div>
    )
}