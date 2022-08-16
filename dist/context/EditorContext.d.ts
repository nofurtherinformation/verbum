import { LexicalEditor } from 'lexical';
import React from 'react';
interface IEditorContext {
    initialEditor: LexicalEditor;
    activeEditor: LexicalEditor;
    setActiveEditor: React.Dispatch<React.SetStateAction<LexicalEditor>>;
}
declare const EditorContext: React.Context<IEditorContext>;
export default EditorContext;
