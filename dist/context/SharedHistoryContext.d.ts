/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/// <reference types="react" />
import type { HistoryState } from '@lexical/react/LexicalHistoryPlugin';
declare type ContextShape = {
    historyState: HistoryState;
};
export declare const SharedHistoryContext: ({ children, }: {
    children: JSX.Element | string | (JSX.Element | string)[];
}) => JSX.Element;
export declare const useSharedHistoryContext: () => ContextShape;
export {};
