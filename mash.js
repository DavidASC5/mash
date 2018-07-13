function mash(){
    return "You will deadass live in a " + getHome() + " my guy. Word to mommy you will also have " + getChildrenCount() + " kids."
}
console.log (mash());

function getHome(){
       let places = ["Mansion", "Apartment", "Shack", "House"];
       const decimal = Math.random()*places.length;
       const final = Math.floor(decimal);
       let households = places[final];
console.log(households);
return households;
}


function getChildrenCount(){
        const decimal = Math.random();
        const times10 = decimal * 100;
        const final = Math.floor(times10);
        console.log(final);
        return (final)
}

