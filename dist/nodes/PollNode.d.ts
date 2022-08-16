/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/// <reference types="react" />
import type { DOMConversionMap, DOMExportOutput, LexicalNode, NodeKey, SerializedLexicalNode } from 'lexical';
import './PollNode.css';
import { DecoratorNode } from 'lexical';
import { Spread } from 'libdefs/globals';
declare type Options = ReadonlyArray<Option>;
declare type Option = Readonly<{
    text: string;
    uid: string;
    votes: Array<number>;
}>;
export declare type SerializedPollNode = Spread<{
    question: string;
    options: Options;
    type: 'poll';
    version: 1;
}, SerializedLexicalNode>;
export declare class PollNode extends DecoratorNode<JSX.Element> {
    __question: string;
    __options: Options;
    static getType(): string;
    static clone(node: PollNode): PollNode;
    static importJSON(serializedNode: SerializedPollNode): PollNode;
    constructor(question: string, options?: Options, key?: NodeKey);
    exportJSON(): SerializedPollNode;
    addOption(option: Option): void;
    deleteOption(option: Option): void;
    setOptionText(option: Option, text: string): void;
    toggleVote(option: Option, clientID: number): void;
    static importDOM(): DOMConversionMap | null;
    exportDOM(): DOMExportOutput;
    createDOM(): HTMLElement;
    updateDOM(): false;
    decorate(): JSX.Element;
}
export declare function $createPollNode(question: string): PollNode;
export declare function $isPollNode(node: LexicalNode | null | undefined): node is PollNode;
export {};
