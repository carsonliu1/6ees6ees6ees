class RetiredForagerBee extends ForagerBee {
  constructor(age, job, canFly, forage, color) {
    super(age, job, canFly, forage, color)
    this.age = 40
    this.job = 'gamble'
    this.canFly = false
    this.color = 'grey'
  }
  forage() {
    return 'I am too old, let me play cards instead'
  }
  gamble() {
    super.forage()
  }
};
