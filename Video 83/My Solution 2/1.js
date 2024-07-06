// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

function sortnames(names, houses) {
    names.forEach(e => {
        if (e.length < 6)
            houses.Gryffindor.push(e);
        else if (e.length < 8)
            houses.Hufflepuff.push(e);
        else if (e.length < 12)
            houses.Ravenclaw.push(e);
        else
            houses.Slytherin.push(e);
    });

    return houses;
}

const students = ["Liam", "Emma", "Noah", "Ava", "Mia", "Olivia", "Sophia", "Jackson", "Harper", "Mason", "Benjamin", "Charlotte", "Alexander", "Isabella", "Christopher", "Maximilianoram", "Alexandrianas", "Nathanielleem", "Elizabethoanel", "Anastasiasraas"];

let houses = {
    Gryffindor: [],
    Hufflepuff: [],
    Ravenclaw: [],
    Slytherin: []
};

houses = sortnames(students, houses);
console.log(houses);