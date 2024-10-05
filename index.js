const cats=["Milo","Otis","Garfield"];

    function destructivelyAppendCat(Ralph) {
        cats.push("Ralph"); 
    }
  function destructivelyPrependCat(Bob) {
    cats.unshift("Bob")
  }
  function destructivelyRemoveLastCat(Garfield){
    cats.splice(-1)
  }
  function destructivelyRemoveFirstCat(Milo) {
    cats.splice(0,1)
  }
  function appendCat(Broom) {
    const newCats=[...cats,  "Broom"];
    return newCats;
  }
  function prependCat(Arnold) {
    const newCats=["Arnold",...cats];
    return newCats;
  }
  function removeLastCat() {
    return cats.slice(0, -1); 
}

function removeFirstCat() {
    return cats.slice(1); 
}