/// <reference path ="..\typings\jasmine\jasmine.d.ts" />
/**
 * Created by Manuel on 23.09.2015.
 */
describe("Testing HelloWorld", function () {
        var testWorld: World.HelloWorld;
        beforeAll(function(){
            testWorld = new World.HelloWorld("TestMessage");
        })
        it("create HelloWorld & Message", function () {
                expect(testWorld.printMessage()).toBe("TestMessage");
                expect(testWorld.getTested()).toBe("I got tested!");
                expect(testWorld.isWandering()).toBe(true);
            }
        )
        it("create GoodbyeWorld", () => {
            var testGoodbye = new World.GoodbyeWorld(testWorld);
            expect(testGoodbye.currentWorld()).toBe("My current world says: TestMessage");
        })
    }
)
