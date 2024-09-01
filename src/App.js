import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>First React App</p>
        <form>
          <label>Enter your name:
            <input type="text" placeholder='name'/>
          </label><br></br>
          <label>Enter your Employee Id:
            <input type="text" placeholder='id'/>
          </label><br></br>
          <label>Enter your Base Location:
            <input type="text" placeholder='location'/>
          </label>
        </form>
      </header>
    </div>
  );
}

export default App;
