export function checkNIF (nif) {
  nif = nif.toUpperCase().replace(/[_\W\s]+/g, '')
  if (/^(\d|[XYZ])\d{7}[A-Z]$/.test(nif)) {
    let num = nif.match(/\d+/)
    num = (nif[0] != 'Z' ? nif[0] != 'Y' ? 0 : 1 : 2) + num
    if (nif[8] == 'TRWAGMYFPDXBNJZSQVHLCKE'[num % 23]) {
      const typeNIF = /^\d/.test(nif) ? 'DNI' : 'NIE'
    }
  }
  if (typeNIF !== 'DNI' || typeNIF !== 'NIE') {
    throw new Error('NIF must be correctly formed')
  }
}
