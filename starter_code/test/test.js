var expect = require('chai').expect;
var ex = require('./ex.js').load('./exercise.js');
var boston = require('./bostonEmployeeSalaries.json');

ex.load(boston);
var points = ex.generatePoints();
points = points.slice(0, 9);

var answer  = [];
ex.salaries.forEach(function(item,i){
	answer.push({
		job    : item[9],
		salary : Number(item[18])
	});
});

// order by salary
answer.sort(compare);
answer = answer.slice(0, 9);

// sorting comparison function
function compare(a, b) {
  if (a.salary < b.salary) return -1;
  if (a.salary > b.salary) return 1;
  if (a.salary === b.salary) return 0;
}


describe('Sorted Salaries Array', function() {
	it('Match Salaries Order', function() {

	    expect(points).to.eql(answer);
	});
});
