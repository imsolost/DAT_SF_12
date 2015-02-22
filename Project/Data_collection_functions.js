function transform(data) {
  for(var collection in data.results) {
    data.results[collection].forEach(function(row) {
      var rank = row.rank;
      if (rank.search('/') === -1) {  
        row.normrank = parseInt(rank);
      }else{ 
        var parts = rank.split('/')
        var multiplier = 8 / parts[1]
        row.normrank = multiplier * parts[0];
        
      }
	  var date = row.date
      var dparts = date.split('/')
      var catdate = "20".concat(dparts[2])
      row.normdate = new Date(catdate, dparts[1] - 1, dparts[0])
      
    });
  };
  
  return data;
}

