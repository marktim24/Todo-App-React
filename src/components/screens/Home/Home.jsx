import TodoItem from './item/TodoItem'
import React, { useState } from 'react'

const todos = [
	{
		_id: '1',
		title: 'Cook breakfast',
		isCompleted: false,
	},
	{
		_id: '2',
		title: 'Drink water',
		isCompleted: false,
	},
	{
		_id: '3',
		title: 'Go to grocery',
		isCompleted: true,
	},
]

const Home = () => {
	const [todo, setTodo] = useState(todos)

	const checkTodo = id => {
		const copy = [...todos]
		const current = copy.find(check => check._id === id)
		current.isCompleted = !current.isCompleted
		setTodo(copy)
	}

	const removeTodo = id => setTodo([...todos].filter(check => check._id !== id))

	return (
		<div className='text-white mx-auto'>
			<h1 className='text-4xl font-bold text-center mb-10'>ToDo App</h1>
			{todo.map(todo => (
				<TodoItem
					key={todo._id}
					todo={todo}
					changeTodo={checkTodo}
					removeTodo={removeTodo}
				/>
			))}
			{/* Компонент <CreateTodo с параметром setTodo={setTodo} /> */}
		</div>
	)
}

export default Home
