const personWithTupple: { // dirty definition structure, here needed for tuple; don't use this dirty structure if possible
    name: string;
    age: number;
    hobbies: string[],
    role: [number, string] // tuple, fixed length and fixed datatype array
} = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, "author"]
}

enum Role {ADMIN, READ_ONLY, DUMMY};

const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.DUMMY
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.hobbies);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

let anyActivities: any[]; // TypeScript can't check for Type compliance! Avoid if possible!