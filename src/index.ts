'use strict';

{
  function printNumberTwice(num: number): void {
    console.log(num);
    console.log(num);
  }

  function printStringTwice(str: string): void {
    console.log(str);
    console.log(str);
  }

  function printTwice<T>(value: T): void {
    console.log(value);
    console.log(value);
  }

  printTwice<number>(10);
  printTwice<string>('OK');
}
