import React, { useState, useEffect } from 'react'
import './App.css';
import PdfTemplate from './PDF/Template'

function App() {
  const [Dates, setDates] = useState('');
  let newDate = new Date()
  let date = newDate.getDate();

  useEffect(() => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    console.log(`Date is ${date}`);
    setDates(date)
  }, [])

  return (
    <>
      <PdfTemplate date={Dates} />
    </>
  );
}


export default App;
