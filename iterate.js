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
  }
]




function findvalue(data, value){
  var result = []
  for (key in data) {
      if (data.hasOwnProperty(key)) {
          if(data[key][value]){
              return(
                {
                  "goal" :data[key][value].goal,
                  "trigger" :data[key][value].trigger,
                  "limit" :data[key][value].limit
                }
              )
          }
      }
  }
}

var result = []

var data1 = findvalue(data, "data2")
var data2 = findvalue(data, "data1")

result.push(data1)
result.push(data2)
console.log(result)
