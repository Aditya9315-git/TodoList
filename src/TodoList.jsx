import React, { useState } from 'react'

const TodoList = () => {
    const [data, setData] = useState('')
    const [task, setTask] = useState([])

    // Handles input change
    function getData(e) {
        setData(e.target.value)
    }


    // Adds new task to the list
    function addData() {
        if (data.trim()) {
            let store = [...task, data]
            setTask(store)
            setData('')
        }
    }

    // Deletes a task from the list
    function deleteTask(index) {
        let filteredData = task.filter((curData, id) => id !== index)
        setTask(filteredData)
    }

    return (
        <div className='h-screen w-screen flex justify-center items-center bg-gray-500'>
            <div className='bg-white shadow-lg rounded-lg p-6 w-[80vw] max-w-lg'>
                <h1 className='text-center text-3xl font-bold text-gray-700 mb-6'>Todo List</h1>

                <div className='flex justify-between items-center mb-6'>
                    <input
                        type="text"
                        placeholder='Enter your task...'
                        className='w-[80%] h-[50px] rounded-md p-4 text-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
                        value={data}
                        onChange={getData}
                        required
                    />
                    <button
                        onClick={addData}
                        className='bg-blue-500 text-white text-xl h-[50px] w-[15%] ml-4 rounded-md transition-colors duration-300 hover:bg-blue-600 focus:outline-none'>
                        Add
                    </button>
                </div>

                {task.length > 0 ? (
                    <div>

                        {task.map((curr, index) => (
                            <div key={index} className='bg-blue-100 mb-4 flex justify-between items-center p-4 rounded-md shadow-sm'>
                                <p className='text-lg text-gray-700'>{curr}</p>
                                <button
                                    className='bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-500 focus:outline-none'
                                    onClick={() => deleteTask(index)}>
                                    Delete
                                </button>
                            </div>
                        ))}
                        
                    </div>

                ) : (
                    <p className='text-center text-gray-500'>No tasks added yet.</p>
                )}
            </div>
        </div>
    )
}

export default TodoList
