var profil = function (p) {
    var year = 2017;
    var aller = year - p[2];
    return p[0] + ("\n") + p[1] + ("\n") + ": Født " + p[2] + ("\n") + aller; 
}

var idol = ["Kristian", "Johansen", 1999];

console.log(profil(idol));

