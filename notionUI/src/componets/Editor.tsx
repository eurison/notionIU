import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { BubbleMenu, EditorContent, FloatingMenu, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { lowlight } from 'lowlight'
import {
  RxChatBubble,
  RxChevronDown,
  RxCode,
  RxFontBold,
  RxFontItalic,
  RxStrikethrough
} from 'react-icons/rx'
import { initialContent } from './initialContent'

import 'highlight.js/styles/tokyo-night-dark.css'
import { BubbleButton } from './BubbleButton'

export function Editor() {
    const editor = useEditor({
      extensions: [
        StarterKit,
        CodeBlockLowlight.configure({
          lowlight,
        }),
      ],
      content: initialContent,
      editorProps: {
        attributes: {
          class: 'outline-none',
        }
      }
    })

  return ( 
    <>
      <EditorContent 
        className="max-w-[700] mz-auto pt-16 prose-invert prose-violet" 
        editor={editor} 
        />
        {editor && (
          <FloatingMenu 
            editor={editor}
            className='bg-zinc-700 gap-1 py-2 px-1 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex flex-col' 
            shouldShow={({ state}) => {
              const {$from } = state.selection 

              const currentLineText = $from.nodeBefore?.textContent

              return currentLineText === '/'
            }} 
          >
            <button className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600'>
              <img 
                className='w-10 h-10 rounded-lg'
                src='http://www.notion.so/images/blocks/text/en-US.png' 
                alt="Text" />
              <div className='flex flex-col text-left'>
                <span className='text-sm'>Text</span>
                <span className='text-xs text-zinc-400'>Just start writing with plain text.</span>
              </div>
            </button>

            <button 
              className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600'
              onClick={() => editor.chain().focus().toggleHeading({ level: 1}).run()}
            >
              <img 
                className='w-10 h-10 rounded-lg'
                src='http://www.notion.so/images/blocks/header.57a7576a.png' 
                alt="Heading" />
              <div className='flex flex-col text-left'>
                <span className='text-sm'>Heading 1</span>
                <span className='text-xs text-zinc-400'>Big section heading.</span>
              </div>
            </button>
          </FloatingMenu>
        )}
        {editor && (
          <BubbleMenu className='bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-x-zinc-600' editor={editor}>
            <BubbleButton>
              <RxChevronDown className='w-5 h-5' />
              text
            </BubbleButton>
            <BubbleButton>
              <RxChatBubble className='w-5 h-5' />
              comment
            </BubbleButton>
            <div className='flex' >
              <BubbleButton 
                onClick={() => editor.chain().focus().toggleBold().run()}
                data-active={editor.isActive('bold')}
              >
                <RxFontBold className='w-5 h-5' />
              </BubbleButton >

              <BubbleButton 
                onClick={() => editor.chain().focus().toggleItalic().run()} 
                data-active={editor.isActive('italic')}

              >
                <RxFontItalic className='w-5 h-5' />
              </BubbleButton>

              <BubbleButton 
                onClick={() => editor.chain().focus().toggleStrike().run()}
                data-active={editor.isActive('strike')}
                >
                <RxStrikethrough className='w-5 h-5' />
              </BubbleButton>

              <BubbleButton 
                onClick={() => editor.chain().focus().toggleCode().run()}
                data-active={editor.isActive('code')}
                >
                <RxCode className='w-5 h-5' />
              </BubbleButton>
            </div>
          </BubbleMenu>
        )}
    </>
  )
}