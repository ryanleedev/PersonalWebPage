/*
    Name: Jeonghyeon Lee
    Date: Mar 6th
    File: main.js
    Lab Objective: java script file for courses page
*/

// array of courses
const level1 = [
    { "code": "CST8101", "name": "Computer Essentials", "detail": "The essentials of computer software, hardware, and laptop management form the foundation for building further technical programming skills. Learn to configure your laptop environment, basic PC and troubleshoot problems. Students create backups, install virus protection, and manage files through a basic understanding of the Windows Operating System. Students also install and configure the Windows Operating System, and a virtual machine environment and explore computer organization including basic numerical systems, functional hardware and software components needed to run programs", "level": "1", "image": "./resources/images/coursePic/level1/essential.png", "alt": "course pic", "class": "courseImg" },
    { "code": "CST8116", "name": "Introduction to Computer Programming", "detail": "Possessing the fundamentals of logic, problem-solving and programming language structure provides a solid foundation for further study in the field. Students develop introductory knowledge of computer programming with emphasis on problem analysis and design, using algorithms, pseudocode, flowcharts, UML Class Diagrams and testing, with the Java programming language used as a means to implement problem solution designs. Through an introduction to the Java programming language students use sequential structures, selection structures, repetition structures, variables, constants, methods, constructors, one-dimensional arrays, object-oriented programming, classes, objects, abstraction, encapsulation, inputs, outputs, coding conventions and documentation. Theory is reinforced with application by means of practical laboratory assessments.", "level": "1", "image": "./resources/images/coursePic/level1/java.png", "alt": "course pic", "class": "courseImg" },
    { "code": "CST8215", "name": "Introduction to Database", "detail": "Databases are used to store data and are a core component of many information technology systems. Students learn the fundamentals of relational databases design using Entity Relation Diagrams (ERDs), and use Structured Query Language (SQL) to create, modify and query a database. Students design and create databases that are maintainable, secure and adaptable to change in business requirements, using normalization. Students become familiar with the functions of a Database Management System (DBMS) and its components in comparison with legacy systems and alternative information storage mechanisms.", "level": "1", "image": "./resources/images/coursePic/level1/database.png", "alt": "course pic", "class": "courseImg" },
    { "code": "CST8300", "name": "Achieving Success in Changing Environments", "detail": "Rapid changes in technology have created personal and employment choices that challenge each of us to find our place as contributing citizens in the emerging society. Life in the 21st century presents significant opportunities, but it also creates potential hazards and ethical problems that demand responsible solutions. Students explore the possibilities ahead, assess their own aptitudes and strengths, and apply critical thinking and decision-making tools to help resolve some of the important issues in our complex society with its competing interests.", "level": "1", "image": "./resources/images/coursePic/level1/achieving.png", "alt": "course pic", "class": "courseImg" },
    { "code": "ENL1813T", "name": "Communications I", "detail": "Communication remains an essential skill sought by employers, regardless of discipline or field of study. Using a practical, vocation-oriented approach, students focus on meeting the requirements of effective communication. Through a combination of lectures, exercises, and independent learning, students practise writing, speaking, reading, listening, locating and documenting information and using technology to communicate professionally. Students develop and strengthen communication skills that contribute to success in both educational and workplace environments.", "level": "1", "image": "./resources/images/coursePic/level1/communication.png", "alt": "course pic", "class": "courseImg" },
    { "code": "MAT8001C", "name": "Technical Mathematics for Computer Science", "detail": "The study of algebraic and transcendental functions is an essential prerequisite to Calculus. Students manipulate algebraic expressions, solve algebraic equations and linear systems and learn the properties of and graph algebraic and transcendental functions. Students investigate computer number systems in addition to Boolean algebra and logic to help solve problems involving computer systems. Students also study the addition and subtraction of vectors using vector components. Delivered in a modular format, this course is equivalent to the completion of all of the following math modules MAT8100 - A, B, C, D, E, F, and L.", "level": "1", "image": "./resources/images/coursePic/level1/math.png", "alt": "course pic", "class": "courseImg" }
]

