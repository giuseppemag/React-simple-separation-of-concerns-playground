
export const swapArgs = <a, b, c>(f: (_: a) => (_: b) => c) => ((b: b) => (a: a): c => f(a)(b));
