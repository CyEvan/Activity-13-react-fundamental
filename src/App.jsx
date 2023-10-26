import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './Header'
import Footer from './Footer';
import Counter from './Counter';


function App() {

  const [title, setTitle] = useState("Activity 13 React Fundamentals");
  const [copyright, setCopyright] = useState("Copyright 2023 ©️ BASE404. All rights Reserved.");
  const [count, setCounter] = useState(0);



  return (
    <>

    <Header title={title} count={count} />
    <Footer copyright={copyright} />
    <Counter count={count} stateCount={setCounter} />

    </>
  )

}

export default App