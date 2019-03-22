class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('.dropdown-button');
    this.content = this.element.querySelector('.dropdown-content');
    
    this.button.addEventListener('click', () => {
      this.toggleContent();
    })
  }

  toggleContent() { 
    TweenMax.to(".dropdown-content", 0, {opacity: 1});
    if (this.content.classList.contains("dropdown-hidden")) {
      TweenMax.from(".dropdown-content", 1, {scaleY: 0, y: -100});
      this.content.classList.toggle("dropdown-hidden");
    } else  {
      setTimeout(() => this.content.classList.toggle("dropdown-hidden"), 1000);
      TweenMax.to(".dropdown-content", 1, {opacity: 0});
    }
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));

