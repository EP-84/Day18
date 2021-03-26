function* myGenerator() {

yield* [1, 2, 3, 4, 5];
yield* 'Arena';
yield* [6, 7, 8]; 


}

const iterator = myGenerator(6, 7, 8);
generatorArray = [];




module.exports = { generatorArray, myGenerator };