import {toast} from '@/toast'

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

    static async validateFormWithApiErrors(form, errorResponse) {
        const errors = errorResponse.errors;
        const errorKeys = Object.keys(errors);
        const validationResults = {};

        for (const key of errorKeys) {
            if (form.hasOwnProperty(key)) {
                validationResults[key] = true;
            }
        }

        return Object.keys(validationResults).length === 0;
    }

    static emailValidator(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
