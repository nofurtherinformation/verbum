/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/// <reference types="react" />
import './Button.css';
export default function Button({ 'data-test-id': dataTestId, children, className, onClick, disabled, small, title, }: {
    'data-test-id'?: string;
    children: JSX.Element | string | (JSX.Element | string)[];
    className?: string;
    disabled?: boolean;
    onClick: () => void;
    small?: boolean;
    title?: string;
}): JSX.Element;
