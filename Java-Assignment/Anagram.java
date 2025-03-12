import java.util.Arrays;
import java.util.Scanner;

public class Anagram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Input: ");
        String str1 = scanner.next().toLowerCase();

        System.out.print("Input: ");
        String str2 = scanner.next().toLowerCase();

        System.out.println("Output: " + isAnagram(str1, str2));

        scanner.close();
    }

    public static boolean isAnagram(String str1, String str2) {
        if (str1.length() != str2.length()) 
        return false;

        char[] arr1 = str1.toCharArray();
        char[] arr2 = str2.toCharArray();

        Arrays.sort(arr1);
        Arrays.sort(arr2);

        return Arrays.equals(arr1, arr2);
    }
}