const level2 = [
    { "code": "CST2355", "name": "Database Systems", "detail": "Database systems can automate data processing tasks as well as tie into the security of information technology systems. Students acquire practical experience using market-leading object-relational database management systems like Oracle and MySQL. Students obtain hands-on experience with advanced engineering modeling tools along with SQL, SQL scripts and programming with Oracle's PL/SQL blocks. Database concepts covered include advanced SQL, case structures, rollup and cube operations, metadata manipulation, data storage and retrieval, security and transaction control and data warehousing", "level": "2", "image": "./resources/images/coursePic/level2/database.png", "alt": "course pic", "class": "courseImg" },
    { "code": "CST8102", "name": "Operating System Fundamentals (GNU/Linux)", "detail": "Operating systems form the backbone of information technology systems coordinating the interaction between hardware and software. Students explore the basic concepts and components of Operating Systems (OS), and how they function and interact with hardware and software components. Students examine the details of operating system structures, process management, storage management, installation, configuration, and administration both in theory and through practical assignments based on the GNU/Linux operating system. Lab work is designed to implement the theory by developing skills using the powerful GNU/Linux command-line tools and utilities.", "level": "2", "image": "./resources/images/coursePic/level2/linux.png", "alt": "course pic", "class": "courseImg" },
    { "code": "CST8284", "name": "Object Oriented Programming (Java)", "detail": "Working in the field of information technology as a programmer requires a firm understanding of Object-Oriented Programming (OOP) concepts. Students explore object-oriented programming methodology using the Java programming language. Object oriented concepts, such as encapsulation, inheritance, abstraction and polymorphism are covered and reinforced with practical applications. Students explore the basics of data structures and algorithms as well as basic Graphical User Interface (GUI) programming.", "level": "2", "image": "./resources/images/coursePic/level2/java.png", "alt": "course pic", "class": "courseImg" },
    { "code": "CST8285", "name": "Web Programming", "detail": "The World Wide Web (WWW) has become an integrated part of everyday life. Students develop basic skills of web programming, website design and implementation. JavaScript, HTML5, and PHP are used to explore web-based solutions to problems of increasing interactivity and complexity. Lectures are reinforced by practical assignments that encourage students to construct and maintain their own websites.", "level": "2", "image": "./resources/images/coursePic/level2/web.png", "alt": "course pic", "class": "courseImg" },
    { "code": "ENL2019T", "name": "Technical Communication for Engineering Technologies", "detail": "The ability to communicate effectively in a technically-oriented interdisciplinary workplace is a foundational skill in an innovation-driven economy. Students are exposed to exercises and assignments designed to foster independent and collaborative critical thinking, research, writing, visual communication and presentation skills related to technical topics.", "level": "2", "image": "./resources/images/coursePic/level2/techcomm.png", "alt": "course pic", "class": "courseImg" },
    { "code": "GEP1001", "name": "Cooperative Education Readiness", "detail": "Students are guided through a series of activities that prepare them to conduct a professional job search and succeed in the workplace. Through a detailed orientation students learn the cooperative education program policies and procedures related to searching and securing a work term opportunity. Students identify their strengths and transferable skills and participate in workshop-style sessions that focus on cover letter and resume development, interview techniques and job search strategies. Students learn how to navigate a web-based resource centre, which is used to post employment and cooperative education job opportunities. Students reflect on workplace success, ethics and responsibilities.", "level": "2", "image": "./resources/images/coursePic/level2/coop.png", "alt": "course pic", "class": "courseImg" },
    { "code": "GED0336", "name": "General Education Elective", "detail": "Students choose one course, from a group of general education electives, which meets one of the following four requirements: Arts in Society, Civic Life, Social and Cultural Understanding, and Science and Technology.", "level": "2", "image": "./resources/images/coursePic/level2/elective.png", "alt": "course pic", "class": "courseImg" }
]


// LISTING SECTION
const courseList1 = document.querySelector("#ul1");

for (let course of level1) {
    listCourse(course);
}

for (let course of level2) {
    listCourse(course);
}


// SEARCH SECTION
const nameBtn = document.querySelector("#nameBtn");
nameBtn.addEventListener("click", findCourse);

function findCourse() {

    let name = document.querySelector("#name");
    let searchText = name.value;

    //find courses by searched text
    let foundItems = level1.filter((item) => {
        if (item.name.includes(searchText))
            return item;
        else return null;
    }
    );

    //adding level2 courses to foundItems
    level2.filter((item) => {
        if (item.name.includes(searchText))
            foundItems.push(item);
    }
    );

    //remove all the li nodes and display searched courses only
    const list = document.querySelectorAll(".media");

    for (let i = 0; i < list.length; i++) {
        document.querySelector(".media").remove();
    };

    for (let i = 0; i < foundItems.length; i++) {
        listCourse(foundItems[i]);
    }

}



//FILTERING SECTION
//Level1 filter
const filterL1 = document.querySelector("#filterL1");
filterL1.addEventListener("click", findL1);

function findL1() {

    findCourse();

    let cousrseLevel = document.querySelectorAll(".courseLevel");
    let currentList = document.querySelectorAll(".media");
    let targetLevel = 1;
    let arr = [];

    //push current list into array(arr) that has mathcing targetLevel
    listToArrayFilter(currentList, arr, cousrseLevel, targetLevel)

    //distributing list
    distributeList(arr, currentList);
}

//Level2 filter
const filterL2 = document.querySelector("#filterL2");
filterL2.addEventListener("click", findL2);

