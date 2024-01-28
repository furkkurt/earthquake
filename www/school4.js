class school4 extends Phaser.Scene{
  constructor(){
    super("school4")
  }

  create(){
    this.depth = 9999;

    const centerX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const centerY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

    const bg = this.add.sprite(0, 0, "emptyYard").setOrigin(0);
    bg.setScale(this.cameras.main.width/bg.width, this.cameras.main.height/bg.height);

    this.teacher = this.physics.add.sprite(125, 680, "teacher").setOrigin(0).setFlipX(true).setDepth(1.01).setScale(3.25);
    this.teacher.flipX = false
    this.kid1 = this.physics.add.sprite(50, 680, "kid1").setOrigin(0).setDepth(1.01).setScale(3);
    this.kid2 = this.physics.add.sprite(-25, 680, "kid2").setOrigin(0).setDepth(1.01).setScale(3);
    this.kid3 = this.physics.add.sprite(-100, 700, "kid3").setOrigin(0).setDepth(1.01).setScale(3);

    this.kid1.play("kid1Run")
    this.kid2.play("kid2Run")
    this.kid3.play("kid3Run")
    this.teacher.play("teacherRun")

    this.teacher.setVelocityX(200)

    let black = this.add.sprite(0, 0, "black").setOrigin(0).setDepth(999).setScale(100)
    this.time.addEvent({
      delay: 20,
      callback:() =>{
        black.alpha -= .01
      }, repeat: 100
    })

    this.time.addEvent({
      delay: 5000,
      callback:() =>{
        this.intro()
      }
    })
  }

  intro() {
    this.teacher.setVelocity(0)
    this.kid1.play("kid1Idle")
    this.kid2.play("kid2Idle")
    this.kid3.play("kid3Idle")
    this.teacher.play("teacherIdle")
    this.teacher.flipX = true
  } 

  update() {
    this.kid1.y = this.teacher.y 
    this.kid1.x = this.teacher.x -300
    this.kid2.y = this.teacher.y 
    this.kid2.x = this.kid1.x -150
    this.kid3.y = this.teacher.y +20
    this.kid3.x = this.kid2.x -150
  }
}
