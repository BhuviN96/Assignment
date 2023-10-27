import java.util.*;
public class java_B {
    public static void main(String[] args){
        Scanner sc  = new Scanner(System.in);
        System.out.println("Enter Roman Number: ");
        String str = sc.nextLine().toUpperCase();
        HashMap<Character,Integer> hmap = new HashMap<Character,Integer>();
        hmap.put('I',1);
        hmap.put('V',5);
        hmap.put('X',10);
        hmap.put('L',50);
        hmap.put('C',100);
        hmap.put('D',500);
        hmap.put('M',1000);
        int final_answer = strToRoman(hmap,str);
        System.out.println(final_answer);
    }
    public static int strToRoman(HashMap<Character,Integer>hMap,String str){
        int answer = 0;
        int prev_value = 0 ;
        int curr_value = 0 ;
        for(int  i = str.length()-1 ; i >= 0 ; i--){
            prev_value = curr_value;
            curr_value = hMap.get(str.charAt(i));
            if(curr_value>prev_value){
                answer+=curr_value;
            }else{
                answer-=curr_value;
            }
        }
        return answer;
    }
}
