import './NavBar.css';
import checkout from '../assets/checkout.png';

function NavBar(props) {
  let title = "Mentored Class Shopping <3";

  function checkoutItems() {
    alert("You broke lmao");
  }

  return (
    <div className="NavBar">
        <img className="checkout" src={checkout} alt="joe_mama" onClick={checkoutItems}></img>
        <div className="title" onClick={props.func}>{title}</div>
    </div>
  );
}

export default NavBar;
