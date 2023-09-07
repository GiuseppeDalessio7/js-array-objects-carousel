

// definisco la costante slide in cui metto le immagini
const slides = [
    {
        position : 1,
        url : './assets/img/01.webp',
       
    },
    {
        position : 2,
        url :'./assets/img/02.webp',
       
    },
    {
        position : 3,
        url :'./assets/img/03.webp',
        
    },
    {
        position : 4,
        url :'./assets/img/04.webp',
        
    },
    {
        position : 5,
        url :'./assets/img/05.webp',
       
    },
]



let activeSlide = 1;

// select the dom elements
const sliderImagesEl = document.querySelector('.slider .images')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')


slides.forEach(slide => {

    //const imageURL = slide.url

    const slideMarkup = `<img class="${activeSlide === slide.position ? 'active' : '' }" src="${slide.url}" alt="">`

    console.log(slideMarkup);

    //const slideMarkup = `<img src="${slide.url}" alt="">`
  
    sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)


    
  });






//console.log(sliderImagesEl);

/* Print all images into the dom */
// loop over the slides 
// for (let i = 0; i < slides.length; i++) {
//   const slidePath = slides[i];
//   console.log(slidePath);
  
//   // for each slide we create the markup
//   const slideMarkup = `<img class="${activeSlide === i ? 'active' : '' }" src="${slidePath}" alt="">`
//   //console.log(slideMarkup);

//   sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)

// }



const slidesImages = document.querySelectorAll('.slider .images > img')
console.log(slidesImages);





const thumbsElement = document.querySelector('.thumbnails')

slides.forEach(slide => {

    const thumbPath = slide.position;
    const thumbMarkup = `<img class="thumb ${activeSlide === thumbPath ? 'active' : ''}" src="${slide.url}" alt="">`
    //console.log(thumbMarkup);
  
    thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)
    
  });


const playLoop = setInterval(loopImg, 2000);
function loopImg(nextEl) {
    nextEl.addEventListener('click', function(){
        console.log('cliccato su next');
      
        // select the current slide
        const currentSlide = slidesImages[activeSlide]
        console.log(currentSlide);
        // remove the active class from the current slide
        currentSlide.classList.remove('active')
      
        // select the active thumb
        const currentThumb = document.querySelector('.thumbnails > img.active')
        console.log(currentThumb);
        // remove the active class from the active thumb
        currentThumb.classList.remove('active')
      
        
        // activeSlide = 4
      
        if (activeSlide === slidesImages.length - 1) {
          activeSlide = 0
          // activeSlide = 5
        } else {
          // increment the activeSlide of 1
          activeSlide++
        }
      
      
        // select the next slide
        const nextSlide = slidesImages[activeSlide]
        console.log(nextSlide);
        // add the active class to the next slide
        nextSlide.classList.add('active')
      
        clearInterval(playLoop)
        /* TODO */
      
      
        // select the next thumb
        const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
        console.log(nextThumb);
        // add to the next thumb the active class
        nextThumb.classList.add('active')
      
       

      })
    
}

// intercept click on the next icon 


// intercept click on the prev icon


// activeSlide = 0
prevEl.addEventListener('click', function () {
  console.log('cliccato su prev');


  // select the current slide
  const currentSlide = slidesImages[activeSlide]
  console.log(currentSlide);
  // remove the active class from the current slide
  currentSlide.classList.remove('active')

  if (activeSlide === 0) {
    activeSlide = slidesImages.length - 1
    // activeSlide = 5
  } else {
      // decrement the activeSlide of 1
      activeSlide--
  }
  
  
  console.log(activeSlide);


  // select the next slide
  const nextSlide = slidesImages[activeSlide]
  console.log(nextSlide);
  // add the active class to the next slide
  nextSlide.classList.add('active')
})