export type TProgress = {
    variant: 'line' | 'circle';
    maxValue: number | string;
    value: number | string;
    label?: string;
    withValue?: boolean;
}
