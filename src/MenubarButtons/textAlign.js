import React from 'react'

export const TextAlign=({editor})=>{
    return (
        <>
            <button onClick={()=>editor.chain().focus().setTextAlign('left').run()} className={editor.isActive({ textAlign: 'left' })?'is-active':'' }>
            left
            </button>
            <button onClick={()=>editor.chain().focus().setTextAlign('center').run()} className={editor.isActive({ textAlign: 'center' })?'is-active':'' }>
            center
            </button>
            <button onClick={()=>editor.chain().focus().setTextAlign('right').run()} className={editor.isActive({ textAlign: 'right' })?'is-active':'' }>
            right
            </button>
            <button onClick={()=>editor.chain().focus().setTextAlign('justify').run()} className={editor.isActive({ textAlign: 'justify' })?'is-active': '' }>
            justify
            </button>
            <button onClick={()=>editor.chain().focus().unsetTextAlign().run()}>
            set default
            </button>
        </>
    )
}
