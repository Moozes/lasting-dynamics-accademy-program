export const ACCOUNT_INPUTS_DATA = [
    { isTextField: true, type: "text", name: "first_name", lable: "First Name", InputLabelProps: null },
    { isTextField: true, type: "text", name: "last_name", lable: "Last Name", InputLabelProps: null },
    { isTextField: true, type: "text", name: "personal_number", lable: "Phone_number", InputLabelProps: null },
    { isTextField: true, type: "email", name: "email", lable: "email", InputLabelProps: null },
    { isTextField: true, type: "text", name: "role", lable: "Role", InputLabelProps: null },
    { isTextField: true, type: "text", name: "unit", lable: "Unit", InputLabelProps: null },
    {
        isTextField: true,
        type: "date",
        name: "profile.0.date_of_birth",
        lable: "date_of_birth",
        InputLabelProps: { shrink: true },
    },
    { isTextField: true, type: "text", name: "profile.0.weight", lable: "Weight", InputLabelProps: null },
    { isTextField: false, type: "text", name: "profile.0.dominant_arm", lable: "Dominant_arm", InputLabelProps: null },
    {
        isTextField: true,
        type: "text",
        name: "profile.0.resting_heart_rate",
        lable: "Resting_heart_rate",
        InputLabelProps: null,
    },
];
