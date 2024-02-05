'use strict';

{
  interface User {
    readonly userName: string;
    score: number;
    email?: string;
  }

  const user: User = {
    userName: 'Taro',
    score: 80,
  };

  console.log(user.userName);
  user.userName = 'Jiro';
}
