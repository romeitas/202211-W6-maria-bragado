export const calculateLength = (array) => {
    caseError(array);
    let counter = 0;
    for (let i = 0; array[i] !== undefined; i++) {
        counter++;
    }
    return counter;
};

const caseError = (array) => {
    if (array === undefined) throw new RangeError('Parámetro no incluido');
};
