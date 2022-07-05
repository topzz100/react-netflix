import './list.scss'
import ListItem from '../listItem/ListItem'

const List = () => {
  return (
    <div className='list'>
      <h4>Continue to watch</h4>
      <div className="container">

        <div className="wrapper">
          <div className="listItem">
            <ListItem/>
          </div>
          <div className="listItem">
            <ListItem/>
          </div>
          <div className="listItem">
            <ListItem/>
          </div>
          <div className="listItem">
            <ListItem/>
          </div>
          <div className="listItem">
            <ListItem/>
          </div>
          <div className="listItem">
            <ListItem/>
          </div>
          <div className="listItem">
            <ListItem/>
          </div>
          <div className="listItem">
            <ListItem/>
          </div>
          <div className="listItem">
            <ListItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List