function findL2() {

    findCourse();

    let cousrseLevel = document.querySelectorAll(".courseLevel");
    let currentList = document.querySelectorAll(".media");
    let targetLevel = 2;
    let arr = [];

    //push current list into array(arr) that has mathcing targetLevel
    listToArrayFilter(currentList, arr, cousrseLevel, targetLevel)

    //distributing list
    distributeList(arr, currentList);


}


// SORTING SECTION
//Low to High
const LtoH = document.querySelector("#LtoH");
LtoH.addEventListener("click", sortLtoH);

function sortLtoH() {

    // const currentList = document.querySelectorAll(".courseLevel");
    let currentList = document.querySelectorAll(".media");
    let arr = [];

    //current list to array
    listToArray(currentList, arr);

    arr.sort(function (a, b) {
        if (a.level > b.level)
            return 1;
        if (a.level < b.level)
            return -1;
        return 0;
    });

    //distributing list
    distributeList(arr, currentList);

}

//High to Low
const HtoL = document.querySelector("#HtoL");
HtoL.addEventListener("click", sortHtoL);

function sortHtoL() {

    // const currentList = document.querySelectorAll(".courseLevel");
    let currentList = document.querySelectorAll(".media");
    let arr = [];

    //current list to array
    listToArray(currentList, arr);

    //sort the array of current list
    arr.sort(function (a, b) {
        if (a.level < b.level)
            return 1;
        if (a.level > b.level)
            return -1;
        return 0;
    });

    //distributing list
    distributeList(arr, currentList);

}


//$FUNCTIONS$

//Listing course function
function listCourse(course) {
    let li = document.createElement('li');
    let divbody = document.createElement('div');
    let divImg = document.createElement('div');
    let divCode = document.createElement('div');
    let divName = document.createElement('div');
    let divDescrip = document.createElement('div');
    let divLevel = document.createElement('div');
    let img = document.createElement('img');

    let imgM = document.createElement('div');
    let codeM = document.createElement('div');
    let nameM = document.createElement('div');
    let descripM = document.createElement('div');
    let levelM = document.createElement('div');

    imgM.classList.add('popup');
    codeM.classList.add('popup');
    nameM.classList.add('popup');
    descripM.classList.add('popup');
    levelM.classList.add('popup');

    imgM.textContent = "Image";
    codeM.textContent = "Course Code";
    nameM.textContent = "Course Name";
    descripM.textContent = "Description";
    levelM.textContent = "Level";
    


    li.classList.add('media');
    divbody.classList.add('media-body');
    divImg.classList.add('thumbnail');
    divCode.classList.add('courseCode');
    divName.classList.add('courseName');
    divDescrip.classList.add('description');
    divLevel.classList.add('courseLevel');

    img.classList.add('mr-3', 'courseImg');
    img.setAttribute('src', course.image);
    img.setAttribute('alt', 'course image');

    divCode.textContent = course.code;
    divName.textContent = course.name;
    divDescrip.textContent = course.detail;
    divLevel.textContent = course.level;

    divImg.append(img);
    divbody.appendChild(imgM);
    divbody.appendChild(divImg);
    divbody.appendChild(codeM);
    divbody.appendChild(divCode);
    divbody.appendChild(nameM);
    divbody.appendChild(divName);
    divbody.appendChild(descripM);
    divbody.appendChild(divDescrip);
    divbody.appendChild(levelM);
    divbody.appendChild(divLevel);

    li.append(divbody);
    courseList1.append(li);
}

//Distributing list function
function distributeList(arr, currentList) {
    //get current list and remove
    for (let i = 0; i < currentList.length; i++) {
        document.querySelector(".media").remove();
    };

    //diplay the sorted list
    for (let course of arr) {
        listCourse(course);
    }
}

//Current list to array function
function listToArray(currentList, arr) {
    //push current list into array(arr)
    for (let i = 0; i < currentList.length; i++) {
        arr.push({
            "code": currentList[i].querySelector(".courseCode").textContent, "name": currentList[i].querySelector(".courseName").textContent
            , "detail": currentList[i].querySelector(".description").textContent, "level": currentList[i].querySelector(".courseLevel").textContent
            , "image": currentList[i].querySelector(".courseImg").getAttribute("src"), "alt": currentList[i].querySelector(".courseImg").getAttribute("alt")
        });
    }
}

//Current list to array function for filtering
function listToArrayFilter(currentList, arr, cousrseLevel, targetLevel) {
    //push current list into array(arr)
    for (let i = 0; i < currentList.length; i++) {
        if (cousrseLevel[i].textContent == targetLevel) {
            arr.push({
                "code": currentList[i].querySelector(".courseCode").textContent, "name": currentList[i].querySelector(".courseName").textContent
                , "detail": currentList[i].querySelector(".description").textContent, "level": currentList[i].querySelector(".courseLevel").textContent
                , "image": currentList[i].querySelector(".courseImg").getAttribute("src"), "alt": currentList[i].querySelector(".courseImg").getAttribute("alt")
            });
        }
    }
}