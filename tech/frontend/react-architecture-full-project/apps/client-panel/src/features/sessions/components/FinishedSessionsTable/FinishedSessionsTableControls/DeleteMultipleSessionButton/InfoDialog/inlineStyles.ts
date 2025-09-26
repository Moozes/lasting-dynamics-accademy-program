export const modalContentStyles = () => ({
    width: "500px",
    textAlign: "center",
    padding: "20px",
    "& > .content-box": {
        position: "relative",
        "& > .text-center": {
            textAlign: "center",
            "& > .info-list": {
                padding: 0,
                margin: 0,
                listStyle: "none",
            },
        },
    },
});
