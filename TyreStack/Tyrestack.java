package TyreStack;
import details.Tyre;

public class Tyrestack {
    

    public static double stackheight;

    public static boolean tyreSatckIsValid(Tyre t1 , Tyre t2,){
        if (!(t2.wt>=t1.wt)) {
            return false;
        }
        if (stackheight>totalHeight) {
            return false;
        }
        return true;
    }

}
