package details;

public class Container {
    public static double cHeight;
    public static double cLength;
    public static double cWidth;
    public static double cVol;
    public Container(double cHeight,double cLength,double cWidth){
        Container.cHeight= cHeight;
        Container.cLength= cLength;
        Container.cWidth= cWidth;
        Container.cVol = cHeight*cLength*cWidth;
    }
}
