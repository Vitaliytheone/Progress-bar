import { TControl } from './type'

export const inputsData = ({ curValue, maxValue}: Pick<TControl, 'curValue' | 'maxValue'>) => {
    return [
        {
            id: "input-max",
            label: "Max value",
            value: maxValue,
            type: "max"
        },
        {
            id: "input-current",
            label: "Enter the value",
            value: curValue,
            type: "cur"
        }
    ]
}

export const buttonsData = [
    {
        value: "-",
        type: "decr"
    },
        {
        value: "+",
        type: "incr"
    }
]