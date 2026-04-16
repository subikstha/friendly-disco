export interface BaseElement {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    strokeColor: string;
    backgroundColor: string;
    fillStyle: 'solid' | 'hachure' | 'cross-hatcher';
    strokeWidth: number;
    roughness: number;
    opacity: number;
    angle: number;
    groudIds: string[];
    isDeleted: boolean;
    boundElements: { id: string, type: 'arrow' | 'text' }[] | null;
}

export interface RectangleElement extends BaseElement {
    type: 'rectangle';
    roundness: { type: number; value?: number } | null
}

export interface EllipseElement extends BaseElement {
    type: 'ellipse'
}

export interface DiamondElement extends BaseElement {
    type: 'diamond'
}