// Select one of the Password versions to test

// import { Password } from "../src/BugDoesNotHash";
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
// import { Password } from "../src/Correct";

// import { Password } from '../src/BugNoLetterPAllowed'

describe("Password class, test suite", () => {
  const aValidPassword = "helloPassword5";

  describe("Tests of constructor", () => {
    test("constructor Should Throw Exception For Password Less Than 12 Characters", () => {
      const shortPassword = "tooShortPw1";
      expect(() => new Password(shortPassword)).toThrow("Too short password");
    });

    /**test("constructor Should Not Throw Exception For Password Containing Number", () => {
      expect(() => new Password(aValidPassword)).not.toThrow("No number found");
    });**/

    test("constructor Should Throw Exception For Password Containing No Number", () => {
      const  noNumberPassword = "aPasswordWithoutNum"
      expect(() => new Password(noNumberPassword)).toThrow("No number found");
    });
  });

  describe("Tests of getPasswordHash method", () => {
    /**test("getPasswordHash Should Not Return Password As Plain Text For Valid Input", () => {
      const passwordObject = new Password(aValidPassword);
      const hashedPassword = passwordObject.getPasswordHash();

      expect(hashedPassword).not.toBe(aValidPassword);
    });**/

    test("getPasswordHash Should Return Numeric Hashed Password For Valid Input", () => {
      const passwordObject = new Password(aValidPassword);
      const hashedPassword = passwordObject.getPasswordHash();

      expect(hashedPassword).toBeGreaterThan(5);
    });
  });

  describe("Tests of isPasswordSame method", () => {
    test("isPasswordSame Should Return False For Different Passwords", () => {
      const aNewValidPassword = "anotherPassword11";
      const passwordObject1 = new Password(aValidPassword);
      const passwordObject2 = new Password(aNewValidPassword);

      const result = passwordObject1.isPasswordSame(passwordObject2);

      expect(result).toBe(false);
    });

    test("isPasswordSame Should Return True For Same Trimmed And Not Trimmed Password", () => {
      const passwordWithSpaces = " helloPassword5 ";

      const passwordObject1 = new Password(aValidPassword);
      const passwordObject2 = new Password(passwordWithSpaces);

      const result = passwordObject1.isPasswordSame(passwordObject2);
      expect(result).toBe(true);
    });

    // Higher Coverage Test
    test("isPasswordSame Should Throw Exception For Wrong Type Of Argument", () => {
      const noValidPassword = {};
      const password = new Password(aValidPassword);

      expect(() => password.isPasswordSame(noValidPassword)).toThrow("Invalid argument");
    });
  });
});
