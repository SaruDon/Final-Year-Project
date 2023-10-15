package details;

public class Tyre {
    public String code;
    public  double d1; //inner diameter
    public  double d2; //outer diameter
    public  double thickness;
    public double in_vol;
    public double tol_vol;
    public Tyre(String code, double d1, double d2, double thickness) {
        this.code = code;
        this.d1 = d1;         // Assign the parameter d1 to the field d1
        this.d2 = d2;         // Assign the parameter d2 to the field d2
        this.thickness = thickness;
        this.in_vol = Math.pow(d1, 2) * 3.14 * thickness;  // Volume of inner tyre // V = π * r^2 * h
        tol_vol = 0;
    }
      
}
