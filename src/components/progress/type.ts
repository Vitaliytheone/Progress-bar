export type TProgress = {
    variant: 'line' | 'circle';
    maxValue: number | string;
    value: number | string;
    label?: string;
    withValue?: boolean;
}

export type TBar = Pick<TProgress, 'withValue'> & { valueInPercent: string, };

export type TCircle = TBar & {
    stroke?: number;
    width?: number;
    height?: number;
}