class preloader extends Phaser.Scene {
  constructor() {
    super("boot");
  };
  preload(){
    this.load.image("tree1", "assets/tree1.png");
    this.load.image("tree2", "assets/tree2.png");
    this.load.image("tree3", "assets/tree3.png");
    this.load.image("tree4", "assets/tree4.png");
    this.load.image("tree5", "assets/tree5.png");
    this.load.image("road", "assets/road.png");
    this.load.image("desk", "assets/desk.png");
    this.load.image("desk2", "assets/desk2.png");
    this.load.image("chair", "assets/chair.png");
    this.load.image("circle", "assets/circle.png");
    this.load.atlas("kid1", "assets/kid1.png", "assets/kid1.json");
    this.load.atlas("kid2", "assets/kid2.png", "assets/kid2.json");
    this.load.atlas("kid3", "assets/kid3.png", "assets/kid3.json");
    this.load.atlas("teacher", "assets/teacher.png", "assets/teacher.json");
    this.load.image("classroomBG", "assets/classroom4.png");
    this.load.atlas("boy1", "assets/boy1.png", "assets/boy1.json");
    this.load.image("rubble", "assets/rubble.png");
    this.load.image("fluorescent", "assets/fluorescent.png");
    this.load.image("crack", "assets/crack.png");
    this.load.image("dust", "assets/dust.png");
    this.load.image("crack2", "assets/crack2.png");
    this.load.image("outside", "assets/outside.png");
    this.load.image("plank", "assets/plank.png")
    this.load.image("glass", "assets/glassB.png")
    this.load.image("black", "assets/black.png")
    this.load.image("yard", "assets/yard.jpg")
    this.load.image("emptyYard", "assets/emptyYard.jpg")
    this.load.image("menuBg", "assets/menuBg.jpg")
    this.load.image("iconSchool", "assets/iconSchool.png")
    this.load.image("left", "assets/left.png")

    this.load.atlas("character1", "assets/character1.png", "assets/character1.json");
	};
	create(){
    this.anims.create({
      key: "characterRun",
      frameRate: 8,
      frames: [{key:"character1", frame:"1"}, {key:"character1", frame:"2"}, {key:"character1", frame:"3"}, {key:"character1", frame:"4"}, {key:"character1", frame:"5"}, {key:"character1", frame:"6"}, {key:"character1", frame:"7"}, {key:"character1", frame:"8"}],
      repeat: -1
    })
    this.anims.create({
      key: "kid1Run",
      frameRate: 21,
      frames: [{key:"kid1", frame:"0"}, {key:"kid1", frame:"1"}, {key:"kid1", frame:"2"}, {key:"kid1", frame:"3"}, {key:"kid1", frame:"4"}, {key:"kid1", frame:"5"}, {key:"kid1", frame:"6"},  {key:"kid1", frame:"7"}, {key:"kid1", frame:"8"}, {key:"kid1", frame:"9"}, {key:"kid1", frame:"10"}, {key:"kid1", frame:"11"}, {key:"kid1", frame:"12"}, {key:"kid1", frame:"13"}, {key:"kid1", frame:"14"}, {key:"kid1", frame:"15"}, {key:"kid1", frame:"16"}, {key:"kid1", frame:"17"}, {key:"kid1", frame:"18"}, {key:"kid1", frame:"19"}, {key:"kid1", frame:"20"}],
      repeat: -1
    })
    this.anims.create({
      key: "kid1Idle",
      frameRate: 1,
      frames: [{key:"kid1", frame:"7"}],
      repeat: -1
    })
    this.anims.create({
      key: "kid2Run",
      frameRate: 42,
      frames: [{key:"kid2", frame:"0"}, {key:"kid2", frame:"1"}, {key:"kid2", frame:"2"}, {key:"kid2", frame:"3"}, {key:"kid2", frame:"4"}, {key:"kid2", frame:"5"}, {key:"kid2", frame:"6"}, {key:"kid2", frame:"7"}, {key:"kid2", frame:"8"}, {key:"kid2", frame:"9"}, {key:"kid2", frame:"10"}, {key:"kid2", frame:"11"}, {key:"kid2", frame:"12"}, {key:"kid2", frame:"13"}, {key:"kid2", frame:"14"}, {key:"kid2", frame:"15"}, {key:"kid2", frame:"16"}, {key:"kid2", frame:"17"}, {key:"kid2", frame:"18"}, {key:"kid2", frame:"19"}, {key:"kid2", frame:"20"}, {key:"kid2", frame:"21"}, {key:"kid2", frame:"22"}, {key:"kid2", frame:"23"}, {key:"kid2", frame:"24"}, {key:"kid2", frame:"25"}, {key:"kid2", frame:"26"}, {key:"kid2", frame:"27"}, {key:"kid2", frame:"28"}, {key:"kid2", frame:"29"}, {key:"kid2", frame:"30"}, {key:"kid2", frame:"31"}, {key:"kid2", frame:"32"}, {key:"kid2", frame:"33"}, {key:"kid2", frame:"34"}, {key:"kid2", frame:"35"}, {key:"kid2", frame:"36"}, {key:"kid2", frame:"37"}, {key:"kid2", frame:"38"}, {key:"kid2", frame:"39"}, {key:"kid2", frame:"40"}, {key:"kid2", frame:"41"}, {key:"kid2", frame:"42"}],
      repeat: -1
    })
    this.anims.create({
      key: "kid2Idle",
      frameRate: 1,
      frames: [{key:"kid2", frame:"16"}],
      repeat: -1
    })

    this.anims.create({
      key: "kid3Run",
      frameRate: 42,
      frames: [{key:"kid3", frame:"0"}, {key:"kid3", frame:"1"}, {key:"kid3", frame:"2"}, {key:"kid3", frame:"3"}, {key:"kid3", frame:"4"}, {key:"kid3", frame:"5"}, {key:"kid3", frame:"6"}, {key:"kid3", frame:"7"}, {key:"kid3", frame:"8"}, {key:"kid3", frame:"9"}, {key:"kid3", frame:"10"}, {key:"kid3", frame:"11"}, {key:"kid3", frame:"12"}, {key:"kid3", frame:"13"}, {key:"kid3", frame:"14"}, {key:"kid3", frame:"15"}, {key:"kid3", frame:"16"}, {key:"kid3", frame:"17"}, {key:"kid3", frame:"18"}, {key:"kid3", frame:"19"}, {key:"kid3", frame:"20"}, {key:"kid3", frame:"21"}, {key:"kid3", frame:"22"}, {key:"kid3", frame:"23"}, {key:"kid3", frame:"24"}, {key:"kid3", frame:"25"}, {key:"kid3", frame:"26"}, {key:"kid3", frame:"27"}, {key:"kid3", frame:"28"}, {key:"kid3", frame:"29"}, {key:"kid3", frame:"30"}, {key:"kid3", frame:"31"}, {key:"kid3", frame:"32"}, {key:"kid3", frame:"33"}, {key:"kid3", frame:"34"}, {key:"kid3", frame:"35"}, {key:"kid3", frame:"36"}, {key:"kid3", frame:"37"}, {key:"kid3", frame:"38"}, {key:"kid3", frame:"39"}, {key:"kid3", frame:"40"}, {key:"kid3", frame:"41"}, {key:"kid3", frame:"42"}],
      repeat: -1
    })
    this.anims.create({
      key: "kid3Idle",
      frameRate: 1,
      frames: [{key:"kid3", frame:"16"}],
      repeat: -1
    })

    this.anims.create({
      key: "teacherRun",
      frameRate: 42,
      frames: [{key:"teacher", frame:"0"}, {key:"teacher", frame:"1"}, {key:"teacher", frame:"2"}, {key:"teacher", frame:"3"}, {key:"teacher", frame:"4"}, {key:"teacher", frame:"5"}, {key:"teacher", frame:"6"}, {key:"teacher", frame:"7"}, {key:"teacher", frame:"8"}, {key:"teacher", frame:"9"}, {key:"teacher", frame:"10"}, {key:"teacher", frame:"11"}, {key:"teacher", frame:"12"}, {key:"teacher", frame:"13"}, {key:"teacher", frame:"14"}, {key:"teacher", frame:"15"}, {key:"teacher", frame:"16"}, {key:"teacher", frame:"17"}, {key:"teacher", frame:"18"}, {key:"teacher", frame:"19"}, {key:"teacher", frame:"20"}, {key:"teacher", frame:"21"}, {key:"teacher", frame:"22"}, {key:"teacher", frame:"23"}, {key:"teacher", frame:"24"}, {key:"teacher", frame:"25"}, {key:"teacher", frame:"26"}, {key:"teacher", frame:"27"}, {key:"teacher", frame:"28"}, {key:"teacher", frame:"29"}, {key:"teacher", frame:"30"}, {key:"teacher", frame:"31"}, {key:"teacher", frame:"32"}, {key:"teacher", frame:"33"}, {key:"teacher", frame:"34"}, {key:"teacher", frame:"35"}, {key:"teacher", frame:"36"}, {key:"teacher", frame:"37"}, {key:"teacher", frame:"38"}, {key:"teacher", frame:"39"}, {key:"teacher", frame:"40"}, {key:"teacher", frame:"41"}, {key:"teacher", frame:"42"}],
      repeat: -1
    })
    this.anims.create({
      key: "teacherIdle",
      frameRate: 1,
      frames: [{key:"teacher", frame:"16"}],
      repeat: -1
    })
    this.anims.create({
      key: "boy1Run",
      frameRate: 6,
      frames: [{key:"boy1", frame:"3"}, {key:"boy1", frame:"4"}, {key:"boy1", frame:"5"}, {key:"boy1", frame:"6"}, {key:"boy1", frame:"7"}, {key:"boy1", frame:"8"}],
      repeat: -1
    })

		this.scene.start("menu");
	}
}
