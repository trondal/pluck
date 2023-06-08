interface props {
    name: string;
}

export const pluck = (elements: props[], field: string) => {
    return elements.map((element) => element[field]);
}