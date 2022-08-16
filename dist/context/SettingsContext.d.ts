/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/// <reference types="react" />
import type { SettingName } from '../appSettings';
declare type SettingsContextShape = {
    setOption: (name: SettingName, value: boolean) => void;
    settings: Record<SettingName, boolean>;
};
export declare const SettingsContext: ({ children, }: {
    children: JSX.Element | string | (JSX.Element | string)[];
}) => JSX.Element;
export declare const useSettings: () => SettingsContextShape;
export {};
