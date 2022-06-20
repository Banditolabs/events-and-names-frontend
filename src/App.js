
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import CreateEvent from './pages/Event-creation'
import IndexEvents from './pages/Event-index'
import CreateName from './pages/Name-creation'
import IndexNames from './pages/Name-index'


function App() {
  const [events, setEvents] = useState(null)
  const [names, setNames] = useState(null)

  const URL = "http://localhost:3004/"

  // indexEvent
  const getEvents = async () => {
    const data = await fetch(URL).then(res => res.json())
    setEvents(data)
  }

  // CreateEvent
  const createEvent = async (event) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(event)
    })
    getEvents()
  }

  // UpdateEvent
  const updateEvent = async (event, id) => {
    fetch(URL +id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(event)
    })
    getEvents()
  }

  const deleteEvent = async (id) => {
    await fetch(URL + id, {
      method: "DELETE"
    })
    getEvents()
  }
  useEffect(() => {getEvents()}, [])
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/events/new/' element={<CreateEvent/>}></Route>
          <Route path='/events/' element={<IndexEvents/>}></Route>
          <Route path='/events/:id/names/new/' element={<CreateName/>}></Route>
          <Route path='/events/:id/names/' element={<IndexNames/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
