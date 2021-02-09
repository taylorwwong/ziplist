const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(listA, listB) {
  const answer = [];
  for (let i = 0; i < listA.length; i++) {
    answer.push(listA[i], listB[i]);
  }
  return answer;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(listA, listB) {
  return _.flatten(_.zip(listA, listB));
}

console.log(zipListTheSimpleWay(list1, list2));
