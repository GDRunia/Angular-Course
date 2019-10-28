import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static shouldBeCorrect(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== 'zxcvbnm')
                    resolve({ shouldBeCorrect: true});
                else
                    resolve(null);
            }, 2000);
        });
    }

    static shouldMatch(control: AbstractControl) : ValidationErrors | null {
        let newPassword = control.get('newPassword').value;
        let confirmPassword = control.get('confirmPassword').value;

        if (newPassword !== confirmPassword)
            return { shouldMatch: true };
        
            return null;
    }
}