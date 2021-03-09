class Player {
    constructor(){
        this.index=null;
        this.name = null;
        this.distance = 0
        this.rank = 0
    }

    getCount(){
       database.ref('playerCount').on("value",(data)=>{
          playerCount = data.val();
        })
      }

      updateCount(count){
        database.ref('/').update({
          playerCount: count
        })
      }

      update(){
        database.ref('players/player'+this.index).set({
          name: this.name,
          distance: this.distance,
          rank:this.rank
        })
      }

     static getPlayerInfo(){
        database.ref("players").on("value",(data)=>{
          allPlayers = data.val()
        })

      }

      getCarsAtEnd(){
        database.ref("carsAtEnd").on("value",(data)=>{
          this.rank = data.val()
        })
      }

      static updateCarsAtEnd(rank){
        database.ref("/").update({
          carsAtEnd : rank

        })

      }
      
    
}