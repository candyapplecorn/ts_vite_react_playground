import {helloWorld} from "./data_structures";

describe("helloWorld", () => {
    it("should print hello world", () => {
        const result = helloWorld();
        expect(result).toBe("Hello World!");
    })
})
