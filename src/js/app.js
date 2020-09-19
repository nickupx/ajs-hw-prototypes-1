/* eslint-disable linebreak-style */
/* eslint-disable default-case */

export default function Character(name, type) {
  // TODO: add logic here
  const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  if (typeof name === 'string' && name.length >= 2 && name.length <= 10 && types.includes(type)) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    switch (type) {
      case 'Bowman':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Swordsman':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Magician':
        this.attack = 10;
        this.defence = 40;
        break;
      case 'Undead':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Zombie':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Daemon':
        this.attack = 10;
        this.defence = 40;
        break;
    }
  } else {
    // выведем универсальную ошибку, лень разбивать логику
    throw new Error('Incorrect parameters');
  }
}
