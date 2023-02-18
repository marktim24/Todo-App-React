import React, { useState } from 'react'

const CreateTodo = ({ setTodo }) => {
	const [title, setTitle] = useState('')

	const createTodo = title => {
		setTodo(prev => [
			{
				_id: new Date(),
				title,
				isCompleted: false,
			},
			...prev,
		])
		setTitle('')
	}
	return (
		<div className='flex items-center justify-between mt-10 p-4 w-full border-gray-800 border-2 rounded-xl outline-none'>
			<input
				type='text'
				onChange={e => setTitle(e.target.value)}
				value={title}
				onKeyPress={e => e.key === 'Enter' && createTodo(title)}
				placeholder='Add ToDo task'
				className='bg-transparent w-full border-none outline-none  hover:border-purple-500 transition-colors ease-in-out duration-300'
			/>
		</div>
	)
}

export default CreateTodo
