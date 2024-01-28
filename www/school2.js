class school2 extends Phaser.Scene{
  constructor(){
    super("school2")
  }

  create(){
    this.depth = 9999;

    const centerX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const centerY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

    const bg = this.add.sprite(0, 0, "classroomBG").setOrigin(0);
    bg.setScale(this.cameras.main.width/bg.width, this.cameras.main.height/bg.height);

    this.chair1 = this.add.sprite(0, 600, "chair").setOrigin(0).setScale(.6);
    this.chair2 = this.add.sprite(450, 600, "chair").setOrigin(0).setScale(.6);
    this.chair3 = this.add.sprite(900, 600, "chair").setOrigin(0).setScale(.6);
    this.desk4 = this.add.sprite(1550, 550, "desk").setOrigin(0).setScale(.6).setFlipX(true).setDepth(2);
    this.desk1 = this.add.sprite(200, 550, "desk2").setOrigin(0).setScale(1.1).setDepth(1.01);
    this.desk2 = this.add.sprite(650, 550, "desk2").setOrigin(0).setScale(1.1).setDepth(1.01);
    this.desk3 = this.add.sprite(1100, 550, "desk2").setOrigin(0).setScale(1.1).setDepth(1.01);
    this.teacher = this.physics.add.sprite(1720, 650, "teacher").setOrigin(0).setScale(3.25).setFlipX(true).setDepth(1.01).setRotation(1.1);
    this.teacher.flipX = false
    this.kid1 = this.physics.add.sprite(1250, 650, "kid1").setOrigin(0).setScale(3).setRotation(1.1);
    this.kid2 = this.physics.add.sprite(850, 650, "kid2").setOrigin(0).setScale(3).setRotation(1.1);
    this.kid3 = this.physics.add.sprite(350, 660, "kid3").setOrigin(0).setScale(3).setRotation(1.1);
    this.score = 3;

    this.kid1.play("kid1Idle")
    this.kid2.play("kid2Idle")
    this.kid3.play("kid3Idle")
    this.teacher.play("teacherIdle")

    this.dust = this.add.sprite(0,0,"dust").setOrigin(0).setDepth(99);
    this.dust.setScale(this.cameras.main.width/this.dust.width);
    this.crack1 = this.add.sprite(1500,260,"crack").setScale(1.5).setOrigin(0);
    this.fluorescent = this.add.sprite(150,500,"fluorescent").setOrigin(0).setDepth(98);
    this.rubble = this.add.sprite(1300, 900, "rubble").setOrigin(0);
    this.crack2 = this.add.sprite(570,260,"crack2").setScale(.35).setOrigin(0);
    this.crack3 = this.add.sprite(434,300,"crack2").setScale(.35).setOrigin(0);
    this.outside = this.add.sprite(1245,225,"outside").setOrigin(0).setDepth(1);
    this.door = this.outside
    this.window = this.crack3

    this.crack1.alpha = this.rubble.alpha = .4
    this.fluorescent.alpha = .7
    this.time.addEvent({
      delay: 2000,
      callback:() =>{
        this.time.addEvent({
          delay: 20,
          callback:() =>{
            this.dust.alpha -= .01
          }, repeat: 100
        })
      }
    })

    let black = this.add.sprite(0, 0, "black").setOrigin(0).setDepth(999)
    black.setScale(100)
    this.time.addEvent({
      delay: 20,
      callback:() =>{
        black.alpha -= .01
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
    this.kid1.rotation = this.kid2.rotation = this.kid3.rotation = this.teacher.rotation = 0
    this.kid1.x -= 200 
    this.kid2.x -= 200 
    this.kid3.x -= 200 
    this.teacher.x -= 200 
    this.kid1.setDepth(99)
    this.kid2.setDepth(99)
    this.kid3.setDepth(99)
    this.teacher.setDepth(99)
    this.teacher.flipX = true

    this.time.addEvent({
      delay: 1000,
      callback:() =>{
        this.physics.moveTo(this.kid1, 1200, this.kid1.y, 200)
        this.physics.moveTo(this.kid2, 1200, this.kid1.y, 200)
        this.physics.moveTo(this.kid3, 1200, this.kid1.y, 200)
        this.physics.moveTo(this.teacher, 1200, this.kid1.y, 200)
        this.kid1.play("kid1Run")
        this.kid2.play("kid2Run")
        this.kid3.play("kid3Run")
        this.teacher.play("teacherRun").setDepth(1.01)
        this.time.addEvent({
          delay: 1000,
          callback:() =>{
            this.physics.moveTo(this.teacher, 1200, 0, 200)
            this.time.addEvent({
              delay: 750,
              callback:() =>{
                this.physics.moveTo(this.kid1, 1200, 0, 200)
                this.time.addEvent({
                  delay: 1750,
                  callback:() =>{
                    this.teacher.setVelocity(0)
                    this.teacher.setVisible(false)
                    this.time.addEvent({
                      delay: 500,
                      callback:() =>{
                        this.kid1.setVelocity(0)
                        this.kid1.setVisible(false)
                      }
                    })
                    this.physics.moveTo(this.kid2, 1200, 0, 200)
                    this.time.addEvent({
                      delay: 2500,
                      callback:() =>{
                        this.kid2.setVelocity(0)
                        this.kid2.setVisible(false)
                        this.physics.moveTo(this.kid3, 1200, 0, 200)
                        this.time.addEvent({
                          delay: 2000,
                          callback:() =>{
                            this.kid3.setVelocity(0)
                            this.kid3.setVisible(false)
                            this.time.addEvent({
                              delay: 1000,
                              callback:() =>{
                                this.scene.start("school3")
                              }
                            })
                          }
                        })
                      }
                    })
                  }
                })
              }
            })
          }
        })
      }
    })
  }

  update() {
  }
}
