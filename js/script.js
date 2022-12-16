
function userInput() {
    const firstName = prompt("Enter your name");
    if (firstName == "") {
        alert('Entry Required');
        return false;
      }
    if (firstName == null) {
    alert('Entry Required');
    return false;
    }  
    const lastName = prompt("Enter your last name");
    if (lastName == "") {
        alert('Entry Required');
        return false;
      }
    if (lastName == null) {
    alert('Entry Required');
    return false;
    }    
    const favColor = prompt("Enter your favorite color");
    if (favColor == "") {
        alert('Entry Required');
        return false;
      }
    if (favColor == null) {
    alert('Entry Required');
    return false;
    }  
    let pwd = firstName + lastName + favColor + '21'
    document.getElementById("showPWD").value = pwd;
}
