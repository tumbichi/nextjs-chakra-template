const firebaseErrors = [
  {
    code: "auth/email-already-exists",
    message: "El email ya existe",
  },
  {
    code: "auth/insufficient-permission",
    message: "Usted no tiene permisos para acceder",
  },
  {
    code: "auth/internal-error",
    message: "¡Ups! Error inesperado, intente nuevamente",
  },
  {
    code: "auth/invalid-email",
    message: "Debe ingresar un email valido",
  },
  {
    code: "auth/invalid-password",
    message: "La contraseña debe contener minimo 6 caracteres",
  },
  {
    code: "auth/user-not-found",
    message: "No existe el usuario que desea ",
  },
  {
    code: "auth/too-many-requests",
    message:
      "Usted intento demasiadas veces, por favor intente de nuevo mas tarde",
  },
  {
    code: "auth/wrong-password",
    message: "Contraseña incorrecta",
  },
  {
    code: "auth/argument-error",
    message: "Email o contraseña incompleta",
  },
];

export default firebaseErrors;
