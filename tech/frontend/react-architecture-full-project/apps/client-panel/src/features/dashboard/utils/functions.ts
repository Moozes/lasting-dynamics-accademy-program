export function CapitaliseFirstLetter(word: string | undefined) {
    if (!word) return "";
    const [firstLetter, ...rest] = word;
    return `${firstLetter.toUpperCase()}${rest.join("")}`;
}
