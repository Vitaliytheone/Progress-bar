export type TBtn = 'incr' | 'decr';
export type TFields = 'max' | 'cur';

export type TControl = {
    maxValue: number;
    curValue: number;
    withValue: boolean;
    onChangeCheckbox: () => void;
    onClick: (v: TBtn) => () => void;
    onChange: (t: TFields) => (e: any) => void;
}
