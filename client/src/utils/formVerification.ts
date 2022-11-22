import { log } from "console";
import { toast } from "react-toastify";

export function isText(name: string) {
  if (typeof name !== "undefined") {
    return name.trim() !== "" && !name.match(/[0-9]/gm);
  } else {
    return false;
  }
}

export function isPassword(password: string) {
  if (typeof password !== "undefined") {
    return password.toLowerCase() !== password && password.length >= 8;
  } else {
    return false;
  }
}

export function isEmail(email: string) {
  if (typeof email !== "undefined") {
    return email.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
      ? true
      : false;
  } else {
    return false;
  }
}

interface field {
  name?: string;
  email?: string;
  password?: string;
  passwordVerif?: string;
  [key: string]: any;
}

interface vc {
  name?: (name: string) => void;
  email?: (mail: string) => void;
  password?: (password: string) => void;
  passwordVerif?: (passwordVerif: string) => void;
  [key: string]: any;
}

const valueWithCheck: vc = {
  name: isText,
  email: isEmail,
  password: isPassword,
  passwordVerif: isPassword,
};

export function verifForm(field: field) {
  let result: boolean = true;
  let error: string[] = [];

  Object.keys(field).forEach((elm: string) => {
    console.log(field[elm]);
    console.log(valueWithCheck[elm](field[elm]));

    if (!!field.elm || !valueWithCheck[elm](field[elm])) {
      result = false;
      error.push(elm);
    }
  });

  return { success: result, error };
}

type position = "top-right" | "top-left" | "bottom-right" | "bottom-left";

export function generateToast(
  text: string,
  type: "error" | "success" = "error",
  position: position = "top-right"
) {
  toast[type](text, {
    position: position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
