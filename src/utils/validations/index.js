import { t } from "@/libs/i18n";

export const validations = (formData, language) => {
  const traduction=t(language,  "contact");
  let errors = {
    name: "",
    fromEmail: "",
    message: "",
  };

  const { name, fromEmail, message } = formData;

  if (name.length === 0) {
    errors.name = traduction.form.inputs.name.validations.empty;
  }else{
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,50}$/;
    if (!nameRegex.test(name)) {
      errors.name = traduction.form.inputs.name.validations.nameRule;
    }
  }

  if (fromEmail.length === 0) {
    errors.fromEmail = traduction.form.inputs.email.validations.empty;
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fromEmail)) {
      errors.fromEmail = traduction.form.inputs.email.validations.emailRule;
    }
  }

  if (message.length === 0) {
    errors.message = traduction.form.inputs.message.validations.empty;
  }

  return errors;
};
