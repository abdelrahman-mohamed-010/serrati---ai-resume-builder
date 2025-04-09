import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "./button";
import { Bold, Italic, List, ListOrdered } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

interface TipTapEditorProps {
  content?: string;
  onChange?: (html: string) => void;
  className?: string;
}

export function TipTapEditor({
  content,
  onChange,
  className,
}: TipTapEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    editorProps: {
      attributes: {
        class: `prose prose-sm max-w-none focus:outline-none ${className}`,
      },
    },
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-1.5 border rounded-lg bg-gray-50 mb-2">
        <TooltipProvider delayDuration={100}>
          <div className="flex items-center gap-0.5 px-0.5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => editor.chain().focus().toggleBold().run()}
                  data-active={editor.isActive("bold")}
                  className="h-8 w-8 p-0 data-[active=true]:bg-gray-200"
                >
                  <Bold className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>غامق</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                  data-active={editor.isActive("italic")}
                  className="h-8 w-8 p-0 data-[active=true]:bg-gray-200"
                >
                  <Italic className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>مائل</TooltipContent>
            </Tooltip>
          </div>

          <div className="w-px h-6 bg-gray-200 mx-1" />

          <div className="flex items-center gap-0.5 px-0.5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    editor.chain().focus().toggleBulletList().run()
                  }
                  data-active={editor.isActive("bulletList")}
                  className="h-8 w-8 p-0 data-[active=true]:bg-gray-200"
                >
                  <List className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>قائمة نقطية</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    editor.chain().focus().toggleOrderedList().run()
                  }
                  data-active={editor.isActive("orderedList")}
                  className="h-8 w-8 p-0 data-[active=true]:bg-gray-200"
                >
                  <ListOrdered className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>قائمة رقمية</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
      <EditorContent className="p-0" editor={editor} />
    </div>
  );
}
