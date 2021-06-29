import React from 'react'

export const TextHighlight = ({editor}) => {
    return (
        <div>
             <button
      onClick={()=>editor.chain().focus().toggleHighlight().run()}
      className={   editor.isActive('highlight') }>
      highlight (any)
    </button>
    <button
      onClick={()=>editor.chain().focus().toggleHighlight({
        color: ''
      }).run()}
      className={   editor.isActive('highlight', {
        color: ''
      }) } >
      highlight (default)
    </button>
    <button onClick={()=>editor.chain().focus().toggleHighlight({ color: 'red' }).run()} className={editor.isActive('highlight', { color: 'red' }) ? 'is-active':''}>
      "red"
    </button>
    <button onClick={()=>editor.chain().focus().toggleHighlight({ color: '#ffa8a8' }).run()} className={   editor.isActive('highlight', { color: '#ffa8a8' }) ? 'is-active':''}>
      red
    </button>
    <button onClick={()=>editor.chain().focus().toggleHighlight({ color: '#ffc078' }).run()} className={   editor.isActive('highlight', { color: '#ffc078' }) ? 'is-active':''}>
      orange
    </button>
    <button onClick={()=>editor.chain().focus().toggleHighlight({ color: '#8ce99a' }).run()} className={   editor.isActive('highlight', { color: '#8ce99a' }) ? 'is-active':''}>
      green
    </button>
    <button onClick={()=>editor.chain().focus().toggleHighlight({ color: '#74c0fc' }).run()} className={   editor.isActive('highlight', { color: '#74c0fc' }) ? 'is-active':''}>
      blue
    </button>
    <button onClick={()=>editor.chain().focus().toggleHighlight({ color: '#b197fc' }).run()} className={   editor.isActive('highlight', { color: '#b197fc' }) ? 'is-active':''}>
      purple
    </button>
        </div>
    )
}
