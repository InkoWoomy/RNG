//Fetch the names.json
//Change the Text so that first name, last name, and the two emails are in the left box once the button is pressed
//once the button is pressed, pushed the previous response to a list on the right side.

let generatingButton = document.getElementById("generatingButton");
let name0 = document.getElementById("name0");
let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let name3 = document.getElementById("name3");
let name4 = document.getElementById("name4");
let name5 = document.getElementById("name5");
let codestackEmail0 = document.getElementById("codestackEmail0");
let codestackEmail1 = document.getElementById("codestackEmail1");
let codestackEmail2 = document.getElementById("codestackEmail2");
let codestackEmail3 = document.getElementById("codestackEmail3");
let codestackEmail4 = document.getElementById("codestackEmail4");
let codestackEmail5 = document.getElementById("codestackEmail5");
let email0 = document.getElementById("email0");
let email1 = document.getElementById("email1");
let email2 = document.getElementById("email2");
let email3 = document.getElementById("email3");
let email4 = document.getElementById("email4");
let email5 = document.getElementById("email5");

let pastList = [];


function GetJSON()
{
   return fetch('../data/names.json')
    .then(
        response => response.json()
    ).then(
        data => {
            console.log(data)
            return data.codestackMembers;
        }
    )
}

GetJSON();

function randomData(members)
{
    let randomIndex = Math.floor(Math.random() * members.length);
    console.log([randomIndex]);
    return members[randomIndex];
}

generatingButton.addEventListener('click', () => {
    GetJSON()
    .then( 
        codestackMembers => { 
        let randomMember = randomData(codestackMembers);
        console.log(randomMember);
        name0.innerText = randomMember.firstName + " " + randomMember.lastName;
        codestackEmail0.innerText = randomMember.codeStackEmail;
        email0.innerText = randomMember.email;
        pastList.push(randomMember);
        if (pastList.length > 5)
        {
            pastList.splice(pastList[0], 1);
        }

        name1.innerText = pastList[0].firstName + " " + pastList[0].lastName;
        name2.innerText = pastList[1].firstName + " " + pastList[1].lastName;
        name3.innerText = pastList[2].firstName + " " + pastList[2].lastName;
        name4.innerText = pastList[3].firstName + " " + pastList[3].lastName;
        name5.innerText = pastList[4].firstName + " " + pastList[4].lastName;

        codestackEmail1.innerText = pastList[0].codeStackEmail;
        codestackEmail2.innerText = pastList[1].codeStackEmail;
        codestackEmail3.innerText = pastList[2].codeStackEmail;
        codestackEmail4.innerText = pastList[3].codeStackEmail;
        codestackEmail5.innerText = pastList[4].codeStackEmail;

        email1.innerText = pastList[0].email;
        email2.innerText = pastList[1].email;
        email3.innerText = pastList[2].email;
        email4.innerText = pastList[3].email;
        email5.innerText = pastList[4].email;



        codeStackEmail1.innerText = randomMember.firstName

        console.log(pastList)
        }
    )
});