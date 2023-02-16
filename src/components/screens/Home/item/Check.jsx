import cn from 'classnames'
import { BsCheck } from 'react-icons/bs'

const Check = ({ isCompleted }) => {
	return (
		<div
			className={cn(
				'border-2 rounded-md border-purple-500 w-6 h-6 mr-3 flex items-center justify-center',
				{ 'bg-purple-500': isCompleted, }
			)}
		>
			{isCompleted && <BsCheck size={32} className='text-gray-50' />}
		</div>
	)
}

export default Check
