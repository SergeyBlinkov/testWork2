import { newDivCreate } from './newDiv';
import { getNextElement } from './getNextElement';

export const handleDragStart = (e: DragEvent): void => {
    e.dataTransfer!.effectAllowed = 'move';
    (e.target as any).classList.add('dragging');
    const div = newDivCreate(100);
    e.dataTransfer?.setData('newDiv', div.id);
    e.dataTransfer?.setData('draggedBlockId', (e.target as HTMLElement)?.id);
};


export const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    const constructorField = document.getElementById('constructorField');
    const isNewDivInside = Array.from(constructorField!.children)?.filter(({ id }) => id === 'newDiv')[0];
    const activeElement: HTMLElement | null = document.querySelector('.dragging');
    const currentElement = e.target as HTMLElement;
    const cursorPos = getNextElement({ cursorPosition: e.clientY, currentElement });
    const activeElementInside = Array.from(constructorField!.children).find(({ id }) => id === activeElement?.id);
    const classList = currentElement.classList.contains('calculatorWrapper');
    const classParent = currentElement.parentNode === currentElement;
    const isMove = (activeElement === currentElement) || classParent;

    if (isMove) {
        return;
    }
    const emptyText = Array.from(constructorField!.children).filter(({ id }) => id === 'emptyText')[0];
    if (emptyText) {
        constructorField?.removeChild(emptyText);
    }
    const newDiv = newDivCreate(240);

    if (classList || classParent) {

        let passedPrev = currentElement.previousElementSibling === isNewDivInside;
        let passedNext = currentElement.nextElementSibling === isNewDivInside;
        if (cursorPos && !passedPrev) {
            passedNext && constructorField?.removeChild(currentElement.nextElementSibling as Node);
            const element = currentElement.insertAdjacentElement('beforebegin', newDiv);
            return constructorField?.replaceChild((element as Node), newDiv);
        }
        if (!cursorPos && !passedNext) {
            passedPrev && constructorField?.removeChild(currentElement.previousElementSibling as Node);
            return currentElement.insertAdjacentElement('afterend', newDiv);
        } else {
            return;
        }
    }
    if (classList && !isNewDivInside) {
        constructorField?.insertBefore(newDiv, currentElement);
    }
    if ((currentElement === isNewDivInside) || (activeElement === activeElementInside)) {
        return;
    }
    if ((constructorField === currentElement || isNewDivInside === currentElement) && isNewDivInside) {
        return;
    }
    if (currentElement === constructorField && !activeElementInside) {
        constructorField?.appendChild(newDiv);
    }
};


export const handleDrop = (e: DragEvent) => {

    e.stopPropagation();
    const constructorField = document.getElementById('constructorField');
    const constructorTemplate = document.getElementById('constructorTemplate');
    const draggedBlockId = e.dataTransfer?.getData('draggedBlockId');
    if (!draggedBlockId) {
        return;
    }
    const draggedBlock = document.getElementById(draggedBlockId);
    if (!draggedBlock) {
        return;
    }
    const parent = draggedBlock?.parentNode === constructorField;
    const newDiv = Array.from(constructorField!.children).filter(({ id }) => id === 'newDiv')[0];
    const cloneNode = draggedBlock.cloneNode(true) as HTMLElement;
    const nextElement = draggedBlock.nextElementSibling ? draggedBlock.nextElementSibling : draggedBlock;
    cloneNode.id = `${Date.now()}`;
    if (parent) {
        if (!newDiv) {
            return;
        }
        constructorField?.replaceChild(draggedBlock, newDiv);
    } else {
        constructorTemplate?.insertBefore(cloneNode, nextElement);
        constructorField?.replaceChild(draggedBlock, newDiv);
        cloneNode.style.opacity = '0.5';
        cloneNode.style.pointerEvents = 'none';
    }
    (cloneNode as HTMLElement).classList.remove('dragging');
};


export const handleDragEnd = (e: DragEvent) => {
    const constructorField = document.getElementById('constructorField');
    const currentElement = e.target as HTMLElement;
    currentElement.classList.remove('dragging');
    for (const child of Array.from(constructorField!.children)) {
        let isDivInside = child.id === 'newDiv';
        if (isDivInside) {
            constructorField?.removeChild(child);
        }
    }
};