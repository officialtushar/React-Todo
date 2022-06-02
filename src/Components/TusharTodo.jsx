import React, {useState} from 'react'
import List from './List';
import Input from './InputField';
const TusharTodo = () => {


    return (
        <div className='container'>
            <h1>My Todo</h1>

            <div className="todo1">
                <Input/>

                <List/>

            </div>

            <div className="todo2">
                <Input />

                <List/>

            </div>


        </div>
    )
}

export default TusharTodo;
