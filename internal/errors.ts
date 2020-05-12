export const err = (message: string) => {
    throw `(blobs2) ${message}`;
};

export const typeCheck = (name: string, val: any, expected: string[]) => {
    let actual: string = typeof val;
    if (actual === "number" && isNaN(val)) actual = "NaN";
    if (actual === "object" && val === null) actual = "null";
    if (!expected.includes(actual)) {
        err(`"${name}" should have type "${expected.join("|")}" but was "${actual}".`);
    }
};