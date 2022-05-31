import React, { useState } from 'react'

const SulaimanTodo = () => {

  const[inputdata,setInputData]=useState("")
  const[items,setItems]=useState([])
//add items function
  const additem=()=>{
    if (!inputdata) {
      alert("please fill out this")
      
    }
    else{
      const MyInputData={
        id:new Date().getTime().toString(),
        name:inputdata
      }
      setItems([...items, MyInputData]);
      setInputData("")
    }
  }


//delete items
  const delteItem=(index)=>{
    const myDelete = items.filter((elem)=>{
      return elem.id !== index;
      
    })
    setItems(myDelete)
  }

  //remove all items
const removeAll=()=>{
  setItems([])
}



  return (
    <div>
{/* ================code starts here======================== */}
        <div style={{borderRadius:"20px"}} className='container my-5 pt-5 bg-light'>
            <h1 className='text-center'>TODO-LIST✍️</h1>
            <hr className='mx-auto w-25' style={{height:"15px",}}></hr>

            <div className='row pt-5'>
                <div className='col-md-3 col-lg-3 col-12 col-xxl-3 col-12 mx-auto'>
                    <figure><img src='./images/note.png' className='img-fluid mx-auto d-block' style={{height:"200px"}}/></figure>
                    <figcaption className='text-center' style={{marginTop:"-28spx"}}>ADD YOUR LIST HERE😎 </figcaption>
                    {/* =========input================ */}

                    <div className='d-flex '>
                    <input className='form-control' onChange={(event)=>{setInputData(event.target.value)}} value={inputdata} type="text" placeholder='📝Add item...'></input>
                    <button className='btn btn-outline-dark' onClick={additem} style={{float:"right" ,border:"none"}}>➕</button>
                    </div>
                    {/* =========input end================ */}

{items.map((elem)=>{
  return (
    
    <div className='d-flex justify-content-around  shadow p-1 mb-3 my-2 bg-body rounded' id={elem.id}>
                      
    <h6 className='my-auto'>{elem.name}</h6>
    <button className='btn btn-outline-dark' style={{float:"right" ,border:"none",fontSize:"25px", color:"green"}}><i className="bi bi-pencil-square"></i></button>
    <button  onClick={()=>{delteItem(elem.id)}} className='btn btn-outline-dark' style={{border:"none",fontSize:"25px", color:"red"}}><i className="bi bi-trash3"></i></button>
  

  </div>
  )
})}

                    <button onClick={removeAll} className='btn btn-outline-dark mx-auto d-block my-5' style={{}}>Check list</button>
                    

                </div>
            </div>

        </div>

    </div>
  )
}

export default SulaimanTodo