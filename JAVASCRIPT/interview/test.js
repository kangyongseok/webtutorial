function Car (name) {
    this.name = name
}

Car.prototype.getName = () => this.name + 1

const car1 = new Car('벤츠');
console.log(car1.getName()) // 벤츠1