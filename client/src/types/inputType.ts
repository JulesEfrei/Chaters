import React from "react";

export default interface InputType
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; //Replace label attribute in optional attribute
  placeholder?: string;
  errorMsg?: string;
}
