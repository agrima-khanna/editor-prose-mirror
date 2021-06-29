import React from 'react'

export function Link  ({editor})  {
    const setLink=()=> {
        const url = window.prompt('URL')
      
        editor.chain().focus().setLink({ href: url }).run()
      }
    return (
        <>
            <button onClick={() => setLink()} >
            link
            </button>
            <button onClick={()=>editor.chain().focus().unsetLink().run()} className={editor.isActive('link')? 'is-active' : ''}>
            remove
            </button>
        </>
    )
}
