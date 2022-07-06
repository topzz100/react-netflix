import './listItem.scss'

const ListItem = () => {
  return (
    <div className='listItem'>
        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60" alt="" />
        <div className="more">

          <div className="icons">
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-plus"></i>
            <i className="fa-solid fa-thumbs-up"></i>
            <i className="fa-solid fa-thumbs-down"></i>
          </div>
          <div className="info">
            <span>1 hour 14 mins</span>
            <span>+16</span>
            <span>2019</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque omnis architecto, hic officiis natus sapiente autem in dolore quia.</p>
          <p className="genre">Action</p>
        </div>

    </div>
  )
}

export default ListItem