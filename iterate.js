var data = [
  {
    "data1" :{
      "goal" : 345,
      "trigger" : 564,
      "limit" : 976
    }
  },
  {
    "data2" :{
      "goal" : 678,
      "trigger" : 564,
      "limit" : 976
    }
  },
  {
    "data5" :{
      "goal" : 23,
      "trigger" : 54,
      "limit" : 44
    }
  }
]




function findvalue(data, value){
  var result = []
  for (key in data) {
      if (data.hasOwnProperty(key)) {
          if(data[key][value]){
              result.push(
                {
                  "goal" :data[key][value].goal,
                  "trigger" :data[key][value].trigger,
                  "limit" :data[key][value].limit
                }
              )
          }
      }
  }
  return result
}
var final = []

final = final.concat(findvalue(data, "data5"),findvalue(data, "data2"),findvalue(data, "data1"))

console.log(final)
