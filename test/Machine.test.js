const Machine = require('../src/Machine')

describe('The vending machine', () => {
  it('is initialized with no items', () => {
    // SEAT
    // setup
    const vendingMachine = new Machine();

    // exercise & assert
    expect(vendingMachine.seeSelections()).toEqual([])

    // teardown, not needed
  })

  it('can stock one snack', () => {
    // setup
    const vendingMachine = new Machine();
    const snack = {
      name: 'macadamia nuts',
      price: 250
    }

    // exercise
    vendingMachine.stock([snack])

    // assert
    expect(vendingMachine.seeSelections()).toEqual([snack])
  })

  it('displays an error if no inventory comes with stocking', () => {
    // setup
    const vendingMachine = new Machine()
    const displayMessage = "please do not troll. you cannot stock nothing."

    // exercise & assert
    expect(() => vendingMachine.stock()).toThrow(displayMessage)
  })
})

describe('As a customer, I want to know how much money I have deposited so that I know what I can purchase', () => {
  it('when I insert Money', ()=>{
    const vendingMachine = new Machine();
    //input, push to an array, reduce them, =>return number 
    //function = depositMoney, input = depositAmount, array = deposit, return by reduce 
    const deposit = 10; // = part of the array, money left in the account 
    //exercise & assert
    expect(vendingMachine.depositMoney(deposit)).toEqual(vendingMachine.totalAmount())
  })

  it('I see the total I have deposited on a screen',() => {
    const vendingMachine = new Machine();
    //let depositArray = [10,20,50]; //Total = $80
    vendingMachine.depositMoney(10)
    vendingMachine.depositMoney(20)
    vendingMachine.depositMoney(30)
    // const totalMoney =  depositArray.reduce((acc, adder)=> acc + adder)
    expect(vendingMachine.totalAmount()).toEqual(60)
  })
})

// As a customer, I want to know how much money I have deposited, so that I know what I can purchase.
// - Given I am using the vending machine, 
// + when I insert money, 
// - then I see the total I have deposited on a screen. 
// - `deposit(100)` returns `'You have deposited Rs 100'`
// - The machine should accept bills in these amounts: `10, 20, 50, 100, 500`

// As a customer, I want to add additional money, so that I can use the denominations I have to purchase an item.
// - Given I have deposited money in the vending machine,
// - when I deposit additional money,
// - then I see the new total on a screen. 
// - After depositing Rs 100, `deposit(50)` returns `'You have deposited Rs 150'`

// As a customer, I want to see a message if my item is unavailable, so that I can make another choice.
// - Given I am using the vending machine, 
// - when I enter a code for an item that is unavailable, 
// - then I see a message that the item is unavailable.
// - `selectItem(code)` returns `'The item you selected is unavailable'`

// As a customer, I want to see a message if my deposit is insufficient, so that I know to add more money.
// - Given I have made a choice, 
// - when I have not deposited enough money for that item, 
// - then I see a message telling me how much more to deposit.
// - `selectItem(code)` returns `'Your deposit is insufficient.  Please add Rs 20 for this item'`

// As a customer, I want to receive change, so that I don’t pay more than the item costs.
// - Given I have made a selection, 
// - when the item is delivered, 
// - then I receive correct change (in correct monetary units)
// - `selectItem(code)` returns an object with the item and an array of bills `{item: 'mints', change: [20, 10]}`

// As a customer, I want to receive my money back when I push the cancel button, so that I can change my mind.
// - Given that I have deposited money,
// - When I push the cancel button,
// - Then I receive my money back
// - `cancel()` returns `{change: [100]}`

// As a customer, I want to know if the vending machine can make change, so that I can cancel my choice if it can't make change.
// - Given I have deposited money and selected a choice, 
// - when the machine does not have correct change, 
// - then I see a message
// - `selectItem(code)` returns `'Cannot return proper change.  Please choose another item or cancel the transaction'`