function transform(data) {
  for(var collection in data.results) {
    data.results[collection].forEach(function(row) {
      var rank = row.rank;
      if (rank.search('/') === -1) {  
        row.normrank = parseInt(rank);
      }else{ 
        var parts = rank.split('/')
        var multiplier = 16 / parts[1]
        row.normrank = multiplier * parts[0];
        
      }
    });
  };
  
  return data;
}

