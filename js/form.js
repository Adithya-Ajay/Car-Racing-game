class Form {
    constructor() {

        this.title = createElement('h1')
        this.input = createInput("Enter your Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2')
        this.reset = createButton("RESET DB")
        this.leaderBoard = createElement("h2")
      
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
  
    display(){
        background(bg)

       
        this.title.html("Car Racing Game")
        this.title.position(width/2-200, 30);
        this.title.style("fontSize", "60px")
        this.title.style("color", "#F3030C")

       
        this.input.position(width/2-130, height/2-50);
        this.input.style("height", "50px")
        this.input.style("width", "250px")
        this.input.style("borderRadius", "60px")
        this.input.style("fontSize", "25px")
        this.input.style("background-color", "grey")
        this.input.style("borderColor", "#F3030C")



       
        this.button.position(width/2-100, height/2+50);
        this.button.style("background-color", "#F3030C")
        this.button.style("width", "120px")
        this.button.style("height", "50px")
        this.button.style("fontSize", "25px")


        this.reset.position(width - 100,40)
        this.reset.mousePressed(()=>{
            game.update(0)
            player.updateCount(0)
            Player.updateCarsAtEnd(0)
        })

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()

            player.name = this.input.value()

            playerCount = playerCount +1
            player.index = playerCount

            player.update()
            player.updateCount(playerCount)

           
            this.greeting.html("Hello, "+player.name+ " Welcome")
            this.greeting.position(width/2-300, height/2-50);
            this.greeting.style("fontSize", "60px")
            this.greeting.style("color", "yellow")           


        })
    }

}