    package TwoDimension;

    import details.Container;
    import details.Tyre;
    // import TyreStack.tyreVerticalStack;
    import java.util.ArrayList;
    import java.util.Collections;
    import java.util.Comparator;
    import java.util.LinkedList;
    import java.util.Queue;
import java.util.Stack;
import java.util.Vector;

    public class  Plane {
        double x;
        double y;
        double length;
        double width;

        public Plane(Container c) {
            this.x = 0;
            this.y =0;
            this.length = c.cLength;
            this.width = c.cWidth;
        }

        static int index=0;
        static boolean cantFit= true;


        
        public static boolean canFitInPlaneRow(Plane p,Container c,Tyre t,Double rowLength,Double rowWidth,ArrayList<Tyre> listOfTyre,Queue<Tyre>row,ArrayList<Queue<Tyre>>aa){
            if (rowLength+t.d2>c.cLength) {
                Queue<Tyre> tempqQueue = new LinkedList<>(row);
                aa.add(tempqQueue);
                row.clear();
                p.x =0;
                Tyre tyretobe_used=null;
                while (!listOfTyre.isEmpty()) {
                    double width = p.y + listOfTyre.get(0).d2;
                    System.out.println(listOfTyre.get(0).code);
                    System.out.println(width);
                
                    if (width < c.cWidth) {
                        tyretobe_used = listOfTyre.get(0);
                        System.out.println("1st tyre in next row: " + tyretobe_used.code);
                        break;
                    }
                    index++;
                    if (index >= listOfTyre.size()) {
                        p.x = rowLength;
                        cantFit = false;
                        return false;
                    }
                    System.out.println(listOfTyre.get(0).code);
                    listOfTyre.add(listOfTyre.remove(0));
                }
                p.y += tyretobe_used.d2;
                return false;
            }
            return true;
        }


        public static void arrangement(Container c, ArrayList<Tyre> listOfTyre) {
            Plane p = new Plane(c);
            ArrayList<Tyre>listOfTyres =listOfTyre;
            ArrayList<Queue<Tyre>>aa = new ArrayList<>();
            Queue<Tyre> row = new LinkedList<>();
            while(!listOfTyre.isEmpty()){
                if (index!=0 && canFitInPlaneRow(p, c, listOfTyres.get(0), p.x,p.y,listOfTyres,row,aa)) {
                    // i =index;
                    Tyre t = listOfTyres.get(0);
                    row.add(t);
                    System.out.println(t.code);
                    p.y = Math.max(p.y, t.d2);
                    p.x += t.d2;
                    listOfTyres.remove(0);
                    System.out.println(c.cLength-p.x+"is remaining length");
                    System.out.println();
                }
                else if (canFitInPlaneRow(p, c, listOfTyres.get(0), p.x,p.y,listOfTyres,row,aa)) {
                    Tyre t = listOfTyres.get(0);
                    row.add(t);
                    System.out.println(t.code);
                    p.y = Math.max(p.y, t.d2);
                    p.x += t.d2;
                    listOfTyres.remove(0);
                    System.out.println(c.cLength-p.x+"is remaining length");
                    System.out.println();
                }
                else if(!cantFit){
                    //now I need to stack
                    System.out.println("Now I need to stack");
                    printArrayListOfQueue(aa);
                    nowStack(listOfTyre,aa,c);
                    break;
                }
            }
        }


        private static void printArrayListOfQueue(ArrayList<Queue<Tyre>> aa) {
            for (int i = 0; i < aa.size(); i++) {
                Queue<Tyre> currentQueue = aa.get(i);
                Queue<Tyre> tempQueue = new LinkedList<>();
        
                // Move elements from currentQueue to tempQueue and print them
                        System.out.println("Queue"+i);
                while (!currentQueue.isEmpty()) {
                    Tyre element = currentQueue.peek();
                    System.out.println(element.code);
                    tempQueue.add(element);
                    currentQueue.remove();
                }
                System.out.println();
                // Restore elements back to currentQueue
                while (!tempQueue.isEmpty()) {
                    currentQueue.add(tempQueue.poll());
                }
            }
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
            if (t1.thickness+t2.thickness>Container.cHeight) {  //if height of stack exced conatiner conatiner height 
                return false;
            }
            return true;
        }

    
        public static Tyre tyreConsolidation(Tyre t1,Tyre t2){ 
            if (tyreIntyre(t1,t2)) {
                double newtyreInner = Math.min(t1.d1, t2.d1);
                double newTyreOuter =Math.max(t1.d2, t2.d2);
                double newTyreThiknes = Math.max(t1.thickness, t2.thickness);
                Tyre newTyre = new Tyre("newTyre",newtyreInner , newTyreOuter, newTyreThiknes);
                return newTyre;  
            }
            return null;
        }


        public static void nowStack(ArrayList<Tyre>listOPfTyres,ArrayList<Queue<Tyre>>aa,Container c){
            while (!listOPfTyres.isEmpty()) {
                for (int i = 0; i < aa.size(); i++) {
                    Queue<Tyre> currentQueue = aa.get(i);
                    ArrayList<Tyre>list = new ArrayList<>(currentQueue);
                    for (int j = 0; j < list.size(); j++) {
                        while (!listOPfTyres.isEmpty()) {
                            System.out.println(listOPfTyres.size());
                           if(tyreIntyre(list.get(j),listOPfTyres.get(0)) && tyreSatckIsValid(list.get(j),listOPfTyres.get(0))){
                                list.set(j,tyreConsolidation(list.get(j),listOPfTyres.get(0)));
                            }else{
                                //stack
                                System.out.println(listOPfTyres.get(0).code);
                                if (tyreSatckIsValid(list.get(j).thickness,list.get(j),listOPfTyres.get(0))) {
                                    System.out.println("Stack the tyre");
                                    stackArraylist(list.get(j).thickness,aa.size(),c, list,listOPfTyres);
                                }
                            } 
                        } 
                    }
                }
            }
        }

        public static boolean tyreSatckIsValid(double h,Tyre t1 , Tyre t2){
            //t2 heavy than t1                         
            /*
             *   So stack will be like
             *    |t1|
             *    |t2|
             */
            // if (!(t1.wt>t2.wt)) {
            //     return false;
            // }
            if (h+t1.thickness+t2.thickness>Container.cHeight) {  //if height of stack exced conatiner conatiner height 
                return false;
            }
            return true;
        }


        private static Stack<Tyre> copyStack(Stack<Tyre> original) {
            // Use the constructor of Vector to create a copy of the original stack
            Vector<Tyre> vectorCopy = new Vector<>(original);
            
            // Convert the vector to a stack
            Stack<Tyre> copy = new Stack<>();
            copy.addAll(vectorCopy);

            return copy;
        }

        public static void stackArraylist(double h,int size,Container c,ArrayList<Tyre>list,ArrayList<Tyre>listOfTyres){
            double x=0;
            double y=h;

            ArrayList<Stack<Tyre>>aaStack = new ArrayList<>(size);
            Stack<Tyre>stack = new Stack<>();
            for (int i = 0; i < size; i++) {
                if (listOfTyres.isEmpty()) {
                    break;
                }
                if ((y += listOfTyres.get(0).thickness)>Container.cHeight) {
                    Stack<Tyre> tempStack = copyStack(stack);
                    aaStack.add(tempStack);
                    stack.clear();
                                        
                    y = list.get(i).thickness;
                    i--;
                    continue;
                }
                while (!listOfTyres.isEmpty() &&  y+listOfTyres.get(0).thickness<c.cHeight) {
                    System.out.println("At"+i+" "+listOfTyres.get(0).code+"is stacked");
                    stack.push(listOfTyres.get(0));
                    y += listOfTyres.get(0).thickness;
                    listOfTyres.remove(0);
                }
            }
        }
    }
