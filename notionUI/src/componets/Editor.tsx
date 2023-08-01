import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './initialContent'


export function Editor() {
    const editor = useEditor({
      extensions: [
        StarterKit,
      ],
      content: initialContent,
    })

  return ( 
    <EditorContent className="max-w-[700] mz-auto pt-16 prose-violet" editor={editor} />
  )

}