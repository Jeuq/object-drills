let humans = [
    {name: "Melissa", jobtitle: "manager"},

    {name: "Georgia", jobtitle: "horticulturalist"},

    {name: "Jenn", jobtitle: "linguist"},

    {name: "Alex", jobtitle: "guide"}
]

function listHumans(humans) {
    for (let i=0; i < humans.length; i++) {
        console.log(`${humans[i].name} is a ${humans[i].jobtitle}.`);
    }
}

listHumans(humans);