export default class ValidationService {
    static fieldEmptyChecker(form) {
        let isEmpty = false;
        Object.keys(form).forEach(key => {
            if (form[key].trim() === '') {
                isEmpty = true;
            }
        });
        return isEmpty;
    }

    static emailValidator(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
