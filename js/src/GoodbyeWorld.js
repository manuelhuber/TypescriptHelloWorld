///<reference path="HelloWorld.ts"/>
/**
 * Created by Manuel on 23.09.2015.
 */
var World;
(function (World) {
    var GoodbyeWorld = (function () {
        function GoodbyeWorld(world) {
            this.theWorld = world;
        }
        GoodbyeWorld.prototype.isWandering = function () {
            return false;
        };
        GoodbyeWorld.prototype.currentWorld = function () {
            return "My current world says: " + this.theWorld.printMessage();
        };
        return GoodbyeWorld;
    })();
    World.GoodbyeWorld = GoodbyeWorld;
})(World || (World = {}));
//# sourceMappingURL=GoodbyeWorld.js.map