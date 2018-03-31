const precise = (x, precision = 15) => parseFloat(x.toPrecision(precision))

const validator = n => {
  if (n > Number.MAX_SAFE_INTEGER || n < Number.MIN_SAFE_INTEGER) {
    console.warn(`${n} is not within [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`)
    return false
  }
  return true
}

const multiplier = n => {
  const eArr = n.toString().split(/[eE]/)
  const len = (eArr[0].split('.')[1] || '').length - (+(eArr[1] || 0))
  return len > 0 ? len : 0
}

const toInt = n => {
  const nStr = n.toString()
  if (!~nStr.indexOf('e')) {
    return Number(nStr.replace('.', ''))
  }
  const len = multiplier(n)
  return len > 0 ? n * Math.pow(10, len) : n
}

const plus = (x, y) => {
  const m = Math.pow(10, Math.max(multiplier(x), multiplier(y)))
  return (multiply(x, m) + multiply(y, m)) / m
}

const minus = (x, y) => {
  const m = Math.pow(10, Math.max(multiplier(x), multiplier(y)))
  return (multiply(x, m) - multiply(y, m)) / m
}

const multiply = (x, y) => {
  const xM = toInt(x)
  const yM = toInt(y)
  validator(xM)
  validator(yM)
  const ret = xM * yM
  validator(ret)
  const mX = multiplier(x)
  const mY = multiplier(y)
  return ret / Math.pow(10, mX + mY)
}

const divide = (x, y) => {
  const xM = toInt(x)
  const yM = toInt(y)
  validator(xM)
  validator(yM)
  const mX = multiplier(x)
  const mY = multiplier(y)
  return multiply((xM / yM), Math.pow(10, mY - mX))
}

const round = (n, m) => {
  const mul = Math.pow(10, m)
  return divide(Math.round(multiply(n, mul)), mul)
}

module.exports = {
  precise,
  multiply,
  divide,
  plus,
  minus,
  round
}
