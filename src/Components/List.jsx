import React, { useState } from 'react'

const List = () => {

    const data = ['todo 1','todo 2']


    return (
        <div className='container'>
                <h1>List of todo</h1>



                    {
                    data.map((item) => {
                        return (

                           
                                <li>{item}</li>
                           
                            
                        )
                    })
                    }
                
        </div>
    )
}

export default List;
