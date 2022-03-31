export const getCircleParams = ({ stroke, width, height}: Record<string, number>) => {

    const w =  `${width}px`;
    const h = `${height}px`;
    const r = width / 2 - stroke * 2;
    const cy = height / 2;
    const cx = width / 2;

    return {
        r,h,w,cy,cx
    }
}