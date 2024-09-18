import './App.css'
import avatarSrc from '/src/assets/misael_avatar.jpg'

function App() {
  return (
    <>
      <div className="card">
        <div className='card-top'>
          <div className='card-top-left'>
            <img className='avatar' src={avatarSrc} alt="avatar picture of Misael smiling" width="64px"/>
          </div>
          <div className='card-top-right'>
            <p className='name'>Misael</p>
            <p className='name'>Braga</p>
          </div>
        </div>
        <div className='card-bot'>
          <p className="subname typewriter">
            Software Developer
          </p>
        </div>
      </div>
    </>
  )
}

export default App
