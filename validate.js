document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    emailjs.send('service_abcdefgh', 'template_123456', {
        'from_name': name,
        'from_email': email,
        'message': message
      })
      .then(function(response) {
        document.getElementById('response').innerHTML = 'Your message has been sent!';
      }, function(error) {
        document.getElementById('response').innerHTML = 'There was a problem sending your message.';
      });
  });