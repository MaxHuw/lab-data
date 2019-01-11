var data = [];

module.exports = {

  addData: function(number){
    return data.push(number);
  },

  sortData: function(){
    var sortedData = data.sort(function(a, b) {
      return a -b;
    });

    console.log(sortedData);
  }

};
