/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import './ExcalidrawModal.css';
import { ReactPortal } from 'react';
export declare type ExcalidrawElementFragment = {
    isDeleted?: boolean;
};
declare type Props = {
    closeOnClickOutside?: boolean;
    /**
     * The initial set of elements to draw into the scene
     */
    initialElements: ReadonlyArray<ExcalidrawElementFragment>;
    /**
     * Controls the visibility of the modal
     */
    isShown?: boolean;
    /**
     * Completely remove Excalidraw component
     */
    onDelete: () => boolean;
    /**
     * Handle modal closing
     */
    onHide: () => void;
    /**
     * Callback when the save button is clicked
     */
    onSave: (elements: ReadonlyArray<ExcalidrawElementFragment>) => void;
};
/**
 * @explorer-desc
 * A component which renders a modal with Excalidraw (a painting app)
 * which can be used to export an editable image
 */
export default function ExcalidrawModal({ closeOnClickOutside, onSave, initialElements, isShown, onHide, onDelete, }: Props): ReactPortal | null;
export {};
