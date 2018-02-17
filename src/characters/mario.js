import Character from './character.js';

export default class Mario extends Character {
  constructor(player){
    super(player, "https://upload.wikimedia.org/wikipedia/mk/9/99/MarioSMBW.png");
  }

    getSrcToDestPath(src, dest){
        return [];
    }
}