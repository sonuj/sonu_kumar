import Character from './character.js';

export default class Mario extends Character {
    constructor(player){
        super(player, "https://upload.wikimedia.org/wikipedia/mk/9/99/MarioSMBW.png");
    }

    isMovePossible(src, dest){
        return ( 
          src - 8 === dest || 
          src + 1 === dest || 
          src + 8 === dest ||
          src - 1 === dest);
    }

    getSrcToDestPath(src, dest){
        return [];
    }
}