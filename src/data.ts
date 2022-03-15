import { TProgress } from './components/progress/type';

export const data: Pick<TProgress, 'label' | 'variant'>[] = [
        {
            variant: 'line',
            label: 'Line bar'
        },
        // {
        //     variant: 'circle',
        //     label: 'Circle bar'
        // }
]

export const validRegexp = /^\d*\.?(?:\d{1,2})?$/;
 