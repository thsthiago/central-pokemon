export default function nameUpperCase(name) {
  const arrName = name.split('')
  const letraNome = arrName[0].toUpperCase()
  arrName.splice(0, 1)
  return [letraNome, ...arrName].join('')
}
