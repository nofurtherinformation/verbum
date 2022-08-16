/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { EditorConfig } from 'lexical';
import SerializedTextNode from 'lexical';
import { Spread } from 'globals';
import { TextNode } from 'lexical';
export declare type SerializedTypeaheadNode = Spread<{
    type: 'typeahead';
    version: 1;
}, typeof SerializedTextNode>;
export declare class TypeaheadNode extends TextNode {
    static clone(node: TypeaheadNode): TypeaheadNode;
    static getType(): 'typeahead';
    static importJSON(serializedNode: SerializedTypeaheadNode): TypeaheadNode;
    exportJSON(): SerializedTypeaheadNode;
    createDOM(config: EditorConfig): HTMLElement;
}
export declare function $createTypeaheadNode(text: string): TypeaheadNode;
