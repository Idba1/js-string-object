const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    } 
}


college.unique.result.merit = 'top top top';
console.log(college.unique.result.merit);
console.log(college.unique.result.gpa);

college.events[1] = 'Victory Day';
console.log(college.events[1]);

delete college.name;
console.log(college);