import dark from "./dark.png";
import light from "./light.png";

export const image = (mode: "light" | "dark" = "light") => {
    return mode === "light" ? light : dark;
};
