export function formatTime(milliseconds: number, outputUnit: "s" | "m"): string {
    const seconds = Math.floor(milliseconds / 1000);

    if (outputUnit === "s") {
        return `${seconds}`;
    }
    const minutes = Math.floor(seconds / 60);
    return `${minutes}`;
}
