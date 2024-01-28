class menu extends Phaser.Scene{
  constructor(){
    super("menu")
  }

  create(){
    const centerX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const centerY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

    const schoolBut = this.add.text(centerX-400,centerY,"OKUL", {color:"black", fontSize:"32px"});
    this.add.text(centerX-100,centerY,"EV", {color:"black", fontSize:"32px"});
    this.add.text(centerX+100,centerY,"MARKET", {color:"black", fontSize:"32px"});
    const streetBut = this.add.text(centerX+400,centerY,"SOKAK", {color:"black", fontSize:"32px"});
    streetBut.setInteractive();
    streetBut.on("pointerdown", () => {this.scene.start("street")})
    schoolBut.setInteractive();
    schoolBut.on("pointerdown", () => {this.scene.start("school")})
  }

  update(){
  }
}
