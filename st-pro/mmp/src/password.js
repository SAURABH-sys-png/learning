// password should exist between 33 and 126 in ascii table
export function generatePassword(
  lenght,
  boolUpper,
  boolLower,
  boolNum,
  boolSpc,
) {
  let password = "";
  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  while (password.length < lenght) {
    const randomInt = getRandomInt(33, 127);
    if (
      (boolUpper && randomInt >= 65 && randomInt <= 90) ||
      (boolLower && randomInt >= 97 && randomInt <= 122) ||
      (boolNum && randomInt >= 48 && randomInt <= 57) ||
      (boolSpc &&
        ((randomInt >= 33 && randomInt <= 47) ||
          (randomInt >= 58 && randomInt <= 64) ||
          (randomInt >= 91 && randomInt <= 96) ||
          (randomInt >= 123 && randomInt <= 126)))
    ) {
      password += String.fromCharCode(randomInt);
    }
  }
  return password;
}
