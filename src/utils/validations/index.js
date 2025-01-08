export const validations = (formData) => {
  let errors = {
    name: "",
    fromEmail: "",
    message: "",
  };

  const { name, fromEmail, message } = formData;

  if (name.length === 0) {
    errors.name = "Enter your name";
  }else{
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,50}$/;
    if (!nameRegex.test(name)) {
      errors.name = "The name must only contain letters and be a maximum of 50 characters";
    }
  }

  if (fromEmail.length === 0) {
    errors.fromEmail = "Enter your email";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fromEmail)) {
      errors.fromEmail = "Enter a valid email";
    }
  }

  if (message.length === 0) {
    errors.message = "Enter your message";
  }

  return errors;
};
