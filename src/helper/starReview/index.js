const ConvertStarHelper = (rate) => {
  let percentage = (rate * 100) / 5
  let temp_arr = []
  while (percentage >= 20) {
    percentage -= 20
    temp_arr.push(1)
  }
  if (percentage >= 10) {
    temp_arr.push(2)
  }
  while (5 - rate > 1) {
    temp_arr.push(3)
    rate++
  }
  if (temp_arr.length !== 5) {
    temp_arr.push(3)
  }
  return temp_arr
}

export default ConvertStarHelper
