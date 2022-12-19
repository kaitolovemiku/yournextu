export default function checkNullOrNot( variable ) {
  if (typeof variable !== "undefined" && variable !== null && variable !== "") {
    // variable is defined and not null
    return variable;
  } else {
    // variable is undefined or null
    return 1;
  }
}
