package TyreStack;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Stack;

import details.Container;
import details.Tyre;

public class tyreVerticalStack {
    
    public static double stackVheight;   //to calculate overall height of stack

    public static boolean tyreSatckIsValid(Tyre t1 , Tyre t2){
        //t2 heavy than t1                         
        /*
         *   So stack will be like
         *    |t1|
         *    |t2|
         */
        // if (!(t1.wt>t2.wt)) {
        //     return false;
        // }
        if (stackVheight>Container.cHeight) {  //if height of stack exced conatiner conatiner height 
            return false;
        }
        return true;
    }

    public static boolean tyreIntyre(Tyre t1, Tyre t2){
        //considering t1>t2  
        /*
            {t1{t2}}  //big,small
        */      
        if (t2.d2>t1.d1) {      //d2 is outer diameter  and d1 is inner diameter
            return false;
        }
        if (t1.thickness<t2.thickness) {
            return false;
        }
        return true;
    }
 

    /*
     * Tyre consildation is used if t1 can fit inside t2 i.e {t2{t1}}
     * t4={t2{t1}}
     */
    public static Tyre tyreConsolidation(Tyre t1,Tyre t2){ 
        if (tyreIntyre(t1,t2)) {
            double newtyreInner = Math.min(t1.d1, t2.d1);
            double newTyreOuter =Math.max(t1.d2, t2.d2);
            double newTyreThiknes = Math.max(t1.thickness, t2.thickness);
            float newTyreWt= t1.wt+t2.wt;
            Tyre newTyre = new Tyre("newTyre",newtyreInner , newTyreOuter, newTyreThiknes,newTyreWt);
            return newTyre;  
        }
        return null;
    }

    

   /*
    * implementation
    if we have 3 tyres in increasing order t1, t2, t3
    t1 can fit inside t3 but t2 can't   (t2 > t3 > t1)

    
    
    cheack  contion for tyre in tyre
    sooo... {t3(t1())}  we will consider this tyre as a single unit name it as t4
    t2 can't fit inside t4 so we will stack them
    
    <t2>
    <t4>
    
    
    flow of program:
    * I'm having arraylist which are tyres that we have to manage 

    * take these tyre as input Arraylist in function "stackTyre" of stack retun type
        check condition for tyreIntyre
           if true -> execute tyreIntyre -> consolidate tyre and add in arraylist
           else -> stack tyre -> remove tyre from arraylist
    

    same logic for all other tyres

    */

    public static Stack<Tyre> stackTyre(ArrayList<Tyre> tyre){  //arraylist is list of type tyres that we are going to manage
        Stack<Tyre> stackTyre = new Stack<>();
        while (tyre.size()!=1) {
            if (tyreIntyre(tyre.get(0),tyre.get(1))){
                tyre.add(tyreConsolidation(tyre.get(0), tyre.get(1)));
                tyre.remove(0);
                tyre.remove(0);
                Collections.reverse(tyre);           
            }
            if (tyre.size()==2) {
                for (int i = 0; i < tyre.size() && tyre.size()!=0; i++) {
                    stackTyre.push(tyre.get(i));
                    stackVheight += tyre.get(i).thickness;
                    tyre.remove(i);
                }
            }
        }        
      
        for (int i = 0; i < tyre.size() && tyre.size()!=0; i++) {
                if(tyreSatckIsValid(tyre.get(i),stackTyre.peek())){
                    stackTyre.push(tyre.get(i));
                    stackVheight += tyre.get(i).thickness;
                    tyre.remove(i);
                }
                
        }        
        return stackTyre;
    }
}
