class school3 extends Phaser.Scene{
  constructor(){
    super("school3")
  }

  create(){
    this.depth = 9999;

    const centerX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const centerY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

    const bg = this.add.sprite(0, 0, "yard").setOrigin(0);
    bg.setScale(this.cameras.main.width/bg.width, this.cameras.main.height/bg.height);

    this.teacher = this.physics.add.sprite(125, 680, "teacher").setOrigin(0).setFlipX(true).setDepth(1.01);
    this.teacher.flipX = false
    this.kid1 = this.physics.add.sprite(50, 680, "kid1").setOrigin(0).setDepth(1.01);
    this.kid2 = this.physics.add.sprite(-25, 680, "kid2").setOrigin(0).setDepth(1.01);
    this.kid3 = this.physics.add.sprite(-100, 700, "kid3").setOrigin(0).setDepth(1.01);
    this.teacher.body.setSize(this.teacher.width/2, this.teacher.height/3, true)
    this.teacher.body.setOffset(15, 60)
    this.teacher.setScale(3.25)
    this.kid1.body.setSize(this.kid1.width/2, this.kid1.height/3, true)
    this.kid1.body.setOffset(15, 60)
    this.kid1.setScale(3)
    this.kid2.body.setSize(this.kid1.width/2, this.kid1.height/3, true)
    this.kid2.body.setOffset(15, 60)
    this.kid2.setScale(3)
    this.kid3.body.setSize(this.kid1.width/2, this.kid1.height/3, true)
    this.kid3.body.setOffset(15, 60)
    this.kid3.setScale(3)

    this.kid1.play("kid1Idle")
    this.kid2.play("kid2Idle")
    this.kid3.play("kid3Idle")
    this.teacher.play("teacherIdle")

    this.rubble = this.add.sprite(1300, 900, "rubble").setOrigin(0).setDepth(1.02);
    this.rubble = this.add.sprite(1300, 700, "rubble").setOrigin(0);
    this.rubble = this.add.sprite(1300, 600, "rubble").setOrigin(0);

    this.rubble = this.add.sprite(800, 800, "rubble").setOrigin(0);
    this.rubble = this.add.sprite(800, 700, "rubble").setOrigin(0);
    this.rubble = this.add.sprite(800, 600, "rubble").setOrigin(0);

    this.rubble = this.add.sprite(300, 900, "rubble").setOrigin(0);
    this.rubble = this.add.sprite(300, 800, "rubble").setOrigin(0);

    this.collisionBox1 = this.physics.add.sprite(350, 875, "black").setOrigin(0).setScale(10).setVisible(false).setImmovable()
    this.collisionBox2 = this.physics.add.sprite(850, 650, "black").setOrigin(0).setScale(10).setVisible(false).setImmovable()
    this.collisionBox3 = this.physics.add.sprite(1350, 525, "black").setOrigin(0).setScale(10).setVisible(false).setImmovable()
    this.collisionBox4 = this.physics.add.sprite(1350, 975, "black").setOrigin(0).setScale(10).setVisible(false).setImmovable()
    this.collisionBox5 = this.physics.add.sprite(0, 0, "black").setOrigin(0).setScale(60, 20).setVisible(false).setImmovable()
    this.collisionBox6 = this.physics.add.sprite(0, 1100, "black").setOrigin(0).setScale(60, 20).setVisible(false).setImmovable()
    this.collisionBox7 = this.physics.add.sprite(-100, 0, "black").setOrigin(0).setScale(5, 50).setVisible(false).setImmovable()
    this.collisionBox8 = this.physics.add.sprite(1800, 0, "black").setOrigin(0).setScale(5, 50).setVisible(false).setImmovable()

    this.physics.add.collider(this.teacher, this.collisionBox1)
    this.physics.add.collider(this.teacher, this.collisionBox2)
    this.physics.add.collider(this.teacher, this.collisionBox3)
    this.physics.add.collider(this.teacher, this.collisionBox4)
    this.physics.add.collider(this.teacher, this.collisionBox5)
    this.physics.add.collider(this.teacher, this.collisionBox6)
    this.physics.add.collider(this.teacher, this.collisionBox7)
    this.physics.add.collider(this.teacher, this.collisionBox8, () => {this.finish()})

    this.interactiveBox = this.add.sprite(0,0,"black").setOrigin(0).setScale(100).setInteractive();
    this.interactiveBox.alpha = .01;
    this.interactiveBox.on("pointerdown", () => {this.move()})
    this.interactiveBox.on("pointerup", () => {this.stop()})

    this.black = this.add.sprite(0, 0, "black").setOrigin(0).setDepth(999).setScale(100)
    this.time.addEvent({
      delay: 20,
      callback:() =>{
        this.black.alpha -= .01
      }, repeat: 100
    })

    this.time.addEvent({
      delay: 3000,
      callback:() =>{
        this.intro()
      }
    })
  }

  intro() {
  } 

  move() {
    this.physics.moveTo(this.teacher, game.input.activePointer.x, game.input.activePointer.y, 200)
    this.teacher.play("teacherRun")
    this.kid1.play("kid1Run")
    this.kid2.play("kid2Run")
    this.kid3.play("kid3Run")
  }

  stop() {
    this.teacher.setVelocity(0)
    this.kid1.setVelocity(0)
    this.kid2.setVelocity(0)
    this.kid3.setVelocity(0)
    this.teacher.play("teacherIdle")
    this.kid1.play("kid1Idle")
    this.kid2.play("kid2Idle")
    this.kid3.play("kid3Idle")
  }

  finish() {
    this.teacher.setVelocityX(200)
    this.time.addEvent({
      delay: 20,
      callback:() =>{
        this.black.alpha += .01
      }, repeat: 100
    })
    this.time.addEvent({
      delay: 1000,
      callback:() =>{
        this.scene.start("school4")
      }
    })
  }

  update() {
    this.kid1.y = this.teacher.y 
    this.kid1.x = this.teacher.x -75
    this.kid2.y = this.teacher.y 
    this.kid2.x = this.kid1.x -75
    this.kid3.y = this.teacher.y +20
    this.kid3.x = this.kid2.x -75
  }
}
