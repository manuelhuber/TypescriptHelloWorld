var World;
(function (World) {
    var HelloWorld = (function () {
        function HelloWorld(input) {
            this.message = input;
        }
        HelloWorld.prototype.isWandering = function () {
            return true;
        };
        HelloWorld.prototype.printMessage = function () {
            return this.message;
        };
        HelloWorld.prototype.getTested = function () {
            return "I got tested!";
        };
        HelloWorld.prototype.getNotTested = function () {
            return "You will never read this!";
        };
        return HelloWorld;
    })();
    World.HelloWorld = HelloWorld;
})(World || (World = {}));
//# sourceMappingURL=HelloWorld.js.map