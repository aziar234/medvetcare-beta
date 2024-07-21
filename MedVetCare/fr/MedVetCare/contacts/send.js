// Initialize EmailJS with public key and service ID
emailjs.init({
    publicKey: "2VDysMnu9FZq00y0C",
    serviceID: "service_ddamkqn" // Add your service ID here
  });
  
  // Add event listener to the form element
  window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      
      emailjs.sendForm('service_ddamkqn', 'template_fo2uk8e', this)
        .then(() => {
          console.log('SUCCESS!');
          // Clear input fields
          document.getElementById('object-input').value = '';
          document.getElementById('mail-input').value = '';
          document.getElementById('content-input').value = '';
        }, (error) => {
          console.log('FAILED...', error);
        });
    });
  }