import './ItemBox.css';
import "../assets/Comic_Sans.woff";

function ItemBox(props) {
  return (
    <div className="ItemBox">
      <img className="pic" src={props.img} alt={props.name}/>
      <span className='name'>{props.name}</span>
      <div className='description'>{props.description}</div>
    </div>
  );
}

export default ItemBox;
