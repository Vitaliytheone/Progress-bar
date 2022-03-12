export type TBtn = 'incr' | 'decr';

export type TControl = {
    maxValue: number;
    value: number;
    withValue: boolean;
    onChangeCheckbox: () => void;
    onClick: (v: TBtn) => () => void;
    onChange: (e: any) => void;
}
