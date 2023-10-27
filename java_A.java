import java.util.*;
public class java_A {
    public static void main(String[]args){
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        Random ran = new Random();
        for(int i = 0 ; i<arr.length ; i++){
            int  a = ran.nextInt(arr.length-1);
            int temp = arr[i];
            arr[i] = arr[a];
            arr[a] = temp;
        }
        for(int i = 0 ; i < arr.length;i++){
            System.out.println(arr[i]);
        }
    }
}