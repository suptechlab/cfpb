db.county_populations.find().forEach(function(county){
  db.state_populations.find({state_code: county.state_code}).forEach(function(state){
    db.county_populations.update({
      _id: county._id
    }, {
      $set: {
        state_name: state.state_name
      }
    })
  });
});
