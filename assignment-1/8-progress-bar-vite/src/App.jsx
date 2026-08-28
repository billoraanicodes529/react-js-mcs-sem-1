import React, { useState, useEffect } from 'react'
import ProgressBar from './components/progress-bar'
import './App.css'

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 10: 100));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='App'>
      <h3>Loading The Page</h3>
      <ProgressBar progress={progress}/>
    </div>
  )
}

export default App
