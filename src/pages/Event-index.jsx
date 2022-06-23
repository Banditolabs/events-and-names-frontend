import EventsList from '../components/Event-index'
import ControlBar from '../components/Controlbar'

export default function AllEvents ({events, setShowEvent, getEvents,  }) {
    return (
        <div>
        <EventsList events={events} setShowEvent={setShowEvent}  />
        <ControlBar />
        </div>
        
    )
}