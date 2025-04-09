import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
} from "lucide-react";
import { Toggle } from "./toggle";
import { Editor } from "@tiptap/react";

const Options = [
  {
    icon: <Heading1 className="size-4" />,
    onClick: (editor: Editor) =>
      editor.chain().focus().toggleHeading({ level: 1 }).run(),
    isPressed: (editor: Editor) => editor.isActive("heading", { level: 1 }),
  },
  {
    icon: <Heading2 className="size-4" />,
    onClick: (editor: Editor) =>
      editor.chain().focus().toggleHeading({ level: 2 }).run(),
    isPressed: (editor: Editor) => editor.isActive("heading", { level: 2 }),
  },
  {
    icon: <Heading3 className="size-4" />,
    onClick: (editor: Editor) =>
      editor.chain().focus().toggleHeading({ level: 3 }).run(),
    isPressed: (editor: Editor) => editor.isActive("heading", { level: 3 }),
  },
  {
    icon: <Bold className="size-4" />,
    onClick: (editor: Editor) => editor.chain().focus().toggleBold().run(),
    isPressed: (editor: Editor) => editor.isActive("bold"),
  },
  {
    icon: <Italic className="size-4" />,
    onClick: (editor: Editor) => editor.chain().focus().toggleItalic().run(),
    isPressed: (editor: Editor) => editor.isActive("italic"),
  },
  {
    icon: <Strikethrough className="size-4" />,
    onClick: (editor: Editor) => editor.chain().focus().toggleStrike().run(),
    isPressed: (editor: Editor) => editor.isActive("strike"),
  },
  {
    icon: <AlignLeft className="size-4" />,
    onClick: (editor: Editor) =>
      editor.chain().focus().setTextAlign("left").run(),
    isPressed: (editor: Editor) => editor.isActive({ textAlign: "left" }),
  },
  {
    icon: <AlignCenter className="size-4" />,
    onClick: (editor: Editor) =>
      editor.chain().focus().setTextAlign("center").run(),
    isPressed: (editor: Editor) => editor.isActive({ textAlign: "center" }),
  },
  {
    icon: <AlignRight className="size-4" />,
    onClick: (editor: Editor) =>
      editor.chain().focus().setTextAlign("right").run(),
    isPressed: (editor: Editor) => editor.isActive({ textAlign: "right" }),
  },
  {
    icon: <List className="size-4" />,
    onClick: (editor: Editor) =>
      editor.chain().focus().toggleBulletList().run(),
    isPressed: (editor: Editor) => editor.isActive("bulletList"),
  },
  {
    icon: <ListOrdered className="size-4" />,
    onClick: (editor: Editor) =>
      editor.chain().focus().toggleOrderedList().run(),
    isPressed: (editor: Editor) => editor.isActive("orderedList"),
  },
];

export default function MenuBar({ editor }: { editor: Editor | null }) {
  if (!editor) {
    return null;
  }

  return (
    <div className="border rounded-md p-1 mb-1 bg-slate-50 space-x-2">
      {Options.map((option, index) => (
        <Toggle
          key={index}
          pressed={option.isPressed(editor)}
          onPressedChange={() => option.onClick(editor)}
          className="cursor-pointer"
        >
          {option.icon}
        </Toggle>
      ))}
    </div>
  );
}
