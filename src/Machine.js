class Machine {
  constructor() {
    this.snacks = []
    this.totalDeposited = []
  }

  seeSelections() {
    return this.snacks
  }

  stock(inventory) {
    if(inventory == undefined) {
      throw Error("please do not troll. you cannot stock nothing.")
    }
    this.snacks = inventory
  }

  depositMoney(depositAmount){
    this.totalDeposited.push(depositAmount)
    
    return this.totalAmount();
  }

  totalAmount(){
    return this.totalDeposited.reduce((acc, add) => acc + add)
    
  }

}

module.exports = Machine

