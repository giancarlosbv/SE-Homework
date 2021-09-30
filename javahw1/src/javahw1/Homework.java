package javahw1;

public class Homework {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Write an if/else statement FOR GRADES
		int stuScore = 89;
		
		if (stuScore>=90) {
			System.out.println("Student got an A");
		} else if (stuScore>=80) {
			System.out.println("Student got a B");
		}else if (stuScore>=70) {
			System.out.println("Student got a C");
		}else if (stuScore>=55) {
			System.out.println("Student got a D");
		}else if (stuScore<55) {
			System.out.println("Student got an F");
		}
		
//		Using switch case, do the following:
//			Store a number between 1-7
//			If the number is 1, display a message "Monday", 2 for "Tuesday", 3 for "Wednesday" etc.
//			Anything other than 1-7 would default to "Invalid Input"
		////////////////////////////////////
		
		int day = 9;
		String dayString = "";
		switch(day) {
		case 1: dayString = "Monday";
		break;
		case 2: dayString = "Tuesday";
		break;
		case 3: dayString = "Wednesday";
		break;
		case 4: dayString = "Thursday";
		break;
		case 5: dayString = "Friday";
		break;
		case 6: dayString = "Saturday";
		break;
		case 7: dayString = "Sunday";
		break;
		default: dayString = "Invalid Input";
		}
		
		System.out.println(dayString);
		
//			Store a number in a variable called num and write an if statement: 
//			If num is odd, display "Cool"
//			If num is even and between 2-5, display "Not Cool"
//			If num is even and between 6-20, display "Cool"
//			If num is even and greater than 20, display "Not Cool
		
		int num = 22;
				if (num % 2 != 0) {
					System.out.println("Cool");
				} else if (num % 2 == 0 && num>=2 && num<=5) {
					System.out.println("Not Cool");
				} else if (num % 2 == 0 && num>=6 && num<=20) {
					System.out.println("Cool");
				} else if (num % 2 == 0 && num>20) {
					System.out.println("Not Cool");
				}
		
	}
}
