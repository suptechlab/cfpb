db.hmda_lar_by_county.drop();

db.hmda_lar.aggregate([
  // { $limit: 1000000 },
  { "$group": {
      "_id": { state_code: "$state_code", county_code: "$county_code" },
      "p_a_y0": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2015 ] },
                      { "$eq": [ "$loan_purpose", 1 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "p_o_y0": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2015 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 1 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "p_a_y1": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2016 ] },
                      { "$eq": [ "$loan_purpose", 1 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "p_o_y1": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2016 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 1 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "p_a_y2": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2017 ] },
                      { "$eq": [ "$loan_purpose", 1 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "p_o_y2": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2017 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 1 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "r_a_y0": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2015 ] },
                      { "$eq": [ "$loan_purpose", 3 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "r_o_y0": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2015 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 3 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "r_a_y1": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2016 ] },
                      { "$eq": [ "$loan_purpose", 3 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "r_o_y1": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2016 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 3 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "r_a_y2": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2017 ] },
                      { "$eq": [ "$loan_purpose", 3 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "r_o_y2": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2017 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 3 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      }
  }},
  {
    $project: {
      _id: 0,
      state_code: "$_id.state_code",
      county_code: "$_id.county_code",
      p_a_y0: "$p_a_y0",
      p_a_y1: "$p_a_y1",
      p_a_y2: "$p_a_y2",
      p_o_y0: "$p_o_y0",
      p_o_y1: "$p_o_y1",
      p_o_y2: "$p_o_y2",
      r_a_y0: "$r_a_y0",
      r_a_y1: "$r_a_y1",
      r_a_y2: "$r_a_y2",
      r_o_y0: "$r_o_y0",
      r_o_y1: "$r_o_y1",
      r_o_y2: "$r_o_y2",
      change_p_o_y0_y1: { $multiply: [{ $divide: [{ $subtract: ["$p_o_y1", "$p_o_y0"]}, { $cond: [ { $gt: [ "$p_o_y0", 0 ] }, "$p_o_y0", 1 ] }] }, 100 ] },
      change_p_o_y1_y2: { $multiply: [{ $divide: [{ $subtract: ["$p_o_y2", "$p_o_y1"]}, { $cond: [ { $gt: [ "$p_o_y1", 0 ] }, "$p_o_y1", 1 ] }] }, 100 ] },
      change_p_a_y0_y1: { $multiply: [{ $divide: [{ $subtract: ["$p_a_y1", "$p_a_y0"]}, { $cond: [ { $gt: [ "$p_a_y0", 0 ] }, "$p_a_y0", 1 ] }] }, 100 ] },
      change_p_a_y1_y2: { $multiply: [{ $divide: [{ $subtract: ["$p_a_y2", "$p_a_y1"]}, { $cond: [ { $gt: [ "$p_a_y1", 0 ] }, "$p_a_y1", 1 ] }] }, 100 ] },
      change_r_o_y0_y1: { $multiply: [{ $divide: [{ $subtract: ["$r_o_y1", "$r_o_y0"]}, { $cond: [ { $gt: [ "$r_o_y0", 0 ] }, "$r_o_y0", 1 ] }] }, 100 ] },
      change_r_o_y1_y2: { $multiply: [{ $divide: [{ $subtract: ["$r_o_y2", "$r_o_y1"]}, { $cond: [ { $gt: [ "$r_o_y1", 0 ] }, "$r_o_y1", 1 ] }] }, 100 ] },
      change_r_a_y0_y1: { $multiply: [{ $divide: [{ $subtract: ["$r_a_y1", "$r_a_y0"]}, { $cond: [ { $gt: [ "$r_a_y0", 0 ] }, "$r_a_y0", 1 ] }] }, 100 ] },
      change_r_a_y1_y2: { $multiply: [{ $divide: [{ $subtract: ["$r_a_y2", "$r_a_y1"]}, { $cond: [ { $gt: [ "$r_a_y1", 0 ] }, "$r_a_y1", 1 ] }] }, 100 ] }
    }
  },
  { $out: "hmda_lar_by_county" }
]);
