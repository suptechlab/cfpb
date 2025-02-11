db.state_populations.find().forEach(function(state) {
  var state_code = parseInt(state.state_code, 10);
  // Add state names to the records.
  db.hmda_lar_by_state.find({_id: state_code}).forEach(function() {
    db.hmda_lar_by_state.update({
      _id: state_code
    }, {
      $set: {
        state_name: state.state_name
      }
    });
  });
});

// We don't want records without states to be discarded
db.hmda_lar_by_state.find({_id: null}).forEach(function(state) {
  state.state_name = "NA";
  db.hmda_lar_by_state.save(state);
});
