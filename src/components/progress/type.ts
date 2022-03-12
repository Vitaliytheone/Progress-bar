export type TProgress = {
    variant: 'line' | 'circle';
    maxValue: number;
    value: number;
    label?: string;
    withValue?: boolean;
}
