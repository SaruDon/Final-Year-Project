import details.Container;
import details.Tyre;

import java.util.ArrayList;
import java.util.Stack;

import TyreStack.tyreVerticalStack;


public class Main{
    
    
    public static boolean canFitInside(Tyre t1, Tyre  t2){
        return t1.d2>t2.d1;
    } 
            
    public static void main(String[] args) {
        // all measurements are in ft;


        Tyre t1 = new Tyre("AAYUSHMAAN R1", 16, 28, 	14.9, 1250);
        // Tyre t2 = new Tyre("AAYUSHMAAN Front", 13.25 , 15 , 	14.9, 1250);
        Tyre t2 = new Tyre("AAYUSHMAAN Front", 13.5, 15, 14.9, 1250);
        Tyre t3 = new Tyre("Demo Tyre", 10, 12, 8, 12);
        Tyre t4 = new Tyre("stack Tyre", 9, 11,12 , 12);
        Container c = new Container(100, 40, 7.8);
        ArrayList<Tyre> listOfTyre = new ArrayList<>();
        listOfTyre.add(t1);
        listOfTyre.add(t2);
        listOfTyre.add(t3);
        listOfTyre.add(t4);
        Stack<Tyre> stacklayer= tyreVerticalStack.stackTyre(listOfTyre);
        while (!stacklayer.isEmpty()) {
            System.out.println(stacklayer.peek().wt);
            stacklayer.pop();
        }  
        System.out.println("height: "+tyreVerticalStack.stackVheight);    
    }
}