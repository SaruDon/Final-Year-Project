    package TwoDimension;

    import details.Container;
    import details.Tyre;
    // import TyreStack.tyreVerticalStack;
    import java.util.ArrayList;
    import java.util.Collections;
    import java.util.Comparator;
    import java.util.LinkedList;
    import java.util.Queue;

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
                while(!listOfTyre.isEmpty()) {
                    double width  =p.y+listOfTyre.get(0).d2;
                    if (width<c.cWidth) {
                        tyretobe_used= listOfTyre.get(0);
                        System.out.println("1st tyre in next row:"+tyretobe_used.code);
                        break;
                    }
                    index++;
                    if (index>listOfTyre.size()) {
                        p.x= rowLength;
                        cantFit = false;
                        return false;
                    }
                    listOfTyre.add(listOfTyre.get(0));
                    listOfTyre.remove(0);
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
        
    }
