function solveQuadraticEquation(a, b, c) {
    const d = b * b - 4 * a * c;
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    return x1 + ',' + x2;
}

console.log(solveQuadraticEquation(1,-1,-2)); // -1, 2
    