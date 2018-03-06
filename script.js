const searchArr = [
    {name: "TES V", category: "game"},
    {name: "TES IV", category: "game"},
    {name: "TES III", category: "game"},
    {name: "CS GO", category: "game"},
    {name: "WoW", category: "game"},
    {name: "Witcher", category: "game"},
    {name: "Gothic", category: "game"},
    {name: "Risen", category: "game"},
    {name: "Ac", category: "game"},
    {name: "Far Cry", category: "game"}
];
let parKpnelu = document.querySelector("#kpneluPar")
let searchVal = document.querySelector("#forSearchVal")
let searchButton = document.querySelector("#searchButt")
let emptyArr = [];
const esimInch = document.querySelector(".nestFor");
searchButton.onclick = function () {
  esimInch.innerHTML = "";
  for (let i = 0; i < searchArr.length; i++) {
    var patt = new RegExp(searchVal.value);
    var new_pat = patt.test(searchArr[i].name);
    if (new_pat) {
      let chgitemInchy = "<li>" + searchArr[i].name + "</li>"
      esimInch.innerHTML += chgitemInchy;

      // parKpnelu.innerHTML += searchArr[i].name + "<br />";
      console.log(searchArr[i].name);
    }
  }
}

for (let key in searchArr) {
  let chgitemInchy = "<li>" + searchArr[key].name + "</li>"
// esimInch.appendchild("LI" + searchArr)
  esimInch.innerHTML += chgitemInchy;
  // console.log(chgitemInchy);
  // console.log(typeof searchArr[key].name)
}
