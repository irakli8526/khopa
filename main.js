

$(document).ready(function(){
    var SliderCurrent = $('.slider img');
    var CurrentIndex = 0;
    var SliderSpeed = 3000;

    function nextImage(){
        //deletes active classes
        SliderCurrent.eq(CurrentIndex).removeClass('active');

        //deletes current index
        CurrentIndex = (CurrentIndex + 1) % SliderCurrent.length;

        //შემდეგ ფოტოზე აქტიური კლასის დამატება
        SliderCurrent.eq(CurrentIndex).addClass('active');
    }

    setInterval(nextImage, SliderSpeed);

    const items = [
        {id: 1,
         src: './src/caru1.jpg'
        },
        {id: 2, 
         src: './src/caru2.jpg'
        },
        {id: 3,  
         src: './src/caru3.jpg'
        },
        {id: 4,
        src: './src/caru4.jpg'
        }
    ]

    items.forEach(item => {
        const itemCard = `
            <div class="item-class">            
                <img src='${item.src}'/>
                
            </div>
        `;
        $('.carousel').append(itemCard);
    })

    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    })
});


// const close = document.getElementById('close');
// const menuBar = document.getElementById('menu');
// const menuBtn = document.getElementById('menuBtn');

// function openMenu(){
//     menuBar.classList.add('active');    
// }

// function closeMenu(){
//     menuBar.classList.remove('active'); 
// }

// close.addEventListener("click", closeMenu);
// menuBtn.addEventListener("click", openMenu);


