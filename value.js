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


subject.teacher = 'Shahriar Parve';
subject.code = 'SE123';
subject['fav chapter'] = 'i do not know';

const shortName = 'teacherInitial';
subject[shortName] = 'SP'
console.log(subject);