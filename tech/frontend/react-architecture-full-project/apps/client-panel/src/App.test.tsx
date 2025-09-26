import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Button from "./Button";

describe("App", () => {
    it("renders Button", () => {
        render(<Button />);
        screen.debug();
        expect(true).toBe(true);
    });
});
