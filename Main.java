import details.Container;
import details.Tyre;


public class Main{
    
    
    public static boolean canFitInside(Tyre t1, Tyre  t2){
        return t1.d2>t2.d1;
    } 
    


    
    
    
    
    public static void main(String[] args) {
        // all measurements are in ft;


        Tyre t1 = new Tyre("AAYUSHMAAN R1", 16, 28, 	14.9, 1250);
        // Tyre t2 = new Tyre("AAYUSHMAAN Front", 13.25 , 15 , 	14.9, 1250);
        Tyre t2 = new Tyre("AAYUSHMAAN Front", 13.5, 15, 14.9, 1250);

        Container c = new Container(7.9, 40, 7.8);
    }
}