npx create-react-app ohcs-dashboard
cd ohcs-dashboard
npm install --save gh-pages
git init
git add .
git commit -m "OHCS dashboard"
git remote add origin https://github.com/smithengineering1/ohcs-dashboard.git
git push -u origin main
npm run deploy
npm run build
npm run deploy
import React from "react";
import Dashboard from "./components/Dashboard";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>OHCS Vendor Certification Dashboard</h1>
        <p>Mixed-Signal Finite State Controller (MS-FSC)</p>
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
