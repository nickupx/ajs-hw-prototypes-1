/* eslint-disable linebreak-style */
import {
  Bowman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../character';

test('should create', () => {
  const result = new Magician('Gandalf', 'Magician');
  expect(result).toEqual({
    name: 'Gandalf', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  });
});

test('should create', () => {
  const result = new Zombie('Carl', 'Zombie');
  expect(result).toEqual({
    name: 'Carl', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  });
});

test('should create', () => {
  const result = new Bowman('Legolas', 'Bowman');
  expect(result).toEqual({
    name: 'Legolas', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
});

test('should create', () => {
  const result = new Daemon('Somebody', 'Daemon');
  expect(result).toEqual({
    name: 'Somebody', health: 100, level: 1, attack: 10, type: 'Daemon', defence: 40,
  });
});

test('should create', () => {
  const result = new Swordsman('Somebody', 'Swordsman');
  expect(result).toEqual({
    name: 'Somebody', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  });
});

test('should create', () => {
  const result = new Undead('Somebody', 'Undead');
  expect(result).toEqual({
    name: 'Somebody', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  });
});

test('short name', () => {
  expect(() => new Zombie('V', 'Zombie')).toThrow('Incorrect parameters');
});

test('wrong type', () => {
  expect(() => new Zombie('Igor', 'Programmer')).toThrow('Incorrect parameters');
});

test('should level up', () => {
  const result = new Swordsman('Somebody', 'Swordsman');
  result.levelUp();
  expect(result).toEqual({
    name: 'Somebody', type: 'Swordsman', health: 100, level: 2, attack: 48, defence: 12,
  });
});

test('should not level up', () => {
  const result = new Swordsman('Somebody', 'Swordsman');
  result.health = 0;
  expect(() => result.levelUp()).toThrow('already dead');
});

test('should damage', () => {
  const result = new Swordsman('Somebody', 'Swordsman');
  result.damage(5);
  expect(result).toEqual({
    name: 'Somebody', type: 'Swordsman', health: 95.5, level: 1, attack: 40, defence: 10,
  });
});

test('should be dead', () => {
  const result = new Swordsman('Somebody', 'Swordsman');
  result.health = 0;
  expect(() => result.damage(10)).toThrow('already dead');
});
