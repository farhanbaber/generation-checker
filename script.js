function check() {
    let input = document.getElementById("input")
   let  selection = document.getElementById("selection").value
   let result = "";
   if (selection === "1880 to 1900") {
    result = "Lost generation"
   }else if (selection ==="1900 to 1925") {
    result = "Greatest Generation"
   }else if (selection ==="1925 to 1945") {
    result = "Silent Generation"
   }else if (selection ==="1946 to 1964") {
    result = "Baby Boomers"
   }else if (selection ==="1965 to 1980") {
    result = "Generation X"
   }else if (selection ==="1981-1996") {
    result = "Millennials"
   }else if (selection ==="1997 to 2012") {
    result = "Generation Z"
   }else if (selection ==="2010 to 2025") {
    result = "Generation Alpha"
   }else alert("plz select options")
    
   
   input.value = "You Are: " + result;


}