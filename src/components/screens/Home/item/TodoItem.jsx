import Check from './Check'
import cn from 'classnames'
import React from 'react'
import { TbTrash } from 'react-icons/tb'

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
	return (
		<div className='flex items-center justify-between mb-2.5 p-4 w-full bg-gray-800 rounded-xl outline-none'>
			<button
				className='flex items-center'
				onClick={() => changeTodo(todo._id)}
			>
				<Check isCompleted={todo.isCompleted} />
				<span className={cn({ 'line-through': todo.isCompleted })}>
					{todo.title}
				</span>
			</button>
			<button onClick={() => removeTodo(todo._id)}>
				<TbTrash
					size={24}
					className='text-gray-600 hover:text-purple-500 transition-colors ease-in-out duration-300'
				/>
			</button>
		</div>
	)
}

export default TodoItem
