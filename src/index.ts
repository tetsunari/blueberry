class A {
    foo = 123;
    bar = this.foo + 100;
}
const obj = new A();
console.log(obj.bar); // 223

class B {
    foo = 123;
    bar = this.foo + 100;
    getFoo() {
        return this.foo;
    }
}
const obj2 = new B();
console.log(obj2.bar, obj2.getFoo()); // 223 123

class C {
    static foo = 123;
    static bar = this.foo + 100;
    static {
        console.log(this.foo); // 123
        console.log(this.bar); // 223
    }
}
