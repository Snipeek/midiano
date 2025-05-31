export const smoothTarget = (init = 1, scale = 0.1) => {
    let current = init;

    return (target) => {
        current += (target - current) * scale;
        return current;
    } 
}