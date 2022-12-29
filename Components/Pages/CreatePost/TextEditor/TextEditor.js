import * as S from './TextEditor.styled'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useImperativeHandle, useState } from 'react'
import { forwardRef } from 'react'

const MenuBar = ({ editor}) => {
  if (!editor) {
    return null
  }
  const toggleColor = (button) => {
    button.classList.toggle('active')
  }
  return (
    <>
      <button
        onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleBold().run()}}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        Bold
      </button>
      <button
        onClick={(e) => {e.preventDefault(); editor.chain().focus().setParagraph().run()}}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        Paragraph
      </button>
      <button
        onClick={(e) => {e.preventDefault();editor.chain().focus().toggleHeading({ level: 3 }).run()}}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        Sub-Heading
      </button>
      <button
        onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleOrderedList().run()}}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        Ordered List
      </button>
      <button
        onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleBlockquote().run()}}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        BlockQuote
      </button>
      <button onClick={(e) => {e.preventDefault();editor.chain().focus().setHardBreak().run()}}>
        Line Break
      </button>
    </>
  )
}

const TextEditor =  ({contentValue, updateFn, initialContent, isEditable }) => {
  const editor = useEditor({
    editable: isEditable,
    extensions: [
      StarterKit,
    ],
    content:initialContent,
    onUpdate: (({editor}) => {
        const html = editor.getHTML()
        updateFn(html)
    })
  })
  return (
    <S.TextEditorContainer className='editor center' id='textEditor'>
      <div className="menuBar">
        <MenuBar editor={editor} />
      </div>
      <div className="textSection">
        <EditorContent editor={editor} />
      </div>
    </S.TextEditorContainer>
  )
}

export default TextEditor;