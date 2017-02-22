var exercise = {};

exercise.salaries = null;

// load salary and data
exercise.load = function(boston){
    exercise.salaries = boston.data;
};


// select salaries over 250,000
exercise.generatePoints = function(){

    var points  = [];
    exercise.salaries.forEach(function(item){
        points.push({
            job    : item[9],
            salary : Number(item[18])
        });
    });

    // order by salary
    points.sort(compare);

    return points;
};

// sorting comparison function
function compare(a, b) {
    // --------------------------
    //      YOUR CODE
    // --------------------------
}
