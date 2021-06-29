import React from 'react'

export const SubSuper = ({editor}) => {
    return (
        <>
            <button onClick={()=>editor.chain().focus().toggleSubscript().run()} className={ editor.isActive('subscript') ?'is-active':''}>
            subscript
            </button>
            <button onClick={()=>editor.chain().focus().toggleSuperscript().run()} className={ editor.isActive('superscript') ?'is-active':''}>
            superscript
            </button>
        </>
    )
}

