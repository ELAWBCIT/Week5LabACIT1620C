let course1 = {
    code: 1620,
    name: "Webdev",
    instructor: "Neda",
}

let course2 = {
    code: 1420,
    name: "Sysadmin",
    instructor: "Frederic", 
}

let course3 = {
    code: 1630, 
    name: "Database", 
    instructor: "Ben"
}

const courseList = [course1, course2, course3];

let user = parseInt(prompt("Enter a course code"));   

let taco = true;

// This is the while loop we are using
while (taco) { 
    if ((!isNaN(user)) && (user >= 1000) && (user <= 9999)){ 
        taco = false;

        let exists = false;
        for (let i = 0; i < courseList.length; i++) {
            let codex = courseList[i] 
                if (codex.code === user) { exists = true;
                    console.log(`Yes I am taking the course ${codex.code} ${codex.name}`)
                    break;
                } 
        }
        if (exists === false){
            let course = {
                code: user,
                name: null,
            } 
            courseList.push(course);
            console.log(courseList)
            console.log('Successfully added')
        }   
    } else {
        taco = false; 
        console.log('Invalid input');
    }
}
console.log(courseList)
