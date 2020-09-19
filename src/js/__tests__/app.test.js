/* eslint-disable linebreak-style */
import Character from '../app';

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
    name: 'Somebody', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
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

test('should error', () => {
  expect(() => new Character('V', 'Zombie')).toThrow('Incorrect parameters');
});

test('should error', () => {
  expect(() => new Character('Igor', 'Programmer')).toThrow('Incorrect parameters');
});
