const enhancer = require('./enhancer.js');
// test away!

var items = [
    { name: 'sword', durability: 90, enhancement: 19 },
    { name: 'armor', durability: 50, enhancement: 20},
    { name: 'shield', durability: 100, enhancement: 15},
    { name: 'dagger', durability: 100, enhancement: 13},
    { name: 'bow', durability: 100, enhancement: 16},
    { name: 'arrow', durability: 100, enhancement: 17}

]


describe("enhancer tests", () => {

    it("Enhancer Repairs", () => {
        expect(enhancer.repair(items[0])).toEqual({ name: 'sword', durability: 100, enhancement: 19})
    })

    it("Enhancer Succeeds", () => {
        expect(enhancer.success(items[2])).toEqual({ name: 'shield', durability: 100, enhancement: 16})
       
    })

    it("Enhancer Fails", () => {
        expect(enhancer.fail(items[3])).toEqual({ name: 'dagger', durability: 100, enhancement: 8})
        expect(enhancer.fail(items[4])).toEqual({ name: 'bow', durability: 100, enhancement: 6})
        expect(enhancer.fail(items[5])).toEqual({name: 'arrow', durability: 100, enhancement: 16})
    })

})