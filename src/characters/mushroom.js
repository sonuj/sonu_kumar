import Character from './character.js';

export default class Mushroom extends Character {
  constructor(player){
    super(player, "https://upload.wikimedia.org/wikipedia/commons/2/24/Champi%C3%B1%C3%B3n.png");
  }

    isMovePossible(src, dest){
        return false;
    }

    getSrcToDestPath(src, dest){
        return [];
    }
}