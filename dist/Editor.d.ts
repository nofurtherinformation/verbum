/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { ReactNode } from 'react';
import { LexicalEditor } from 'lexical';
interface IEditorProps {
    children?: ReactNode;
    hashtagsEnabled?: boolean;
    autoLinkEnabled?: boolean;
    emojisEnabled?: boolean;
    actionsEnabled?: boolean;
    placeholder?: string;
    listMaxIndent?: number;
    initialEditorState?: string;
    isReadOnly?: boolean;
    onChange?: (editorState: string, editorInstance?: LexicalEditor) => void;
}
declare const Editor: ({ children, hashtagsEnabled, autoLinkEnabled, emojisEnabled, actionsEnabled, listMaxIndent, placeholder, initialEditorState, isReadOnly, onChange, }: IEditorProps) => JSX.Element;
export default Editor;
