import './App.css'

function App() {
  return (
    <>
      <div className="card">
        <div className='card-top'>
          <div className='card-top-left'>
            <img className='avatar' src="/src/assets/misael_avatar.jpg" alt="avatar showing picture of Misael smiling, an white man with short curly hair and wearing silver glasses and a black t-shirt" width="64px"/>
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
