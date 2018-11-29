import Person from "./Person";

describe("Person domain model:", () => {
  describe("The constructor", () => {
    test("should create a person instance with a correct name property", () => {
      let person = new Person("Boris Karloff");
      expect(person).toEqual({
        _name: "Boris Karloff"
      });
    });

    test("should throw an error if a non numeric value is passed", () => {
      expect(() => {
        new Person(1);
      }).toThrow("Argument 'name' must be of type String");
    });
  });

  describe("get name", () => {
    let person = new Person("Bela Lugosi");

    test("should return the name of the person", () => {
      expect(person.name).toBe("Bela Lugosi");
    });

    // test('should throw error if current page is last page', () => {
    //   pagination.currentPage = 5
    //   const spy = jest.spyOn(pagination, 'nextPage', 'get')
    //   expect(spy).toThrow('No further page available for last page')
    // })

    test("should call the name getter", () => {
      const spy = jest.spyOn(person, "name", "get");
      const name = person.name;
      expect(spy).toHaveBeenCalled();
    });
  });
});
