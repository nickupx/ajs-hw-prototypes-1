/* eslint-disable semi */
/* eslint-disable linebreak-style */
function Character(name, type) {
  // TODO: add logic here
  const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']
  if (typeof name === 'string' && name.length >= 2 && name.length <= 10 && types.includes(type)) {
    this.name = name;
    this.type = type;
  } else {
    // выведем универсальную ошибку, лень разбивать логику
    throw new Error('Incorrect parameters')
  }
  
  
}

const gandalf = new Character('Gandalf', 'Magician')
console.log(gandalf)