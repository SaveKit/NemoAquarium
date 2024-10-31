<div className="App">
<header className="App-header">
<div className="app">
      <h1>NEMO PROJECT</h1>
      <div className="content">
        <div className="section">
          <h2>NEMO's HOUSE</h2>
          <img
            src="https://www.rollingstone.com/wp-content/uploads/2023/05/Finding-Nemo-Anniversary.jpg?w=1581&h=1054&crop=1.jpg"
            alt="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
            className="nemo-image"
          />
        </div>
        <div className="section">
          <h2>Nom Nom Timer (countdown)</h2>
          <div className="timer">{formatTime(timer)}</div>
        </div>
        <div className="controls">
          <div className="control">
            <h3>LIGHT</h3>
            <button onClick={toggleLight} className={`toggle ${lightOn ? 'on' : 'off'}`}>
              {lightOn ? 'On' : 'Off'}
            </button>
          </div>
          <div className="control">
            <h3>PUMP</h3>
            <button onClick={togglePump} className={`toggle ${pumpOn ? 'on' : 'off'}`}>
              {pumpOn ? 'On' : 'Off'}
            </button>
          </div>
        </div>
      </div>
      <div className="data-section">
        <h2>DATA</h2>
        {/* {data} */}
      </div>
    </div>
</header>
</div>