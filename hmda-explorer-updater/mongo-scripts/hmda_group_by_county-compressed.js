// We're compressing the keys because TileMill sometimes truncates them and gets confused.
// They're in the format: loanpurpose_actiontaken_year. For example:
//
// p_a_y0 is purchase applications in 2015.
// p_o_y0 is purchase originations in 2015.
// r_a_y0 is refinance applications in 2015.
//

db.hmda_lar_by_county.drop();

db.hmda_lar.aggregate([
  // { $limit: 100000 },
  { "$group": {
      "_id": { state_code: "$89", county_code: "$d1" },
      "p_a_y0": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2015 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
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
                      { "$eq": [ "$da", 2015 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
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
                      { "$eq": [ "$da", 2016 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
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
                      { "$eq": [ "$da", 2016 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
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
                      { "$eq": [ "$da", 2017 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
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
                      { "$eq": [ "$da", 2017 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
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
                      { "$eq": [ "$da", 2015 ] },
                      { "$eq": [ "$809", 3 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
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
                      { "$eq": [ "$da", 2015 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 3 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
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
                      { "$eq": [ "$da", 2016 ] },
                      { "$eq": [ "$809", 3 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
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
                      { "$eq": [ "$da", 2016 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 3 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
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
                      { "$eq": [ "$da", 2017 ] },
                      { "$eq": [ "$809", 3 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
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
                      { "$eq": [ "$da", 2017 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 3 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
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
