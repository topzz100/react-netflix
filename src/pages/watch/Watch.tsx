import './watch.scss'

const Watch = () => {
  return (
    <div className='watch'>
      <div className="top">
        <i className="fa-solid fa-arrow-left"></i>
        <span>Home</span>
      </div>
      <video src="/assets/dance.mp4" autoPlay controls />
    </div>
  )
}

export default Watch