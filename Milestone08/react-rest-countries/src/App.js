import './App.css';
import Countries from './componets/Countries/Countries';



function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}















// function Countries() {

//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v2/all')
//       .then(res => res.json())
//       .then(data => setCountries(data));
//   }, [])

//   return (
//     <div>
//       <h2>Traceling around the world</h2>
//       <h4>Countrise Available: {countries.length}</h4>
//       {
//         countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h2>Nmae: {props.name}</h2>
//       <p>Capital: {props.capital}</p>
//     </div>
//   )
// }

export default App;
