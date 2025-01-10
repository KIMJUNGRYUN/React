import Todo from '../assets/direct-hit.png'
import TaskCard from './TaskCard';
import './TaskColumn.css'

export default function TaskColumn({title, icon, tasks, status, handleDelete}) {
  return (
    <section className='task_column'>
			<h2 className='task_column_heading'>
				<img className='task_column_icon' src={icon}  alt='' />
                
				{title}
			</h2>

            {tasks.length > 0 &&
                 tasks.map(
                    (task, idx) => 
                         task.status === status && (
                            <TaskCard key={idx} 
                                      title={task.task}
                                      tags={task.tags} 
                                      index={idx}
                                      handleDelete={handleDelete}
                            />
                 )
            )}
   
		</section>
  );
}
