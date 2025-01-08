export const validations = (formData) => {
  let errors = {
    name: "",
    fromEmail: "",
    message: "",
  };

  const { name, fromEmail, message } = formData;

  if (name.length === 0) {
    errors.name = "Ingrese su nombre";
  }else{
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,50}$/;
    if (!nameRegex.test(name)) {
      errors.name = "El nombre solo debe contener letras y tener un máximo de 50 caracteres";
    }
  }

  if (fromEmail.length === 0) {
    errors.fromEmail = "Ingrese su email";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fromEmail)) {
      errors.fromEmail = "Ingrese un email válido";
    }
  }

  if (message.length === 0) {
    errors.message = "Ingrese un mensaje";
  }

  return errors;
};
