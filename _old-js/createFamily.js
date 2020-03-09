
function makeChild(name) {
    this.children.push({
        name: name,
        parents: `${this.wife} and ${this.husband}`,
    });
}
function createFamily(husband, wife) {
    return {
        wife: wife,
        husband: husband,
        children: [],
        makeChild: makeChild,
    };
}

const family = createFamily('Alehandro', 'Barbara');
family.makeChild('Mikle');
console.log(family);
