import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        int A;
        int B;
        Scanner sc = new Scanner(System.in);
        A=sc.nextInt();
        B=sc.nextInt();

        if(-10000<=A && B<=10000) {
            if (A > B) {
                System.out.println(">");
            }
            if (A < B) {
                System.out.println("<");
            }if(A==B){
                System.out.println("==");
            }
        }
    }
}