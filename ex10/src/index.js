function main(){
    var myFirstName = "Haris";
    var myLastName = "Aksalic";
    var myHomeTown = "Sarajevo";

    return {
        myFirstName,
        myLastName,
        myHomeTown
    };
}

console.log(main());
module.exports = main;