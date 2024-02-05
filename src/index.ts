'use strict';

{
  const scores: readonly number[] = [70, 90, 80];
  scores[1] = 100;
  scores.push(60);
  scores[2] = 'Hello';
  scores.push('OK');

  const values: (string | number)[] = ['Taro', 70, 'Jiro'];
  values[2] = 80;
  values.push('Saburo');
  values.push(true);
}
