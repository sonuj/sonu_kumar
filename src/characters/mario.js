import Character from './character.js';

export default class Mario extends Character {
    constructor(player){
        super(player, "http://res.cloudinary.com/payjo-in/image/upload/c_scale,w_24/v1502452976/1200x630bb_vokqee.jpg");
    }

    isMovePossible(src, dest, isenemy, col, row){
        return ( 
          src - col === dest || 
          src + 1 === dest || 
          src + col === dest ||
          src - 1 === dest);
    }

    getSrcToDestPath(src, dest){
        return [];
    }
}