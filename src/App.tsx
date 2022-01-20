import React from 'react';
import GlobalCalendar from './GlobalCalendar';

function App() {
  return (
    <div className="min-h-screen bg-zinc-800 text-zinc-200">
      <h1 className="text-3xl font-bold text-center py-6">
        Booking App
      </h1>
      <GlobalCalendar />
    </div>
  );
}

export default App;
