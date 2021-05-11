
//STEP 1
class Cat {

}

const Dog = function () {
    
}


//STEP 2

const cat1 = new Cat();
const dog1 = new Dog();

//STEP 3

class Animal {
    constructor() {
       console.log('The Animal has been created');
    }
}


//STEP 4


//STEP 5

class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
        
        console.log(`The new ${this.type} ${this.breed} ${this.color} ${this.height} ${this.lenght} has been created`)
    }
}



//STEP 6

class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
    }
}

let animal = new Animal('dog', 'German Shepard', 'brown', '4"', '10"');
for(let i in animal) {
    console.log(i + ': ' + animal[i]);
}

//STEP 7

class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
    }
    get type();
}
    

//STEP 8


  
//STEP 9

    const Animal = {
        displayCatInfo: function (bread, color) {
            return '${this.name} is a ${color} ${breed} `;'
        }
    };
    const Cat = Object.create(Animal, {
        
    })

