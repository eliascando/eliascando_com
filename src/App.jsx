import React from 'react'
import Nav from './layout/Nav'
import Content from './layout/Content'
import './App.css'

function App() {

  const [location, setLocation] = React.useState('about')

  return (
    <div className="App">
      <Nav 
        location={location}
        setLocation={setLocation}
      />
      <Content
        location={location}
        setLocation={setLocation}
      /> 
    </div>
  )
}

export default App
