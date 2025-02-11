function addCommas(x) {
  return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : x;
}

db.hmda_lar_by_county.find().forEach(function(county) {
  db.hmda_lar_by_county.update({
    _id: county._id
  }, {
    $set: {
      p_a_y0: addCommas(county.p_a_y0),
      p_a_y1: addCommas(county.p_a_y1),
      p_a_y2: addCommas(county.p_a_y2),
      p_o_y0: addCommas(county.p_o_y0),
      p_o_y1: addCommas(county.p_o_y1),
      p_o_y2: addCommas(county.p_o_y2),
      r_a_y0: addCommas(county.r_a_y0),
      r_a_y1: addCommas(county.r_a_y1),
      r_a_y2: addCommas(county.r_a_y2),
      r_o_y0: addCommas(county.r_o_y0),
      r_o_y1: addCommas(county.r_o_y1),
      r_o_y2: addCommas(county.r_o_y2),
      change_p_o_y0_y1: Math.round(county.change_p_o_y0_y1),
      change_p_o_y1_y2: Math.round(county.change_p_o_y1_y2),
      change_p_a_y0_y1: Math.round(county.change_p_a_y0_y1),
      change_p_a_y1_y2: Math.round(county.change_p_a_y1_y2),
      change_r_o_y0_y1: Math.round(county.change_r_o_y0_y1),
      change_r_o_y1_y2: Math.round(county.change_r_o_y1_y2),
      change_r_a_y0_y1: Math.round(county.change_r_a_y0_y1),
      change_r_a_y1_y2: Math.round(county.change_r_a_y1_y2),
      population: addCommas(county.population)
    }
  })
});
