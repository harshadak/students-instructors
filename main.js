/*

Given the following array of objects:

var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

*/

var students = [
    {
        first_name: 'Michael',
        last_name: 'Jordan'
    },
    {
        first_name: 'John',
        last_name: 'Rosales'
    },
    {
        first_name: 'Mark',
        last_name: 'Guillen'
    },
    {
        first_name: 'KB',
        last_name: 'Tonel'
    }
]

for (var i = 0; i < students.length; i++) {
    console.log(students[i].first_name + " " + students[i].last_name);
}


/*

Create a program that prints  the following format (including the number of characters in each combined name):

Students
1 - MICHAEL JORDAN - 13
2 - JOHN ROSALES - 11
3 - MARK GUILLEN - 11
4 - KB TONEL - 7
Instructors
1 - MICHAEL CHOI - 11
2 - MARTIN PURYEAR - 13

*/

var users = {
    'Students': [
        {
            first_name: 'Michael',
            last_name: 'Jordan'
        },
        {
            first_name: 'John',
            last_name: 'Rosales'
        },
        {
            first_name: 'Mark',
            last_name: 'Guillen'
        },
        {
            first_name: 'KB',
            last_name: 'Tonel'
        }
    ],
    'Instructors': [
        {
            first_name: 'Michael',
            last_name: 'Choi'
        },
        {
            first_name: 'Martin',
            last_name: 'Puryear'
        }
    ]
}
console.log("Students");
for (var j = 0; j < users.Students.length; j++) {
    console.log((j + 1) + " - " + users.Students[j].first_name + " " + users.Students[j].last_name + " - " + (users.Students[j].first_name.length + users.Students[j].last_name.length));
}
console.log("Instructors");
for (var j = 0; j < users.Instructors.length; j++) {
    console.log((j + 1) + " - " + users.Instructors[j].first_name + " " + users.Instructors[j].last_name + " - " + (users.Instructors[j].first_name.length + users.Instructors[j].last_name.length));
}
