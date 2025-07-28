import React from 'react';
import AppRoutes from './routes/AppRoutes';
import './index.css'; // Import global styles

function App() {
  return (
    <div className="App">
      <AppRoutes /> {/* Render the routing component */}
    </div>
  );
}

export default App;