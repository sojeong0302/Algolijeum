import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        int A;
        int B;
        Scanner sc = new Scanner(System.in);
        A=sc.nextInt();
        B=sc.nextInt();
        if (A>0 && B<10)
        {
            double C=A/(double)B;
            System.out.println(C);
        }else {
            System.out.println("조건에 맞게 입력하시오");
        }
    }
}