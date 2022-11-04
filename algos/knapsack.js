// this is just to understand what basics of knapsack problem is

function knapsackBasic(value1, weight1, value2, weight2, maxWeight) {
  // can we carry both items
  if (weight1 + weight2 <= maxWeight) {
    return value1 + value2;
  }

  // can we carry item 1 but not item 2 ?
  else if (weight1 <= maxWeight && weight2 > maxWeight) {
    return value1;

    // item2 not item 1
  } else if (weight1 > maxWeight && weight2 <= maxWeight) {
    return value2;
  }

  // both too heavy
  else if (weight1 > maxWeight && weight2 > maxWeight) {
    return 0;
  } else {
    return value2 > value1 ? value2 : value1;
  }
}
