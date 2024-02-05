'use strict';

{
  // type User = {
  //   userName: string;
  //   score: number;
  // };

  interface User {
    userName: string;
    score: number;
  }

  // const user: {userName: string; score: number} = {
  const user: User = {
    userName: 'Taro',
    score: 80,
  };

  user.userName = 'Jiro';
  user.score = 90;
  user.userName = true;
  user.email = 'taro@example.com';
}
