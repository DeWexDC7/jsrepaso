let suma = ( a, b ) =>
    {
        return (a+b);
    }

let resta = ( a, b ) =>
    {
        return (a-b);
    }
let multiplicacion = ( a, b ) =>
    {
        return (a*b);
    }
    
    let division = (a, b) => {
        if (b === 0) {
            return 'Error: División por cero';
        }
        return a / b;
    };
    

export {suma , division}

    