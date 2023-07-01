import React from "react";
 
const animalFunc = {
    walk: () => <p>walking...</p>, 
    sleep: () => <p>sleeping...</p> 
}

const dogFn = {
    bark: () => <p>Barking...</p>
}

class Dog{
    constructor(name){
        this.name = name
    }
}


class Lion{
    constructor(name){
        this.name = name
    }
}

// for Dog
Object.assign(dogFn, animalFunc)
Object.assign(Dog.prototype, dogFn)

// for Lion
Object.assign(Lion.prototype, animalFunc)

const tommy = new Dog('Tommy')
const king = new Lion('Tommy')

function MixinPattern() {
  return (
    <div>
      <h3>5. Mixin Pattern</h3>
 
        {tommy.bark() }
        {king.walk() }

    </div>
  );
}

export default MixinPattern;
