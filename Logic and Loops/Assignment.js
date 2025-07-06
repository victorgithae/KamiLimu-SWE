/* Logic and Loop Assignment*/
//Victor Githae
// 6th July 


const students = ["Alice Ate", "Bob", "Charlie"];
console.log("student Roll Call:");

for (const student of students) {

    const lowerCaseStudent = student.toLowerCase();

    if (lowerCaseStudent.startsWith("a") || lowerCaseStudent.endsWith("e")) {
        console.log(`- Welcome, ${student}!`);
    }
}

// TODO: Check if either condition qualifies (starts with A OR ends with e)
// TODO: Use .toLowerCase() to make it case-insensitive

//DONE ✅

