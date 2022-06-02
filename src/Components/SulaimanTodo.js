import React, {useState} from 'react'

const SulaimanTodo = () => {

    const [inputdata, setInputData] = useState("")
    const [inputdata2, setInputData2] = useState("")
    const [items, setItems] = useState({todo1: [], todo2: []})

    // add items function
    const additem = (type) => {
        const MyInputData = {
            id: new Date().getTime().toString(),
            name: type === 'todo1' ? inputdata : inputdata2
        }
        console.log('type', type);

        console.log('my input data', MyInputData)
        if (type === 'todo1') {

            setItems({
                todo1: [...items.todo1, MyInputData],
                todo2: [...items.todo2]
            })
        
        
            setInputData("")
        } else {


            setItems({
              
                     todo1: [...items.todo1],
                todo2: [...items.todo2, MyInputData]
                
            })
            setInputData2("")
        }

        console.log('items', items);

      
    }


    // delete items
    const delteItem = (index) => {
        const myDelete = items.filter((elem) => {
            return elem.id !== index;

        })
        setItems(myDelete)
    }

    // remove all items
    const removeAll = () => {
        setItems([])
    }


    return (
        <div> {/* ================code starts here======================== */}
            <div style={
                    {borderRadius: "20px"}
                }
                className='container my-5 pt-5 bg-light'>
                <h1 className='text-center'>TODO-LIST✍️</h1>
                <hr className='mx-auto w-25'
                    style={
                        {height: "15px"}
                }></hr>


                <div className='row'>
                    <div className='col-md-6'>
                        <div className='row pt-5'>
                            <div className='col-md-3 col-lg-3 col-12 col-xxl-3 col-12 mx-auto'>
                                <figure><img src='./images/note.png' className='img-fluid mx-auto d-block'
                                        style={
                                            {height: "200px"}
                                        }/></figure>
                                <figcaption className='text-center'
                                    style={
                                        {marginTop: "-28spx"}
                                }>ADD YOUR LIST HERE Todo 1 😎
                                </figcaption>
                                {/* =========input================ */}

                                <div className='d-flex '>
                                    <input className='form-control'
                                        onChange={
                                            (event1) => {
                                                setInputData(event1.target.value)
                                            }
                                        }
                                        value={inputdata}
                                        type="text"
                                        placeholder='📝 Add item...'></input>
                                <button className='btn btn-outline-dark'
                                    onClick={
                                        () => additem('todo1')
                                    }
                                    style={
                                        {
                                            float: "right",
                                            border: "none"
                                        }
                                }>➕</button>
                            </div>
                            {/* =========input end================ */}
                            
                            {

                
                            
                            items.todo1.map((elem) => {
                                console.log('elem', elem)
                                return (

                               

                                    <div  className='d-flex justify-content-around  shadow p-1 mb-3 my-2 bg-body rounded'
                                        key={
                                            elem.id
                                    }>

                                        <h6 className='my-auto'>
                                            {
                                            elem.name
                                        }</h6>
                                        <button className='btn btn-outline-dark'
                                            style={
                                                {
                                                    float: "right",
                                                    border: "none",
                                                    fontSize: "25px",
                                                    color: "green"
                                                }
                                        }>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button onClick={
                                                () => {
                                                    delteItem(elem.id)
                                                }
                                            }
                                            className='btn btn-outline-dark'
                                            style={
                                                {
                                                    border: "none",
                                                    fontSize: "25px",
                                                    color: "red"
                                                }
                                        }>
                                            <i className="bi bi-trash3"></i>
                                        </button>


                                    </div>
                                )
                            })
                        }

                            <button onClick={removeAll}
                                className='btn btn-outline-dark mx-auto d-block my-5'
                                style={
                                    {}
                            }>Check list</button>


                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='row pt-5'>
                        <div>
                            <figure><img src='./images/note.png' className='img-fluid mx-auto d-block'
                                    style={
                                        {height: "200px"}
                                    }/></figure>
                            <figcaption className='text-center'
                                style={
                                    {marginTop: "-28spx"}
                            }>ADD YOUR LIST HERE Todo 1 😎
                            </figcaption>
                            {/* =========input================ */}

                            <div className='d-flex '>
                                <input className='form-control'
                                    onChange={
                                        (event2) => {
                                            setInputData2(event2.target.value)
                                        }
                                    }
                                    value={inputdata2}
                                    type="text"
                                    placeholder='📝 Add item...'></input>
                            <button className='btn btn-outline-dark'
                                onClick={
                                    () => additem('todo2')
                                }
                                style={
                                    {
                                        float: "right",
                                        border: "none"
                                    }
                            }>➕</button>
                        </div>
                        {/* =========input end================ */}

                        {
                        items.todo2.map((elem) => {
                            return (

                                <div  className='d-flex justify-content-around  shadow p-1 mb-3 my-2 bg-body rounded'
                                    key={
                                        elem.id
                                }>

                                    <h6 className='my-auto'>
                                        {
                                        elem.name
                                    }</h6>
                                    <button className='btn btn-outline-dark'
                                        style={
                                            {
                                                float: "right",
                                                border: "none",
                                                fontSize: "25px",
                                                color: "green"
                                            }
                                    }>
                                        <i className="bi bi-pencil-square"></i>
                                    </button>
                                    <button onClick={
                                            () => {
                                                delteItem(elem.id)
                                            }
                                        }
                                        className='btn btn-outline-dark'
                                        style={
                                            {
                                                border: "none",
                                                fontSize: "25px",
                                                color: "red"
                                            }
                                    }>
                                        <i className="bi bi-trash3"></i>
                                    </button>


                                </div>
                            )
                        })
                    }

                        <button onClick={removeAll}
                            className='btn btn-outline-dark mx-auto d-block my-5'
                            style={
                                {}
                        }>Check list</button>


                    </div>
                </div>
            </div>
        </div>

    </div>

</div>
    )
}

export default SulaimanTodo
