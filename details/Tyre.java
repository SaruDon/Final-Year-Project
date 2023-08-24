package details;

public class Tyre {
    static String code;
    public static float d1; //inner diameter
    public static float d2; //outer diameter
    public static double thickness;
    public static float wt;
    static double in_vol;
    static double tol_vol;
        public Tyre(String code,double d,float r2, double thickness,float wt){
            Tyre.code =code;
            Tyre.d1=d1;
            Tyre.d2=d2;
            Tyre.thickness=thickness;
            Tyre.wt=wt;
            in_vol= Math.pow(d,2)*3.14*thickness;                                 //Volume of inner tyre    //  V = π * r^2 * h
            tol_vol = 0;
        }   
}
