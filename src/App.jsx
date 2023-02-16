import { useEffect, useState } from 'react'
import Station from './Station'

function App() {
  const [data, setData] = useState()




  useEffect(() => {
    setTimeout(() => {
      fetch("https://api.sr.se/api/v2/channels?format=json&size=100")
        .then((response) => response.json())
        .then((data) => {
          setData(data)
        });
    }, 5000);

  }, [])

  return (
    <div className="App">
      <div className='w-screen min-h-screen bg-teal-200 flex justify-center items-center py-20'>
        <div className='mx-auto flex gap-10 flex-wrap justify-center'>
          {!data ? <h1>Loading...</h1> : data.channels.map((channel, index) => (
            <Station key={index} text={channel.name} imgSrc={channel.image} color={channel.color}
              audioSource={channel.liveaudio.url} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
