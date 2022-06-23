import NamesList from '../components/Name-index'
import ControlBar from '../components/Controlbar'

export default function ListNames ({events}) {

    return (
        <div>
        <NamesList events={events}/>
        <ControlBar />
        </div>
        
    )
}