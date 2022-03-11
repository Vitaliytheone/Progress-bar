export type TBtn = 'incr' | 'decr';

export type TControl = {
    value: number;
    withValue: boolean;
    onChangeCheckbox: () => void;
    onClick: (v: TBtn) => () => void;
}
