export const getCircleParams = ({ stroke, width, height}: Record<string, number>) => {

    const w =  `${width}px`;
    const h = `${height}px`;
    const cy = height / 2;
    const cx = width / 2;

    const radius = width / 2 - stroke * 2;
    const circumference = radius * 2 * Math.PI;

    return {
        h,
        w,
        cy,
        cx,
        radius,
        circumference
    }
}