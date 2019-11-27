import React from 'react';
import './App.css';
const todos = [
  {
    id: 1,
    title: 'Get Milk'
  },
  {
    id: 2, 
    title: 'Go to the store'
  },
  {
    id: 3,
    title: 'Get drivers license'
  }
]
function App() {
  return (
    <div className="App">
      {
        todos.map( t => (
        <div key={t.id}>
            <h2>{t.title}</h2>
          </div>
        ))
      }
    </div>
  );
}
export default App;
