class ForagerBee extends Bee{
  constructor(age, job) {
    super(age, job)
    this.age = 10
    this.job = 'find pollen'
    this.canFly = true
    this.treasureChest = []
  }
  forage() {
    this.treasureChest.push('1')
  }
};
