class Player {
    constructor(name){
    this.name = name;
    this.health = 100;
    this.power = 10;
    }


hit(power) {
    this.health -= power;
}

useItem(item) {
    this.health += item.health;
    this.power += item.power;
    }


showStatus() {
    return `Player ${this.name}: (Health => ${this.health}), (Power => ${this.power})`;

}
}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

getRandomItem() {
    const health = Math.round(Math.random()) * 10;
    const power = Math.round(Math.random()) * 10;
    return {health, power};
}

    start() {
        console.log("YEEEEEHAWW");
        console.log(`${this.player1.name} VS ${this.player2.name}`);
        console.log("READY....");
        console.log("....");
        console.log("START!");;
       while (this.player1.health > 0 && this.player2.health > 0) {
        console.log(this.player1.showStatus());
        console.log(this.player2.showStatus());

        const randomItemP1 = this.getRandomItem();
        const randomItemP2 = this.getRandomItem();
        console.log(`Item ${this.player1.name}: health => ${randomItemP1.health}, power => ${randomItemP1.power}`);
        console.log(`Item ${this.player2.name}: health => ${randomItemP2.health}, power => ${randomItemP2.power}`);

        this.player1.useItem(randomItemP1);
        this.player2.useItem(randomItemP2);

    //player 1 shoot player 2
    this.player2.hit(this.player1.power);
    //player 2 shoot player 1
    this.player1.hit(this.player2.power);

       }

       if (this.player1.health == this.player2.health) {
        console.log(`TIE`);
    } else if (this.player1.health > this.player2.health){
        console.log(`${this.player1.name} WIN!`);
    } else {
        console.log(`${this.player2.name} WIN!`);
    }
    
    }
}
        


const player1 = new Player("Wolo");
const player2 = new Player("Wacu");

const game = new ShootingGame(player1, player2);

game.start();

