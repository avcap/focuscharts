import React from 'react';
import TradingViewChart from './components/TradingViewChart';

function App() {
  return (
    <div className="App" style={{ background: '#181a20', minHeight: '100vh', color: '#fff' }}>
      <h1>FocusCharts Prototype</h1>
      <TradingViewChart />
    </div>
  );
}

export default App;
