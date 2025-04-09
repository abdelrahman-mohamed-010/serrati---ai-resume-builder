"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Heading from "@tiptap/extension-heading";
import MenuBar from "./menu-bar";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  className?: string;
}

export function RichTextEditor({
  content,
  onChange,
  className,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        bulletList: {
          HTMLAttributes: {
            class: "list-disc mr-3",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal mr-3",
          },
        },
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class: `tiptap min-h-[156px] rounded-md bg-white py-2 px-3 ${className} prose max-w-none border border-gray-200 focus-within:border-gray-400 transition-colors`,
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="tiptap prose max-w-none outline-none"
      />
    </div>
  );
}
