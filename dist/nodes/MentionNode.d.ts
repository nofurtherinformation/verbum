/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { EditorConfig, LexicalNode, NodeKey } from 'lexical';
import SerializedTextNode from 'lexical';
import { Spread } from 'globals';
import { TextNode } from 'lexical';
export declare type SerializedMentionNode = Spread<{
    mentionName: string;
    type: 'mention';
    version: 1;
}, typeof SerializedTextNode>;
export declare class MentionNode extends TextNode {
    __mention: string;
    static getType(): string;
    static clone(node: MentionNode): MentionNode;
    static importJSON(serializedNode: SerializedMentionNode): MentionNode;
    constructor(mentionName: string, text?: string, key?: NodeKey);
    exportJSON(): SerializedMentionNode;
    createDOM(config: EditorConfig): HTMLElement;
    isTextEntity(): true;
}
export declare function $createMentionNode(mentionName: string): MentionNode;
export declare function $isMentionNode(node: LexicalNode | null | undefined): node is MentionNode;
