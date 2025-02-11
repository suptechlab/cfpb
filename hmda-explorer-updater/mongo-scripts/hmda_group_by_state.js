db.hmda_lar_by_state.drop();

db.hmda_lar.aggregate([
  // { $limit: 1000000 },
  { "$group": {
      "_id": "$state_code",
      "purchasesYear0": {
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
      "improvementsYear0": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2015 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 2 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "refinancesYear0": {
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
      "purchasesYear1": {
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
      "improvementsYear1": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2016 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 2 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "refinancesYear1": {
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
      "purchasesYear2": {
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
      "improvementsYear2": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2017 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 2 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "refinancesYear2": {
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
      },
      "convYear0": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2015 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 1 ] },
                      { "$eq": [ "$loan_type", 1 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "fhaYear0": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2015 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 1 ] },
                      { "$eq": [ "$loan_type", 2 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "vaYear0": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2015 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 1 ] },
                      { "$eq": [ "$loan_type", 3 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "rhsYear0": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2015 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 1 ] },
                      { "$eq": [ "$loan_type", 4 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "convYear1": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2016 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 1 ] },
                      { "$eq": [ "$loan_type", 1 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "fhaYear1": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2016 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 1 ] },
                      { "$eq": [ "$loan_type", 2 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "vaYear1": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2016 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 1 ] },
                      { "$eq": [ "$loan_type", 3 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "rhsYear1": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2016 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 1 ] },
                      { "$eq": [ "$loan_type", 4 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "convYear2": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2017 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 1 ] },
                      { "$eq": [ "$loan_type", 1 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "fhaYear2": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2017 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 1 ] },
                      { "$eq": [ "$loan_type", 2 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "vaYear2": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2017 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 1 ] },
                      { "$eq": [ "$loan_type", 3 ] },
                      { "$eq": [ "$lien_status", 1 ] },
                      { "$eq": [ "$owner_occupancy", 1 ] },
                      { "$lte": [ "$property_type", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "rhsYear2": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$as_of_year", 2017 ] },
                      { "$eq": [ "$action_taken", 1 ] },
                      { "$eq": [ "$loan_purpose", 1 ] },
                      { "$eq": [ "$loan_type", 4 ] },
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
  { $out: "hmda_lar_by_state" }
]);
