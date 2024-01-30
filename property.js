const subject = {
    name : 'Computer Fundamental',
    code : 'SE111',
    teacher : 'Rashedul Sir',
    teacherInitial : 'RHH',
    examDate : '4 Dec',
    chapter : {
        chapter1 : 'Number System',
        chapter2 : 'Boolean Algebra'
    }, 
    examDetails : {
        term : 'Final',
        marks : 100,
    },
    'fav chapter' : {
        chap1: 'number convertion',
    }
}


console.log(subject);
console.log(subject.examDate);
console.log(subject['fav chapter']);
console.log(subject.name);
let courseCode = subject['code'];
console.log(courseCode);
let subName = 'name';
console.log(subName);