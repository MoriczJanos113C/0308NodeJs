package matrix;

import java.util.Scanner;

public class Matrix {

    public static void main(String[] args) {
        int m, n, i, j, temp;
 
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of rows ");
 
        m = sc.nextInt();
 
        System.out.print("Enter number of columns ");
 
        n = sc.nextInt();
 
        // declare a mxn order array
        int a[][] = new int[m][n];
 
        // if block it's execute when m is equals to n
        if (m == n) {
            System.out.println(
                "Enter all the values of matrix ");
 
            // take the matrix inputs
            for (i = 0; i < m; i++) {
                for (j = 0; j < n; j++) {
                    a[i][j] = sc.nextInt();
                }
            }
 
            System.out.println("original Matrix:");
 
            // print the original matrix
            for (i = 0; i < m; i++) {
                for (j = 0; j < n; j++) {
                    System.out.print(a[i][j] + " ");
                }
                System.out.println("");
            }
 
            // perform interchange
            for (j = 0; j < m; j++) {
                temp = a[j][j];
                a[j][j] = a[j][n - 1 - j];
                a[j][n - 1 - j] = temp;
            }
            System.out.println(
                " after interchanging diagonals of matrix ");
 
            // print interchanged matrix
            for (i = 0; i < m; i++) {
                for (j = 0; j < n; j++) {
                    System.out.print(a[i][j] + " ");
                }
                System.out.println("");
            }
        }
 
        // else block it's only execute when m is not equals
        // to n
        else {
            System.out.println("Rows not equal to columns");
        }
    }
}