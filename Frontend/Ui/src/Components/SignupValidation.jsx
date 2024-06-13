function validation(values) {
    // Create function to handle input fields validation
  
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const name_pattern = /^[a-zA-Z\s-]{1,50}$/;
    const phone_pattern =
      /^\+?(\d{1,3})?[-.\s]?(\d{1,4})?[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/;
    const age_pattern = /^(?:1[01][0-9]|120|[1-9]?[0-9])$/;
  
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
  
    // Function to check name validation on input
    if (values.name === "") {
      error.name = "Please enter your full name";
    } else if (!name_pattern.test(values.name)) {
      error.name = "Please use a valid name";
    } else {
      error.name = "";
    }
  
    // Function to check phone number validation on input
    if (values.phone === "") {
      error.phone = "Please enter your phone number";
    } else if (!phone_pattern.test(values.phone)) {
      error.phone = "Please use a valid phone number";
    } else {
      error.phone = "";
    }
  
    // Function to check age validation on input
    if (values.age === "") {
      error.age = "Please enter your age";
    } else if (!age_pattern.test(values.age)) {
      error.age = "Please use a valid number";
    } else {
      error.age = "";
    }
  
    return error;
  }
  
  export default validation;
  