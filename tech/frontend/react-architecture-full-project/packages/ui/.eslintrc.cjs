module.exports = {
    root: true,
    extends: ["custom"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
    },
    rules: { "prettier/prettier": ["error", { endOfLine: "auto" }] },
};
