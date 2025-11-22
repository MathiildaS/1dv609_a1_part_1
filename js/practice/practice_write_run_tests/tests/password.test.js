
// Select one of the Password versions to test

//import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
 import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
// import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    const pw = 'hejhejsan55'
    const pw2 = 'hejhejsanhej5'
    const pw3 = 'hejhejsanhej66' 

    test('should throw if pw is less than 12 chars', () => {
        expect(() => new Password(pw)).toThrow('Too short password');
    });

        test('isPasswordSameShouldReturnTrue', () => {
            const password = new Password(pw2)
            const password2 = new Password(pw3)
            
            const result = password.isPasswordSame(password2)
        expect(result).toBe(false);
    });
});