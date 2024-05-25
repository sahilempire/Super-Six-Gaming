import React from 'react';
import Upload from './components/Upload';
import DataTable from './components/DataTable';
import PricingCalculator from './components/PricingCalculator';

function App() {
  return (
    <div className="App">
      <Upload />
      <DataTable />
      <PricingCalculator />
    </div>
  );
}

export default App;
