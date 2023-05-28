//tooltips

const tooltips = document.querySelectorAll('.tt')
    tooltips.forEach(t => {
      new bootstrap.Tooltip(t)
    })

    //On Top Button
let mybutton = document.getElementById("btn-back-to-top");

//button appears when scroled down 20px
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//button scrolls up to 0px
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// stars
const stars = document.querySelectorAll('.bi-star');
console.log(stars);


function handleClick(event) {
  console.log('Element clicked:', event.target.classList);
  if(event.target.classList.contains('bi-star')){
          event.target.classList.remove('bi-star')
          event.target.classList.add('bi-star-fill')
        }else{
          event.target.classList.add('bi-star')
          event.target.classList.remove('bi-star-fill')
        }
}

stars.forEach(element => {
  element.addEventListener('click', handleClick);
});


