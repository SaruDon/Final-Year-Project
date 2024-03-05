package TryAndError;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

class Tyre { // Changed the class name to "Tyre"
    int length;
    char symbol;

    public Tyre(int length, char symbol) {
        this.length = length;
        this.symbol = symbol;
    }
}

class Container { // Changed the class name to "Container"
    private char[][] container;
    private int rows;
    private int cols;
    private int filledSpace;

    public Container(int rows, int cols) {
        this.rows = rows;
        this.cols = cols;
        this.filledSpace = 0;
        container = new char[rows][cols];
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                container[i][j] = '-';
            }
        }
    }

    public boolean placeTyre(Tyre tyre) { // Changed the method name to "placeTyre"
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (canPlaceTyre(tyre, i, j)) { // Changed the method name to "canPlaceTyre"
                    placeTyreAtPosition(tyre, i, j); // Changed the method name to "placeTyreAtPosition"
                    return true;
                }
            }
        }
        return false;
    }

    public boolean canPlaceTyre(Tyre tyre, int row, int col) { // Changed the method name to "canPlaceTyre"
        for (int i = 0; i < tyre.length; i++) {
            for (int j = 0; j < tyre.length; j++) {
                int r = row + i;
                int c = col + j;
                if (r >= rows || c >= cols || container[r][c] != '-') {
                    return false;
                }
            }
        }
        return true;
    }

    public void placeTyreAtPosition(Tyre tyre, int row, int col) { // Changed the method name to "placeTyreAtPosition"
        for (int i = 0; i < tyre.length; i++) {
            for (int j = 0; j < tyre.length; j++) {
                container[row + i][col + j] = tyre.symbol;
            }
        }
        filledSpace += tyre.length * tyre.length;
    }

    public boolean isOccupied(int row, int col) {
        return container[row][col] != '-';
    }

    public char[][] getContainer() {
        return container;
    }

    public double getPercentageFilled() {
        return (double) filledSpace / (rows * cols) * 100.0;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of rows and columns of the container: ");
        int containerRows = scanner.nextInt();
        int containerCols = scanner.nextInt();

        System.out.print("Enter the number of tyres: "); // Changed "tires" to "tyres"
        int numTyres = scanner.nextInt(); // Changed "tires" to "tyres"

        List<Tyre> tyres = new ArrayList<>(); // Changed "tires" to "tyres"
        System.out.println("Enter the lengths and symbols of each tyre (e.g., 4 A):"); // Changed "tires" to "tyres"
        for (int i = 0; i < numTyres; i++) {
            int length = scanner.nextInt();
            char symbol = scanner.next().charAt(0);
            tyres.add(new Tyre(length, symbol)); // Changed "tires" to "tyres"
        }

        Collections.sort(tyres, (a, b) -> Integer.compare(b.length, a.length));

        Container container = new Container(containerRows, containerCols);

        for (Tyre tyre : tyres) { // Changed "tire" to "tyre"
            if (!container.placeTyre(tyre)) { // Changed "placeTire" to "placeTyre"
                System.out.println("Cannot fit all tyres into the container."); // Changed "tire" to "tyre"
                return;
            }
        }

        System.out.println("Arrangement of tyres in the container:"); // Changed "tires" to "tyres"
        char[][] containerContents = container.getContainer();
        for (int i = 0; i < containerRows; i++) {
            for (int j = 0; j < containerCols; j++) {
                System.out.print(container.isOccupied(i, j) ? containerContents[i][j] + " " : "- ");
            }
            System.out.println();
        }

        System.out.println("Percentage of the container filled: " + container.getPercentageFilled() + "%");
    }
}
