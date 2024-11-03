let DONUTTRUYỀNTHỐNG  = document.getElementById('TRADITIONAL');
let  DESINGEDDONUT  = document.getElementById('DESIGNED');


TRADITIONAL.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
} 
DESIGNED.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}  