export default function getUserData() {
  return localStorage.getItem("data") ? localStorage.getItem("data") : null;
}
