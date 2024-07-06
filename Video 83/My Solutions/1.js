/*
The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.
*/

function AssignHouses(list, obj) {
    list.forEach(student => {
        if (student.length < 6) {
            obj.Gryffindor.push(student);
            return;
        }
        if (student.length < 8) {
            obj.Hupplepuff.push(student);
            return;
        }
        if (student.length < 12) {
            obj.Ravenclaw.push(student);
            return;
        }
        obj.Slytherin.push(student);
    });

    return obj;
}


const students = ["Liam", "Emma", "Noah", "Ava", "Mia", "Olivia", "Sophia", "Jackson", "Harper", "Mason", "Benjamin", "Charlotte", "Alexander", "Isabella", "Christopher", "Maximilianoram", "Alexandrianas", "Nathanielleem", "Elizabethoanel", "Anastasiasraas"];

let Houses = {
    Gryffindor: [],
    Hupplepuff: [],
    Ravenclaw: [],
    Slytherin: []
};

Houses = AssignHouses(students, Houses);
console.log(Houses);