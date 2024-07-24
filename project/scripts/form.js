// TODO: Complete ajax submission later by linking to backend email service
// (possibly using the SendGrid SDK)

$(document).ready(function () {
  $('#myForm').on('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = {
      name: $('#name').val(),
      company: $('#company-name').val(),
      email: $('#visitor-email').val(),
      inquiry: $('#inquiry').val(),
    };

    // Send data to the server using AJAX
    $.ajax({
      type: 'POST',
      url: 'your-server-endpoint', // Replace with your server endpoint
      data: formData,
      success: function (response) {
        // Handle success response
        // $('#successModal').modal('show'); // Show the modal
        console.log('Success!');
      },
      error: function () {
        // Handle error response

        // TODO: While we are showing the modal here for now, 
        // change this logic once the backend is added.

        // alert('There was an error submitting the form.');
        openPopup();
      }
    });
  });
});
