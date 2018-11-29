export default class Person {
  constructor(name) {
    if (typeof name !== "string") {
      throw new TypeError("Argument 'name' must be of type String");
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== "string") {
      throw new TypeError("Argument 'newName' must be of type String");
    }
    this._name = newName;
  }
}
