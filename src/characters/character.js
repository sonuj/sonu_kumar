export default class Character {
    constructor(player, iconUrl){
      this.player = player;
      this.style = {backgroundImage: "url("+iconUrl+")"};
    }
}