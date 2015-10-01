
/**
 * Created by Manuel on 23.09.2015.
 */
module World{
    export class GoodbyeWorld implements WorldWanderer{
        theWorld: HelloWorld;

        isWandering():boolean {
            return false;
        }

        constructor(world: HelloWorld) {
            this.theWorld = world;
        }

        currentWorld(): string {
            return "My current world says: " + this.theWorld.printMessage();
        }

    }
}
