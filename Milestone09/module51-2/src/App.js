// import logo from './logo.svg';
import './App.css';
// import { ButtonGroup, Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import News from './component/News/News';
function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-27&sortBy=publishedAt&apiKey=fc0a8994838a4d2597d9a2a62790873d')
      .then(res => res.json())
      .then(data => setNews(data.articles));
  }, []);
  return (
    <div className="App">
      {/* {news.length === 0 ? <span>Looding</span> : <span>Done</span> } */}
      {
        news.length === 0 ?
          <Spinner animation="border" />
          :
          <Row xs={1} md={3} className="g-4">
            {
              news.map(nw => <News news={nw}></News>)
            }
          </Row>
      }
    </div>
  );
}
export default App;
