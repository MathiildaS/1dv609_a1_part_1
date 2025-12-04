import { jest } from "@jest/globals";

// import { SwedishSocialSecurityNumber } from "../src/correct/SwedishSocialSecurityNumber";
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongYear'

//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe("SwedishSocialSecurityNumber Tests", () => {
  let ssnHelperMock;
  const stringInput = " 950302-0225 ";

  //Create a new mock for each test
  beforeEach(() => {
    ssnHelperMock = {
      isCorrectLength: jest.fn(),
      isCorrectFormat: jest.fn(),
      isValidMonth: jest.fn(),
      isValidDay: jest.fn(),
      luhnisCorrect: jest.fn(),
    };
  });

  describe("Test of copnstructor", () => {
    test("constructor Should Check Length Of Chars", () => {
      ssnHelperMock.isCorrectLength.mockReturnValue(false);
      expect(
        () => new SwedishSocialSecurityNumber(stringInput, ssnHelperMock)).toThrow("To short, must be 11 characters");
    });

    test("constructor Should Check Format of Input", () => {
      ssnHelperMock.isCorrectFormat.mockReturnValue(false);
      expect(
        () => new SwedishSocialSecurityNumber(stringInput, ssnHelperMock)).toThrow("Incorrect format, must be: YYMMDD-XXXX");
    });

    test("constructor Should Trim Input", () => {
      new SwedishSocialSecurityNumber(stringInput, ssnHelperMock);
      expect(ssnHelperMock.isCorrectFormat).toHaveBeenCalledWith("950302-0225");
    });

    test("constructor Should Check If Month Is Valid", () => {
      ssnHelperMock.isValidMonth.mockReturnValue(false);
      expect(
        () => new SwedishSocialSecurityNumber(stringInput, ssnHelperMock)).toThrow("Invalid month in SSN");
    });

    test("constructor Should Check If Day Is Valid", () => {
      ssnHelperMock.isValidDay.mockReturnValue(false);
      expect(
        () => new SwedishSocialSecurityNumber(stringInput, ssnHelperMock)).toThrow("Invalid day in SSN");
    });

    test("constructor Should Check If SSN Is Valid", () => {
      ssnHelperMock.luhnisCorrect.mockReturnValue(false);
      expect(
        () => new SwedishSocialSecurityNumber(stringInput, ssnHelperMock)).toThrow("Invalid SSN according to Luhn's algorithm");
    });

    test("constructor Should Call luhnIsCorrect", () => {
      new SwedishSocialSecurityNumber(stringInput, ssnHelperMock);
      expect(ssnHelperMock.luhnisCorrect).toHaveBeenCalled();
    });
  });

  describe("Test of getYear method", () => {
    test("getYear Should Return Correct Year", () => {
      const ssnInstance = new SwedishSocialSecurityNumber(stringInput, ssnHelperMock);
      const result = ssnInstance.getYear();
      expect(result).toBe("95");
    });
  });

  describe("Test of getSerialNumber method", () => {
    test("getSerialNumber Should Return The Serial Number Of A Valid Social Security Number", () => {
      const ssnInstance = new SwedishSocialSecurityNumber(stringInput, ssnHelperMock);
      const result = ssnInstance.getSerialNumber();
      expect(result).toBe("0225");
    });
  });
});
