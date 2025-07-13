class Sprite {
    public sprite: any = {
        name:"",
        pos: {
            x: 0,
            y: 0
        },
        id:""
    };
    constructor(name: string, posX: number, posY: number, image_id?: number) {
        this.sprite.name = name
        this.sprite.pos = {}; this.sprite.pos.x = posX; this.sprite.pos.Y = posY;
    }
    public drawSpriteToScreen() {
        this
    }
}


var CREATED_SPRITES: any = {

}