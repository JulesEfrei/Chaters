export default interface InputType {
  type: "text" | "email" | "password";
  handleChange: (value: string) => void;
  value: string;
  name: string;
  label?: string;
  placeholder?: string;
  errorMsg?: string;
}
