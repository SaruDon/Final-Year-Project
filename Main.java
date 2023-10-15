import details.Container;
import details.Tyre;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.Stack;

import TyreStack.tyreVerticalStack;


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
    // listOfTyre.add(new Tyre("Vardhan Rear Tractor Tyre 03", 28, 54.7, 14.9));
    // listOfTyre.add(new Tyre("Vardhan Rear Tractor Tyre 04", 28, 57, 16.9)); 
    listOfTyre.add(new Tyre("", 16, 29.7, 6)); // Weight not provided
    
    listOfTyre.add(new Tyre("Vardhan Front Tractor Tyre 01", 16, 31.8, 7.5)); // Weight not provided
    listOfTyre.add(new Tyre("Vardhan Front Tractor Tyre 02", 20, 34.6, 6.5)); // Weight not provided
    listOfTyre.add(new Tyre("AAYUSHMAAN Front Tractor Tyres 01", 14, 25, 5.5)); // Weight not provided
    listOfTyre.add(new Tyre("AAYUSHMAAN Front Tractor Tyres 02", 16, 29, 6)); // Weight not provided
    listOfTyre.add(new Tyre("AAYUSHMAAN Front Tractor Tyres 03", 16, 32, 6.5)); // Weight not provided
    listOfTyre.add(new Tyre("AAYUSHMAAN Front Tractor Tyres 04", 20, 34.2, 6.5)); // Weight not provided

    listOfTyre.add(new Tyre("Aayushmaan Rear, Agriculture Tyre 01", 24, 44, 11.9));
    listOfTyre.add(new Tyre("Aayushmaan Rear, Agriculture Tyre 02", 28, 50, 12.4));
    // listOfTyre.add(new Tyre("Aayushmaan Rear, Agriculture Tyre 03", 28, 52, 13.6));
    // listOfTyre.add(new Tyre("Aayushmaan Rear, Agriculture Tyre 04", 28, 54, 14.9));
    // listOfTyre.add(new Tyre("Aayushmaan Rear, Agriculture Tyre 05", 28, 57, 16.9));
    listOfTyre.add(new Tyre("Aayushmaan Rear,  Agriculture Tyre 06", 30, 59, 16.9));
    listOfTyre.add(new Tyre("Aayushmaan Rear, Agriculture Tyre 07", 38, 62, 15.5));

        Comparator<Tyre> innerDiameterComparator = (tyre1, tyre2) -> Double.compare(tyre2.d1, tyre1.d1);

        Collections.sort(listOfTyre, innerDiameterComparator);

        for (Tyre tyre : listOfTyre) {
            System.out.println(tyre.code);
        }
        Container c = new Container(100, 40, 7.8);
        // ArrayList<Tyre> listOfTyre = new ArrayList<>();
        // listOfTyre.add(t1);
        // listOfTyre.add(t2);
        // listOfTyre.add(t3);
        // listOfTyre.add(t4);
        Stack<Tyre> stacklayer= tyreVerticalStack.stackTyre(listOfTyre);
        while (!stacklayer.isEmpty()) {
            System.out.println(stacklayer.peek().in_vol);
            stacklayer.pop();
        }  
        System.out.println("height: "+tyreVerticalStack.stackVheight);    
    }
}