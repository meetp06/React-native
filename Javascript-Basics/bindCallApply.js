
/*
    *save a copy of function after binding for using later on

*/
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function () {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function (snack, hobby) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + 'loves ' + snack + ' and ' + hobby);
};

var logPokemon = pokemonName.bind(pokemon, "rice", "fruits"); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
logPokemon();
pokemonName.call(pokemon, "rice", "fruits");
pokemonName.apply(pokemon, ["rice", "fruits"]);