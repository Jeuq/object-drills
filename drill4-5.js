let humans = [
    {name: "Melissa", jobtitle: "manager", boss: "the owner"},

    {name: "Georgia", jobtitle: "horticulturalist", boss: "the plant gods"},

    {name: "Jenn", jobtitle: "linguist"},

    {name: "Alex", jobtitle: "guide", boss: "an unseen figure behind the scenes"}
];

function listHumans(humans) {
    for (let i=0; i < humans.length; i++) {
        if ('boss' in humans[i] == true)  {
            console.log(`${humans[i].jobtitle} ${humans[i].name} reports to ${humans[i].boss}.`);
        }
        else {
            console.log(`${humans[i].jobtitle} ${humans[i].name} reports to themself.`);
        }
    }
}

listHumans(humans)