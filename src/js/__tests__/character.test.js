/* eslint-disable linebreak-style */
import Character from '../character';

test('should create', () => {
  const result = new Character('Gandalf', 'Magician');
  expect(result).toEqual({
    name: 'Gandalf', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  });
});

test('should create', () => {
  const result = new Character('Carl', 'Zombie');
  expect(result).toEqual({
    name: 'Carl', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  });
});

test('should create', () => {
  const result = new Character('Legolas', 'Bowman');
  expect(result).toEqual({
    name: 'Legolas', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
});

test('should create', () => {
  const result = new Character('Somebody', 'Daemon');
  expect(result).toEqual({
    name: 'Somebody', health: 100, level: 1, attack: 10, type: 'Daemon', defence: 40,
  });
});

test('should create', () => {
  const result = new Character('Somebody', 'Swordsman');
  expect(result).toEqual({
    name: 'Somebody', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  });
});

test('should create', () => {
  const result = new Character('Somebody', 'Undead');
  expect(result).toEqual({
    name: 'Somebody', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  });
});

test('short name', () => {
  expect(() => new Character('V', 'Zombie')).toThrow('Incorrect parameters');
});

test('wrong type', () => {
  expect(() => new Character('Igor', 'Programmer')).toThrow('Incorrect parameters');
});

test('should level up', () => {
  const result = new Character('Somebody', 'Swordsman');
  result.levelUp();
  expect(result).toEqual({
    name: 'Somebody', type: 'Swordsman', health: 100, level: 2, attack: 48, defence: 12,
  });
});

test('should damage', () => {
  const result = new Character('Somebody', 'Swordsman');
  result.damage(5);
  expect(result).toEqual({
    name: 'Somebody', type: 'Swordsman', health: 95.5, level: 1, attack: 40, defence: 10,
  });
});

test('should be dead', () => {
  const result = new Character('Somebody', 'Swordsman');
  result.health = 0;
  expect(() => result.damage(10)).toThrow('already dead');
});
