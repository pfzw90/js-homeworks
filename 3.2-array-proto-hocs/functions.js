"use strict";
console.clear();


const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
console.log(weapons);

let getNames = () => weapons.map(weapon => weapon.name);
let getCountReliableWeapons = (dur) => weapons.filter(weapon => weapon.durability > dur).length;
let hasReliableWeapons = (rel) => weapons.some(weapon => weapon.initDurability > rel);
let getReliableWeaponsNames = (rel) => weapons.filter(weapon => weapon.initDurability > rel).map(weapon => weapon.name);
let getTotalDamage = () => weapons.reduce((totalDmg, weapon) => totalDmg + weapon.attack , 0);