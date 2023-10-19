export function checkNIF (nif) {
  nif = nif.toUpperCase().replace(/[_\W\s]+/g, '');
  if (/^(\d|[XYZ])\d{7}[A-Z]$/.test(nif)) {
    let num = nif.match(/\d+/)
    num = (nif[0] != 'Z' ? nif[0] != 'Y' ? 0 : 1 : 2) + num;
    if (nif[8] == 'TRWAGMYFPDXBNJZSQVHLCKE'[num % 23]) {
      return /^\d/.test(nif) ? 'DNI' : 'NIE'
    }
  }
  else if (/^[ABCDEFGHJKLMNPQRSUVW]\d{7}[\dA-J]$/.test(nif)) {
    let sum = null
    for (let i = 1; i < 8; ++i) {
      let num = nif[i] << i % 2
      sum += parseInt(num / 10) + num % 10
    }
    let c = (10 - sum) % 10
    if (((/[KLMNPQRSW]/.test(nif[0]) || (nif[1] + nif[2]) == '00') && nif[8] == 'JABCDEFGHI'[c]) ||
      (/[ABEH]/.test(nif[0]) && nif[8] == c) ||
      (/[CDFGJUV]/.test(nif[0]) && (nif[8] == 'JABCDEFGHI'[c] || nif[8] == c))) {
      return /^[KLM]/.test(nif) ? 'ESP' : 'CIF'
    }
  }
  return false
}
