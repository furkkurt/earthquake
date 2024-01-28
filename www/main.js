var config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  backgroundColor: '#ccc',
  scale: {
    mode: Phaser.Scale.FIT,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
  scene: [preloader, menu, street, school, school2],
};

var game = new Phaser.Game(config);
