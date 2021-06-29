import React from 'react'

export const TaskItem = ({editor}) => {
    return (
        <>
            <button  onClick={()=>editor.chain().focus().toggleTaskList().run()} className={  editor.isActive('taskList')?'is-active':'' }>
      task list
    </button>
        </>
    )
}
