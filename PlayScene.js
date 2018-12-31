class PlayScene extends Phaser.Scene{

    constructor(){
        super({key : "play"
    });
    }

    preload(){

        this.load.image("tile_image","jungletileset.png");

        this.load.tilemapTiledJSON("map", "new_map.json");
        
       // this.add.spritesheet('run_sheet','run.png',{frameWidth : 21,frameHeight : 33});

        // this.run_anim = this.player.animations.add('run');

        // this.animations.play;

        //console.log()
    
    }

    create(){

     // this.player = this.add.sprite(100,100,'run_sheet');

        var map = this.add.tilemap("map");

        var tileset = map.addTilesetImage("jungle_tiles",'tile_image');

        var layer = map.createStaticLayer("main",tileset);

        var items = map.createFromObjects("item" , 9 , {} , this); 

        //console.log(map);

        // this.add.text(100,100,"Play",{fill : "#fff"})

        // this.scene.switch('menu') ;
    }
}