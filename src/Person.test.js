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
      }).toThrow(TypeError);
    });
  });

  describe("get name", () => {
    let person = new Person("Bela Lugosi");

    test("should call the name getter", () => {
      const spy = jest.spyOn(person, "name", "get");
      const name = person.name;
      expect(spy).toHaveBeenCalled();
    });

    test("should return the name of the person", () => {
      expect(person.name).toBe("Bela Lugosi");
    });
  });

  describe("set name", () => {
    let person = new Person("Bela Lugosi");

    test("should call the name setter", () => {
      const spy = jest.spyOn(person, "name", "set");
      person.name = "Caroll Borland";
      expect(spy).toHaveBeenCalled();
    });

    test('should set person._name to the passed argument \'Lon Chaney junior\'', () => {
      person.name = 'Lon Chaney'
      expect(person._name).toBe('Lon Chaney')
    })

    test('should throw error if passed argument \'name\' isn\'t of type String', () => {
      expect(() => {
        person.name = 1;
      }).toThrow(TypeError)
    })
  });
});
