'use strict';

{
  const values: readonly [string, number] = ['Taro', 70];
  values[0] = 'Jiro';
  values[1] = 90;
  values[0] = 70;
  values[1] = 'Saburo';
}
