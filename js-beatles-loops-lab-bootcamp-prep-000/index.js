function theBeatlesPlay(musicians,instruments){
  var arr = []

  for(let i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(facts){
  let i = 0
  while(i < facts.length){
    facts[i] = facts[i]+'!!!'
    i++
  }
  return facts
}

function iLoveTheBeatles(number){
  var arr = []

  do{
    arr.push("I love the Beatles!")
    number++
  } while(number<15)
  return arr
}