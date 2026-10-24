import Mailgen from "mailgen";
const emailVerificationMailgenContent = (username, verficationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App ! we're excited to have you on board",
      action: {
        instructions:
          "To verify Your email Please click on the following button",
        button: {
          color: "#0d6681",
          text: "Verfiy Your email",
          link: verficationUrl,
        },
      },
      outro:
        "Need help, or have questions? just reply to this email,we'd love to help",
    },
  };
};
const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "we have got a request to reset your password from your account ",
      action: {
        instructions: "To reset your password click on the following button",
        button: {
          color: "#a61313",
          text: "Reset Password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have questions? just reply to this email,we'd love to help",
    },
  };
};

export { emailVerificationMailgenContent, forgotPasswordMailgenContent };
