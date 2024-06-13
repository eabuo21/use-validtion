

// export default validation;
function validation(values) {
    // Create function to handle input fields validation
  
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    // Condition to check if email field is empty and return error message
    if (values.email === "") {
      error.email = "Please enter email";
    } else if (!email_pattern.test(values.email)) {
      error.email = "Email didn't match";
    } else {
      error.email = "";
    }
  
    // Function to check password validation on input
    if (values.password === "") {
      error.password = "Please enter password";
    } else if (!password_pattern.test(values.password)) {
      error.password = "Please use a combination of characters and numbers";
    } else {
      error.password = "";
    }
  
    return error;
  }
  
  export default validation;
  