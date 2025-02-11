#counties {
  ::outline {
    line-color: white;
    line-width: 1;
    line-join: round;
  }
  [change_r_o_y0_y1 < -60] { polygon-fill:#DB7500; }
  [change_r_o_y0_y1 >= -60][change_r_o_y0_y1 < -45] { polygon-fill:#FF931B; }
  [change_r_o_y0_y1 >= -45][change_r_o_y0_y1 < -30] { polygon-fill:#FFB058; }
  [change_r_o_y0_y1 >= -30][change_r_o_y0_y1 < -15] { polygon-fill:#FFC98D; }
  [change_r_o_y0_y1 >= -15][change_r_o_y0_y1 < 0] { polygon-fill:#FFDFB9; }
  [change_r_o_y0_y1 >= 0][change_r_o_y0_y1 < 15] { polygon-fill:#AFD2EB; }
  [change_r_o_y0_y1 >= 15][change_r_o_y0_y1 < 30] { polygon-fill:#7FB7E3; }
  [change_r_o_y0_y1 >= 30][change_r_o_y0_y1 < 45] { polygon-fill:#4497D9; }
  [change_r_o_y0_y1 >= 45][change_r_o_y0_y1 < 60] { polygon-fill:#0072CE; }
  [change_r_o_y0_y1 >= 60] { polygon-fill:#004DBA; }
}

#states {
  ::outline {
    line-color: white;
    line-width: 1;
    line-join: round;
  }
}
