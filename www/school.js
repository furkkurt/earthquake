class school extends Phaser.Scene{
  constructor(){
    super("school")
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
    this.desk1 = this.add.sprite(200, 550, "desk2").setOrigin(0).setScale(1.1);
    this.desk2 = this.add.sprite(650, 550, "desk2").setOrigin(0).setScale(1.1);
    this.desk3 = this.add.sprite(1100, 550, "desk2").setOrigin(0).setScale(1.1).setDepth(1.01);
    this.teacher = this.physics.add.sprite(1750, 550, "teacher").setOrigin(0).setScale(3.25).setFlipX(true).setDepth(1.01);
    this.kid1 = this.physics.add.sprite(925, 525, "kid1").setOrigin(0).setScale(3);
    this.kid2 = this.physics.add.sprite(475, 525, "kid2").setOrigin(0).setScale(3);
    this.kid3 = this.physics.add.sprite(20, 550, "kid3").setOrigin(0).setScale(3);
    this.score = 3;

    this.kid1.play("kid1Idle")
    this.kid2.play("kid2Idle")
    this.kid3.play("kid3Idle")
    this.teacher.play("teacherIdle")

    this.desk1circle = this.add.sprite(300,725,"circle").setScale(.4).setVisible(false).setDepth(99);
    this.desk2circle = this.add.sprite(750,725,"circle").setScale(.4).setVisible(false).setDepth(99);
    this.desk3circle = this.add.sprite(1200,725,"circle").setScale(.4).setVisible(false).setDepth(99);
    this.desk4circle = this.add.sprite(1650,725,"circle").setScale(.4).setVisible(false).setDepth(99);
    this.windowCircle = this.add.sprite(560,350,"circle").setScale(.4).setVisible(false).setDepth(99);
    this.doorCircle = this.add.sprite(1330,400,"circle").setScale(.4).setVisible(false).setDepth(99);
    this.scaleUpAndDown(this.desk1circle);
    this.scaleUpAndDown(this.desk2circle);
    this.scaleUpAndDown(this.desk3circle);
    this.scaleUpAndDown(this.desk4circle);
    this.scaleUpAndDown(this.doorCircle);
    this.scaleUpAndDown(this.windowCircle);

    this.desk1Interactive = this.add.sprite(300, 725, "").setScale(9).setInteractive();
    this.desk2Interactive = this.add.sprite(750, 725, "").setScale(9).setInteractive();
    this.desk3Interactive = this.add.sprite(1200, 725, "").setScale(9).setInteractive();
    this.desk4Interactive = this.add.sprite(1650, 725, "").setScale(9).setInteractive();
    this.windowInteractive= this.add.sprite(560, 350, "").setScale(9).setInteractive();
    this.doorInteractive = this.add.sprite(1330, 400, "").setScale(9).setInteractive();
    this.desk1Interactive.alpha = this.desk2Interactive.alpha = this.desk3Interactive.alpha = this.desk4Interactive.alpha = this.doorInteractive.alpha = this.windowInteractive.alpha = .001
    this.desk1Interactive.visible = this.desk2Interactive.visible = this.desk3Interactive.visible = this.desk4Interactive.visible = this.doorInteractive.visible = this.windowInteractive.visible = false
    this.desk1Interactive.on("pointerdown", () => {this.pick("desk1")})
    this.desk2Interactive.on("pointerdown", () => {this.pick("desk2")})
    this.desk3Interactive.on("pointerdown", () => {this.pick("desk3")})
    this.desk4Interactive.on("pointerdown", () => {this.pick("desk4")})
    this.doorInteractive.on("pointerdown", () => {this.pick("door")})
    this.windowInteractive.on("pointerdown", () => {this.pick("window")})
    this.dust = this.add.sprite(0,0,"dust").setOrigin(0).setDepth(99);
    this.dust.alpha = 0
    this.dust.setScale(this.cameras.main.width/this.dust.width);
    this.crack1 = this.add.sprite(1500,260,"crack").setScale(1.5).setOrigin(0).setVisible(false);
    this.fluorescent = this.add.sprite(150,500,"fluorescent").setOrigin(0).setDepth(98).setVisible(false);
    this.rubble = this.add.sprite(1300, 900, "rubble").setOrigin(0).setVisible(false);
    this.crack2 = this.add.sprite(570,260,"crack2").setScale(.35).setOrigin(0).setVisible(false);
    this.crack3 = this.add.sprite(434,300,"crack2").setScale(.35).setOrigin(0).setVisible(false);
    this.outside = this.add.sprite(1245,225,"outside").setOrigin(0).setVisible(false).setDepth(1);
    this.door = this.outside
    this.window = this.crack3

    this.crack1.alpha = this.rubble.alpha = .4
    this.fluorescent.alpha = .7
    
    let i = -1
    this.cameraShake = this.time.addEvent({
      delay: 50,
      callback:() =>{
        if (i == -1)
          i = 1
        else
          i = -1
        this.cameras.main.y += 10*(i%2)
      }, loop: true, paused: true
    })

    this.intro()
  }

  intro() {
    this.cameraShake.paused = false    

    this.time.addEvent({
      delay: 500,
      callback:() =>{
        this.crack2.setVisible(true)
        this.time.addEvent({
          delay: 500,
          callback:() =>{
            this.crack3.setVisible(true)
            this.time.addEvent({
              delay: 500,
              callback:() =>{
                this.crack1.setVisible(true)
                  this.time.addEvent({
                    delay: 500,
                    callback:() =>{
                      this.fluorescent.setVisible(true)
                      this.time.addEvent({
                        delay: 500,
                        callback:() =>{
                          this.rubble.setVisible(true)
                          this.outside.setVisible(true)
                          this.time.addEvent({
                            delay: 50,
                            callback:() =>{
                              this.dust.alpha += .1
                            }, repeat: 10
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

    this.time.addEvent({
      delay: 2000,
      callback:() =>{
        this.kid1.play("kid1Run")
        this.kid2.play("kid2Run")
        this.kid3.play("kid3Run")
        this.teacher.play("teacherRun")
        this.physics.moveTo(this.kid1, 800, 750, 120)
        this.physics.moveTo(this.kid2, 500, 750, 105)
        this.physics.moveTo(this.kid3, 200, 750, 140)
        this.physics.moveTo(this.teacher, this.outside.x, this.outside.y, 700)
        this.time.addEvent({
          delay: 800,
          callback:() =>{
            this.physics.moveTo(this.teacher, 1400, 700, 700)
            this.time.addEvent({
              delay: 600,
              callback:() =>{
                this.physics.moveTo(this.teacher, 1000, 700, 750)
              }
            })
          }
        })
        this.time.addEvent({
          delay: 2000,
          callback:() =>{
            this.kid1.setVelocity(0)
            this.kid2.setVelocity(0)
            this.kid3.setVelocity(0)
            this.teacher.setVelocity(0)
            this.kid1.play("kid1Idle")
            this.kid2.play("kid2Idle")
            this.kid3.play("kid3Idle")
            this.teacher.play("teacherIdle")
            this.start()
          }
        })
      }
    })
  }

  start() {
    this.desk1circle.setVisible(true)
    this.desk2circle.setVisible(true)
    this.desk3circle.setVisible(true)
    this.desk4circle.setVisible(true)
    this.doorCircle.setVisible(true)
    this.windowCircle.setVisible(true)
    this.kid1.y = this.kid1.x = this.kid2.y = this.kid3.y = this.teacher.y = 875
    this.kid2.x = 700
    this.kid3.x = 500
    this.teacher.x = 1100
    this.teacher.flipX = false
    this.desk1Interactive.visible = this.desk2Interactive.visible = this.desk3Interactive.visible = this.desk4Interactive.visible = this.doorInteractive.visible = this.windowInteractive.visible = true
  }

  scaleUpAndDown(sprite) {
    let scaleUp = this.time.addEvent({
      delay: 25,
      callback:() =>{
        sprite.scale += .005
      }, loop: true, paused: true
    })
    let scaleDown = this.time.addEvent({
      delay: 25,
      callback:() =>{
        sprite.scale -= .005
      }, loop: true, paused: false
    })
    this.time.addEvent({
      delay: 1000,
      callback:() =>{
        if(scaleUp.paused == true) {
          scaleUp.paused = false;
          scaleDown.paused = true;
        }
        else {
          scaleUp.paused = true;
          scaleDown.paused = false;
        }
      }, loop: true
    })
  }

  pick(pos) {
    this.desk1Interactive.visible = this.desk2Interactive.visible = this.desk3Interactive.visible = this.desk4Interactive.visible = this.doorInteractive.visible = this.windowInteractive.visible = false
    let character, destination
    
    if(this.score == 0)
      character = this.teacher
    else
      eval("character = this.kid"+this.score)
    
    eval("destination = this." + pos)

    if (pos.substring(0,4) == "desk") {
      this.score--;
      
      character.play(character.texture.key+"Run")
      this.physics.moveTo(character, destination.x+100, destination.y-50, 300)

      this.time.addEvent({
        delay: 1000,
        callback:() =>{
          character.setVelocity(0)
          character.play(character.texture.key+"Idle")
          character.setRotation(1.1)
          character.x = destination.x + 200;
          character.y = destination.y + 100;
          destination.setDepth(1.1)
          this.desk1Interactive.visible = this.desk2Interactive.visible = this.desk3Interactive.visible = this.desk4Interactive.visible = this.doorInteractive.visible = this.windowInteractive.visible = true
        }
      })
      if(this.score<0)
        this.finish();
    }

    else if (pos == "door") {
      //save starting position
      let startingPosX = character.x
      let startingPosY = character.y

      //move left first
      character.play(character.texture.key+"Run")
      character.setDepth(99)
      this.physics.moveTo(character, 2000, 900, 1050-startingPosX)
      
      //proceed
      this.time.addEvent({
        delay: 1700,
        callback:() =>{
          //planks fall
          let plank1 = this.add.sprite(this.door.x+40, this.door.y+40, "plank").setDepth(2)
          let plank2 = this.add.sprite(this.door.x+120, this.door.y-40, "plank").setRotation(.5).setDepth(2)
          plank1.setScale(1,2)
          plank2.setScale(.8,1.6)
          this.time.addEvent({
            delay: 20,
            callback:() =>{
              plank1.rotation += .05
              plank2.rotation += .075
              plank1.y += 4
              plank2.y += 6
            }, repeat: 70
          })
          
          //move up than stop
          this.physics.moveTo(character, this.door.x, this.door.y, 500);
          this.time.addEvent({
            delay: 1000,
            callback:() =>{
              character.setVelocity(0)
              character.play(character.texture.key+"Idle")
              
              //go back to starting position
              this.time.addEvent({
                delay: 1000,
                callback:() =>{
                  character.x = startingPosX
                  character.y = startingPosY
                  character.setDepth(0)
                  this.desk1Interactive.visible = this.desk2Interactive.visible = this.desk3Interactive.visible = this.desk4Interactive.visible = this.doorInteractive.visible = this.windowInteractive.visible = true
                }
              })
            }
          })
        }
      })
    }

    else if (pos == "window") {
      //save starting position
      let startingPosX = character.x
      let startingPosY = character.y

      //move left first
      character.play(character.texture.key+"Run")
      character.setDepth(99)
      this.physics.moveTo(character, 2000, 900, 1050-startingPosX)
      
      this.time.addEvent({
        delay: 1700,
        callback:() =>{
          character.setVelocity(0, -600)
          character.flipX = true
          this.desk1.depth = this.desk2.depth = this.desk3.depth = 1
          this.outside.depth = character.depth = 0

          this.time.addEvent({
            delay: 800,
            callback:() =>{
              character.setVelocity(-600, 0)
              this.time.addEvent({
                delay: 1200,
                callback:() =>{
                  character.setVelocity(0)
                  character.play(character.texture.key+"Idle")

                  //glass shadder
                  let glass = this.add.sprite(this.window.x+120 , this.window.y-80, "glass").setScale(.5)
                  this.time.addEvent({
                    delay: 100,
                    callback:() =>{
                      glass.scale += .05
                      glass.y += 15
                    }, repeat: 10
                  })
                  this.time.addEvent({
                    delay: 1000,
                    callback:() =>{
                      this.time.addEvent({
                        delay: 100,
                        callback:() =>{
                          glass.scale -= .05
                          glass.y += 15
                        }, repeat: 10
                      })
                    }
                  })
                  this.time.addEvent({
                    delay: 1000,
                    callback:() =>{
                      //go back to starting position
                      this.time.addEvent({
                        delay: 1000,
                        callback:() =>{
                          character.x = startingPosX
                          character.y = startingPosY
                          character.flipX = false
                          character.depth = this.desk1.depth = this.desk2.depth = this.desk3.depth = 0
                          this.outside.setDepth(1)
                          this.desk1Interactive.visible = this.desk2Interactive.visible = this.desk3Interactive.visible = this.desk4Interactive.visible = this.doorInteractive.visible = this.windowInteractive.visible = true
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
  }

  finish() {
    this.desk1Interactive.visible = this.desk2Interactive.visible = this.desk3Interactive.visible = this.desk4Interactive.visible = this.doorInteractive.visible = this.windowInteractive.visible = false
    let black = this.add.sprite(0, 0, "black").setOrigin(0).setDepth(999)
    black.setScale(100)
    black.alpha = 0
    this.time.addEvent({
      delay: 2000,
      callback:() =>{
        this.cameraShake.paused = true
      }
    })
    this.time.addEvent({
      delay: 3000,
      callback:() =>{
        this.time.addEvent({
          delay: 20,
          callback:() =>{
            black.alpha += .01
          }, repeat: 100
        })
        this.time.addEvent({
          delay: 2000,
          callback:() =>{
            this.scene.start("school2")
          }
        })
      }
    })
  }

  update() {
  }
}
