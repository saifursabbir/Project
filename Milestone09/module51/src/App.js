import './App.css';
import Cart from './component/Cart/Cart';

function App() {
  const items = [
    { name: 'first item', des: 'jasfhjhjfhsajhfjashfhasjfhf', img: 'https://media-eng.dhakatribune.com/uploads/2020/02/february-21-shaheed-minar-1-1582262600626.jpg' },
    { name: 'first item', des: 'jasfhjhjfhsajhfjashfhasjfhf', img: 'https://media-eng.dhakatribune.com/uploads/2020/02/february-21-shaheed-minar-1-1582262600626.jpg' },
    { name: 'first item', des: 'jasfhjhjfhsajhfjashfhasjfhf', img: 'https://media-eng.dhakatribune.com/uploads/2020/02/february-21-shaheed-minar-1-1582262600626.jpg' },
    { name: 'first item', des: 'jasfhjhjfhsajhfjashfhasjfhf', img: 'https://media-eng.dhakatribune.com/uploads/2020/02/february-21-shaheed-minar-1-1582262600626.jpg' },
    { name: 'first item', des: 'jasfhjhjfhsajhfjashfhasjfhf', img: 'https://media-eng.dhakatribune.com/uploads/2020/02/february-21-shaheed-minar-1-1582262600626.jpg' },
    { name: 'first item', des: 'jasfhjhjfhsajhfjashfhasjfhf', img: 'https://media-eng.dhakatribune.com/uploads/2020/02/february-21-shaheed-minar-1-1582262600626.jpg' },
    { name: 'first item', des: 'jasfhjhjfhsajhfjashfhasjfhf', img: 'https://media-eng.dhakatribune.com/uploads/2020/02/february-21-shaheed-minar-1-1582262600626.jpg' },
  ]
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {
        items.map(item => <Cart
          item={item}
        ></Cart>)
      }
    </div>
  );
}
export default App;
