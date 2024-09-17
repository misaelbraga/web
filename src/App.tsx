import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <div className='card-top'>
          <div className='card-top-left'>
            <img className='avatar' src="/src/assets/misael_avatar.jpg" alt="" width="64px" srcset="" />
          </div>
          <div className='card-top-right'>
            <p className='name'>Misael</p>
            <p className='name'>Braga</p>
          </div>
        </div>
        <div className='card-bot'>
          <p className="subname">
            Software Developer<span className='blink'>|</span>
          </p>
        </div>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </div>
    </>
  )
}

export default App
