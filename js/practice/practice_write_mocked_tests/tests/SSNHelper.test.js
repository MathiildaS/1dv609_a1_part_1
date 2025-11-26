import { SSNHelper } from "../src/correct/SSNHelper";
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDay00';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth0';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperMessyLuhn'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength'

describe("SSNHelper Tests", () => {
  let ssnHelper;

  beforeEach(() => {
    ssnHelper = new SSNHelper();
  });

  describe("isValidDay method", () => {
    test("isValidDay Should Return True For Day Up To 31", () => {
      const stringInputDay31 = "31";
      const isValidDay = ssnHelper.isValidDay(stringInputDay31);
      expect(isValidDay).toBe(true);
    });

    test("isValidDay Should Return False For Day 00", () => {
      const stringInputDay00 = "00";
      const isValidDay = ssnHelper.isValidDay(stringInputDay00);
      expect(isValidDay).toBe(false);
    });
  });

  describe("isValidMonth method", () => {
    const ssnHelper = new SSNHelper();

    test("isValidMonth Should Return False For Month 00", () => {
      const stringInputMonth00 = "00";
      const isValidMonth = ssnHelper.isValidMonth(stringInputMonth00);
      expect(isValidMonth).toBe(false);
    });
  });

  describe("isCorrectFormat method", () => {
    const ssnHelper = new SSNHelper();

    test("isCorrectFormat Should Return False For Incorrect Format", () => {
      const stringInputIncorrectFormat = "25123-1234";
      const isCorrectFormat = ssnHelper.isCorrectFormat(
        stringInputIncorrectFormat
      );
      expect(isCorrectFormat).toBe(false);
    });
  });

  describe("luhnIsCorrect method", () => {
    let ssnHelper;

    beforeEach(() => {
      ssnHelper = new SSNHelper();
    });

    test("luhnIsCorrect Should Return True For Correct Luhn And Valid Input", () => {
      const stringInput = "950302-0225";
      const luhnIsCorrect = ssnHelper.luhnisCorrect(stringInput);
      expect(luhnIsCorrect).toBe(true);
    });
  });

  describe("isCorrectLength method", () => {
    const ssnHelper = new SSNHelper();

    test("isCorrectLenght Should Return False If Input Length More Than 11", () => {
      const stringInput = "950302-02255";
      const isCorrectLenght = ssnHelper.isCorrectLength(stringInput);
      expect(isCorrectLenght).toBe(false);
    });
  });
});
