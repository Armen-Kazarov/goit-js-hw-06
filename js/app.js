'use strict';

import users from './users.js';

console.group('Task-1');
const getUserNames = users => {

  return users.map(function(user) {

    return user.name;
  });
}

console.log(getUserNames(users));
console.groupEnd();

console.group('Task-2');
const getUsersWithEyeColor = (users, color) => {

  return users.filter(user => user.eyeColor === color)
};

console.log(getUsersWithEyeColor(users, 'blue'));
console.groupEnd();

console.group('Task-3');
const getUsersWithGender = (users, gender) => {

  return users.filter(user => user.gender === gender)
      .map(user => user.name);
};

console.log(getUsersWithGender(users, 'male'));
console.groupEnd();

console.group('Task-4');
const getInactiveUsers = users => {

  return users.filter(user => !user.isActive)
};

console.log(getInactiveUsers(users));
console.groupEnd();

console.group('Task-5');
const getUserWithEmail = (users, email) => {

  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
console.groupEnd();

console.group('Task-6');
const getUsersWithAge = (users, min, max) => {

  return users.filter(user => user.age ? user.age >= min && user.age <= max : users);
};

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));
console.groupEnd();

console.group('Task-7');
const calculateTotalBalance = users => {

  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users));
console.groupEnd();

console.group('Task-8');
const getUsersWithFriend = (users, friendName) => {

  return users.filter(user => user.friends.includes(friendName))
      .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
console.groupEnd();

console.group('Task-9');
const getNamesSortedByFriendsCount = users => {

  return users.sort((user1, user2) => user1.friends.length - user2.friends.length)
      .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
console.groupEnd();

console.group('Task-10');
const getSortedUniqueSkills = users => {

  return users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);

    return allSkills.sort();
  },[])

    .reduce((uniqueSkills, skill) => {

      if(!uniqueSkills.includes(skill)) {
        uniqueSkills.push(skill)
      }

      return uniqueSkills;
    },[])
};

console.log(getSortedUniqueSkills(users));
console.groupEnd();