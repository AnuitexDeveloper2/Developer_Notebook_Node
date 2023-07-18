class Person {
    public _firstName;
    private _lastName;
    private age;
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this.age = age;
    }
    get fullName() {
        return this._lastName + ' ' + this._lastName
    }
}


