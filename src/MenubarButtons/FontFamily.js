import React from 'react'

export const FontFamily = ({editor}) => {
    return (
        <>
            <button onClick={()=>editor.chain().focus().setFontFamily('Inter').run()} className={  editor.isActive('textStyle', { fontFamily: 'Inter' })  ?'is-active': ''}>
            Inter
            </button>
            <button onClick={()=>editor.chain().focus().setFontFamily('Comic Sans MS, Comic Sans').run()} className={  editor.isActive('textStyle', { fontFamily: 'Comic Sans MS, Comic Sans' })  ?'is-active': ''}>
            Comic Sans
            </button>
            <button onClick={()=>editor.chain().focus().setFontFamily('serif').run()} className={  editor.isActive('textStyle', { fontFamily: 'serif' })  ?'is-active': ''}>
            serif
            </button>
            <button onClick={()=>editor.chain().focus().setFontFamily('monospace').run()} className={  editor.isActive('textStyle', { fontFamily: 'monospace' })  ?'is-active': ''}>
            monospace
            </button>
            <button onClick={()=>editor.chain().focus().setFontFamily('cursive').run()} className={  editor.isActive('textStyle', { fontFamily: 'cursive' })  ?'is-active': ''}>
            cursive
            </button>
            <button onClick={()=>editor.chain().focus().unsetFontFamily().run()}>
            Remove font-family
            </button>
        </>
    )
}
