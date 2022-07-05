import './featured.scss'

type Props = {
  type: string;
}
const Featured: React.FC<Props> = ({type}) => {
  return (
    <div className='featured'>
      {
        type &&
        <div className="type">
          <span>{type}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="xci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      }
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
      <div className="featured-about">
        <img src="https://upload.wikimedia.org/wikipedia/fr/d/d1/Logo_Matrix_Resurrections.png" alt="" />
        <span className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam numquam laudantium obcaecati neque, debitis, voluptatem quam sapiente odio facere, facilis atque! Vero provident ducimus accusantium quod tenetur nobis reprehenderit cumque!
        </span>
        <div className="buttons">
          <button className='play'>
            <i className="fa-solid fa-play"></i>
            <span>
              Play
            </span>
          </button>
          <button className='info'>
            <i className="fa-solid fa-circle-info"></i>
            <span>
              Info
            </span>
          </button>
        </div>
    
      </div>
    </div>
  )
}

export default Featured