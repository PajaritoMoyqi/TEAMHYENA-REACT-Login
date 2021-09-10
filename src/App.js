import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          <h1>Login Mini Project</h1>
        </header>
        <section className="App-section">
          <div className="input-box">
            <label>User Name</label>
            <input name="housename" type="text" placeholder="User Name" required autofocus />
            <label>Password</label>
            <input name="password" type="password" placeholder="Password" required />
            <input type="button" value="Login" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
