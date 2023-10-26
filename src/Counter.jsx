import CountDisplay from "./CountDisplay";

function Counter ({count, stateCount}) {
  
  return(
    <>

    <div className="container text-center mt-5">
      <div className="card">
        <div className="card-body shadow ">
        <CountDisplay count={count} />
        <div className="my-5">

           <button className="btn btn-lg btn-dark ms-2 fw-bold shadow-lg" onClick={ () => stateCount(count + 1) } > Increment  </button>
           <button className="btn btn-lg btn dark ms-2 fw-bold shadow-lg" onClick={ () => stateCount(count - 1)} disabled={count <= 0} > Decrement </button>
    
         </div>
        </div>
      </div> 
    </div>
    
    </>
    
  )
}

export default Counter;