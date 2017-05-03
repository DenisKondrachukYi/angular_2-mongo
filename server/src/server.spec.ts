import {TestClass} from "./server";

describe('This test should pass', () => {

   let testClass: TestClass;

   beforeEach(() => {
       testClass = new TestClass();
   });

   it('Class should be created', () => {
        expect(testClass).toBeTruthy();
   });

   it('Should have definedMethod ', () => {
      expect(testClass.definedMethod).toBeDefined();
   });

   it('definedMethod should return true value', () => {
       expect(testClass.definedMethod()).toBeTruthy();
   })

});
