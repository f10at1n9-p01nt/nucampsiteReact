export const validateUserLoginForm = ({ username, password }) => {
    const errors = {};

    if (!username) {
        errors.username = "Required";
    } else if (username.length < 6) {
        errors.username = "Must be at least 6 characters long."
    } else if (username.length > 15) {
        errors.username = "Must be less than 16 characters long."
    }

    if (!password) {
        errors.password = "Required";
    } else if (password.length < 8) {
        errors.password = "Must be at least 8 characters long."
    }

    return errors;
}