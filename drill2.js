let thing = {
    foo: "now",
    bar: "drink",
    fum: "for",
    quux: "heaven's",
    spam: "sake!",
};

for (const property in thing) {
    console.log(`${property}: ${thing[property]}`);
}