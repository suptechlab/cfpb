function pad(num, size) {
  var s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}

db.hmda_lar_geo.drop();
db.createCollection('hmda_lar_geo');

db.hmda_lar_by_county.find().forEach(function(county) {
  if (!county.state_code || !county.county_code) {
    return;
  }
  var state_code = pad(county.state_code.toString(), 2),
      county_code = pad(county.county_code.toString(), 3);
  db.getCollection('county_shapes').find({'properties.STATEFP': state_code, 'properties.COUNTYFP': county_code}).forEach(function(shape) {
    delete county._id;
    db.hmda_lar_geo.insert({
      type: 'Feature',
      properties: county,
      geometry: shape.geometry
    })
  });
})
