import details.Container;
import details.Tyre;
import TwoDimension.Plane;
// import TwoDimention.Plane;
// import TyreStack.tyreVerticalStack;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Stack;



public class Main{
    
    
    public static boolean canFitInside(Tyre t1, Tyre  t2){
        return t1.d2>t2.d1;
    } 
            
    public static void main(String[] args) {
        // all measurements are in ft;

        ArrayList<Tyre> listOfTyre = new ArrayList<>();

        // Input tires and add them to the ArrayList
// Add Tyre objects based on the provided information
    listOfTyre.add(new Tyre("Vardhan Rear Tractor Tyre 01", 28, 50.8, 12.4));
    listOfTyre.add(new Tyre("Vardhan Rear Tractor Tyre 02", 28, 53.3, 13.6));
    listOfTyre.add(new Tyre("Sarvesh Tyre", 16, 29.7, 6)); // Weight not provided
    listOfTyre.add(new Tyre("Vardhan Front Tractor Tyre 01", 16, 31.8, 7.5)); // Weight not provided
    listOfTyre.add(new Tyre("Vardhan Front Tractor Tyre 02", 20, 34.6, 6.5)); // Weight not provided
    listOfTyre.add(new Tyre("AAYUSHMAAN Front Tractor Tyres 01", 14, 25, 5.5)); // Weight not provided
    listOfTyre.add(new Tyre("AAYUSHMAAN Front Tractor Tyres 02", 16, 29, 6)); // Weight not provided
    listOfTyre.add(new Tyre("AAYUSHMAAN Front Tractor Tyres 03", 16, 32, 6.5)); // Weight not provided
    listOfTyre.add(new Tyre("AAYUSHMAAN Front Tractor Tyres 04", 20, 34.2, 6.5)); // Weight not provided
    listOfTyre.add(new Tyre("Aayushmaan Rear, Agriculture Tyre 01", 24, 44, 11.9));
    listOfTyre.add(new Tyre("Aayushmaan Rear, Agriculture Tyre 02", 28, 50, 12.4));
    listOfTyre.add(new Tyre("Aayushmaan Rear,  Agriculture Tyre 06", 30, 59, 16.9));
    listOfTyre.add(new Tyre("Aayushmaan Rear, Agriculture Tyre 07", 38, 62, 15.5));

        Comparator<Tyre> innerDiameterComparator = (tyre1, tyre2) -> Double.compare(tyre2.d1, tyre1.d1);

        Collections.sort(listOfTyre, innerDiameterComparator);

        for (Tyre tyre : listOfTyre) {
            System.out.println(tyre.code+"Outer dia+ "+tyre.d2);
        }
        Container c = new Container(94.1875, 232.125, 100.5);
        // TwoDimension.Plane p = new TwoDimension.Plane(c); 


        
        System.out.println("Arrangement");
        Plane.arrangement(c, listOfTyre);
    }
}