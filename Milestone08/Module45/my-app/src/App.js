import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'kooper']
  return (
    <div className="App">
      <ul>
        <li>{nayoks[0]}</li>
        <li>{nayoks[1]}</li>
        <li>{nayoks[2]}</li>
        <li></li>
      </ul>
      <Person name={nayoks[0]} nakiya="Moushumi"></Person>
      <Person name={nayoks[1]} nakiya="Purnima"></Person>
      <Person name={nayoks[2]} nakiya="Kopila"></Person>
    </div>
  );
}

/* <p id="title">Title</p>
 <Friend phone="01800" address="Nowakhali"></Friend>
      <Friend phone="01799" address="Syleht"></Friend>
      <Friend phone="01588" address="jessore"></Friend>
      <Friend phone="01799" address="Dhaka"></Friend>
     */

function Person(props) {
  console.log(props)
  const Person = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    margin: '20px',
    borderRadius: '20px'
  }
  return (
    <div style={Person}>
      <h1>Name: {props.name}</h1>
      <h4>Hero of: {props.nakiya}</h4>
    </div>
  );
}

function Friend(props) {
  console.log(props)
  return (
    <div className="Person">
      <h3>Phone: {props.phone}</h3>
      <h3>Address: {props.address}</h3>
    </div>
  );
}

export default App;
/*
 <Person name="Bubel" nakiya="Moushumi"></Person>
      <Person name="BappaRaz" nakiya="Purnima"></Person>
      <Person name="Kooper" nakiya="Kopila"></Person>

*/