import { useState } from 'react'

const CreateTodo = ({ setTodo }) => {
	const [title, setTitle] = useState('')

	const addTodo = title => {
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
		<div className='flex items-center justify-between mt-12 p-4 w-full border-gray-800 border-2 rounded-xl outline-none'>
			<input
				type='text'
				onChange={e => setTitle(e.target.value)}
				value={title}
				onKeyPress={e => e.key === 'Enter' && addTodo(title)}
				className='bg-transparent w-full outline-none border-none'
				placeholder='Add ToDo'
			/>
		</div>
	)
}

export default CreateTodo
