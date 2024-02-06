'use strict';

{
  // const double = (num: number): number => {
  //   // return num * 2;
  //   return 'OK';
  // };

  let double: (num: number) => number;
  double = (num: number): number => {
    // return num * 2;
    return 'OK';
  };

  console.log(double(10));
  console.log(double('OK'));
}
