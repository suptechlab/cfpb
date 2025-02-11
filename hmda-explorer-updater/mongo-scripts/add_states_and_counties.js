// The data from the census includes numbers with leading zeros.
function pad(num, size) {
  var s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}

db.hmda_lar_by_county.find().forEach(function(doc) {
  if (!doc.state_code || !doc.county_code) {
    return;
  }
  var state_code = pad(doc.state_code.toString(), 2),
      county_code = pad(doc.county_code.toString(), 3);
  // Add county names and populations to the hmda records.
  db.county_populations.find({state_code: state_code, county_code: county_code}).forEach(function(county){
    db.hmda_lar_by_county.update({
      _id: doc._id
    }, {
      $set: {
        population: county.population,
        county_name: county.county_name,
        state_name: county.state_name
      }
    })
  });
})
