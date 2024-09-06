document.addEventListener("DOMContentLoaded", function () {
    // Initialize date picker
    const elem = document.getElementById('dob');
    const datepicker = new Datepicker(elem, {
      autohide: true,
      format: 'MM-dd'
    });
  
    // Uncheck all checkboxes by default (Firefox)
    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
  
    // Attention seeker randomization
    const attentionSeekers = [
      "animate__bounce", "animate__flash", "animate__pulse", "animate__rubberBand",
      "animate__shakeX", "animate__shakeY", "animate__swing", "animate__tada",
      "animate__wobble", "animate__jello", "animate__heartBeat"
    ];
  
    const greeting = document.querySelector("h1.greeting");
    const randomAnimation = attentionSeekers[Math.floor(Math.random() * attentionSeekers.length)];
    greeting.classList.add(randomAnimation);
  
    // Function to handle animation with reset
    function animateElement(elem, animationIn, animationOut, add) {
      elem.classList.remove("animate__animated", animationIn, animationOut);
      if (add) {
        elem.classList.add("animate__animated", animationIn);
      } else {
        elem.classList.add("animate__animated", animationOut);
      }
  
      // Reset animation classes after the animation ends
      elem.addEventListener('animationend', function () {
        elem.classList.remove("animate__animated", animationIn, animationOut);
        if (!add) {
          elem.style.visibility = "hidden"; // Hide the element if unchecked
        }
      }, { once: true });
    }
  
    // Check all event listener
    document.getElementById("checkAllIcon").addEventListener("click", function () {
      const checkboxes = document.querySelectorAll(".form-check-input");
      checkboxes.forEach(checkbox => {
        checkbox.checked = true;
        const imgElem = document.getElementById(checkbox.id + "Img");
        imgElem.style.visibility = "visible";
        animateElement(imgElem, "animate__bounceInDown", "animate__bounceOutUp", true);
      });
    });
  
    // Uncheck all event listener
    document.getElementById("uncheckAllIcon").addEventListener("click", function () {
      const checkboxes = document.querySelectorAll(".form-check-input");
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        const imgElem = document.getElementById(checkbox.id + "Img");
        animateElement(imgElem, "animate__bounceInDown", "animate__bounceOutUp", false);
      });
    });
  
    // Change h1 color on label hover
    const labels = document.querySelectorAll(".form-check-label");
    labels.forEach(label => {
      const balloonColor = label.textContent.split(' ')[0].toLowerCase();
      label.addEventListener("mouseover", function () {
        document.querySelector("h1.greeting").style.color = balloonColor;
      });
      label.addEventListener("mouseout", function () {
        document.querySelector("h1.greeting").style.color = "slategray";
      });
    });
  
    
     // Initialize and show toast
        const toastElement = document.getElementById('balloonToast');
        const toast = new bootstrap.Toast(toastElement);

        document.getElementById("submit").addEventListener("click", function () {
        const checkboxes = document.querySelectorAll(".form-check-input");
        const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

        if (!anyChecked) {
        toast.show();
        }
    });
  
    // Balloon visibility toggling on checkbox change
    document.getElementById('checkbox-card').addEventListener('change', function (e) {
      if (e.target.classList.contains('form-check-input')) {
        const imgElem = document.getElementById(e.target.id + 'Img');
        imgElem.style.visibility = "visible"; // Ensure visibility before animating
        animateElement(imgElem, "animate__bounceInDown", "animate__bounceOutUp", e.target.checked);
      }
    });
  });
  
  
  