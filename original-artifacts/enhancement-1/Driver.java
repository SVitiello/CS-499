import java.util.ArrayList;
import java.util.Scanner;

public class Driver {
    private static ArrayList<Dog> dogList = new ArrayList<Dog>();
    // array list to store data for Monkey class
    private static ArrayList<Monkey> monkeyList = new ArrayList<Monkey>(); 
    // Instance variables (if needed)

    public static void main(String[] args) {
    	Scanner input = new Scanner(System.in);
    	initializeDogList();
        initializeMonkeyList();

        // Loop that displays the menu, accepts the users input
        // and takes the appropriate action.
        displayMenu();
        char option = input.next().charAt(0);
        if(option == '1') {
        	intakeNewDog(input);
        } else if(option == '2') {
        	intakeNewMonkey(input);
        } else if(option == '3') {
        	reserveAnimal(input);
        } else if(option == '4') {
        	printAnimals("dog");
        } else if(option == '5') {
        	printAnimals("monkey");
        } else if(option == '6') {
        	printAnimals("available");
        } else if(option == 'q') {
        } else { // prompt for an invalid input from user.
        	System.out.println("Invalid input. Please enter a valid option");
        }
        
    }

    // This method prints the menu options
    public static void displayMenu() {
        System.out.println("\n\n");
        System.out.println("\t\t\t\tRescue Animal System Menu");
        System.out.println("[1] Intake a new dog");
        System.out.println("[2] Intake a new monkey");
        System.out.println("[3] Reserve an animal");
        System.out.println("[4] Print a list of all dogs");
        System.out.println("[5] Print a list of all monkeys");
        System.out.println("[6] Print a list of all animals that are not reserved");
        System.out.println("[q] Quit application");
        System.out.println();
        System.out.println("Enter a menu selection");
    }


    // Adds dogs to a list for testing
    public static void initializeDogList() {
        Dog dog1 = new Dog("Spot", "German Shepherd", "male", "1", "25.6", "05-12-2019", "United States", "intake", false, "United States");
        Dog dog2 = new Dog("Rex", "Great Dane", "male", "3", "35.2", "02-03-2020", "United States", "Phase I", false, "United States");
        Dog dog3 = new Dog("Bella", "Chihuahua", "female", "4", "25.6", "12-12-2019", "Canada", "in service", true, "Canada");

        dogList.add(dog1);
        dogList.add(dog2);
        dogList.add(dog3);
    }


    // Adds monkeys to a list for testing
    //Optional for testing
    public static void initializeMonkeyList() {
    	Monkey monkey1 = new Monkey("Tom", "male", "1", "16", "4-19-2021", "United States", "in service", true, "United States", 9, 7, 6, "Marmoset");
    	
    	monkeyList.add(monkey1);

    }


    // Complete the intakeNewDog method
    // The input validation to check that the dog is not already in the list
    // is done for you
    public static void intakeNewDog(Scanner scanner) {
        System.out.println("What is the dog's name?");
        String name = scanner.nextLine();
        for(Dog dog: dogList) {
            if(dog.getName().equalsIgnoreCase(name)) {
                System.out.println("\n\nThis dog is already in our system\n\n");
                return; //returns to menu
            }
        }

        // Code to instantiate a new dog through user inputs
        System.out.println("What is the dog's breed?");
        String breed = scanner.next();
        System.out.println("What is the dog's gender?");
        String gender = scanner.next();
        System.out.println("What is the dog's age?");
        String age = scanner.next();
        System.out.println("What is the dog's weight?");
        String weight = scanner.next();
        System.out.println("What is the dog's acquisition date? mm/dd/yy format");
        String acquisitionDate = scanner.next();
        System.out.println("What is the dog's acquisition country?");
        String acquisitionCountry = scanner.next();
        System.out.println("What is the dog's training status?");
        String trainingStatus = scanner.next();
        System.out.println("Is this dog reserved? Enter true for reserved, false for not reserved.");
        boolean reserved = scanner.nextBoolean();
        System.out.println("What is this dog's service country?");
        String serviceCountry = scanner.next();
        
        // code to add dog to the dog list
        dogList.add(new Dog(name, breed, gender, age, weight, acquisitionDate, acquisitionCountry, trainingStatus, reserved, serviceCountry));
    }


        // intakeNewMonkey method
	
	// make sure the monkey doesn't already exist in system
        public static void intakeNewMonkey(Scanner scanner) {
            System.out.println("What is the monkey's name?");
            String name = scanner.nextLine();
            for(Monkey monkey: monkeyList) {
                if(monkey.getName().equalsIgnoreCase(name)) {
                    System.out.println("\n\nThis monkey is already in our system\n\n");
                    return; //returns to menu
                }
            }
            
            // obtain input for monkey species and confirm species is accepted.
            System.out.println("What species is the monkey?");
            System.out.println("Accepted species: Capuchin, Guenon, Macaque");
            System.out.println("Marmoset, Squirrel Monkey, and Tamarin");
            String species = scanner.next().toLowerCase();
            if(!species.equals("capuchin") && !species.equals("guenon") && !species.equals("macaque")
            		&& !species.equals("marmoset") && !species.equals("squirrel monkey") && !species.equals("tamarin")) {
            	System.out.println("This monkey species is not currently accepted.");
            	return;
            }
            
            // obtain remaining information for monkey intake
            System.out.println("What is the monkey's gender?");
            String gender = scanner.next();
            System.out.println("What is the monkey's age?");
            String age = scanner.next();
            System.out.println("What is the monkey's weight?");
            String weight = scanner.next();
            System.out.println("What is the monkey's acquisition date? mm/dd/yy format");
            String acquisitionDate = scanner.next();
            System.out.println("What is the monkey's acquisition country?");
            String acquisitionCountry = scanner.next();
            System.out.println("What is the monkey's training status?");
            String trainingStatus = scanner.next();
            System.out.println("Is this monkey reserved? Enter true for reserved, false for not reserved.");
            boolean reserved = scanner.nextBoolean();
            System.out.println("What is this monkey's service country?");
            String serviceCountry = scanner.next();
            System.out.println("What is the monkey's body length in inches?");
            int bodyLength = scanner.nextInt();
            System.out.println("What is the monkey's tail length in inches?");
            int tailLength = scanner.nextInt();
            System.out.println("What is the monkey's height in inches?");
            int height = scanner.nextInt();
            
            // add new monkey to monkey list
            monkeyList.add(new Monkey(name, gender, age, weight, acquisitionDate, acquisitionCountry, trainingStatus, reserved,
            		serviceCountry, bodyLength, tailLength, height, species));
            
        }

        // Complete reserveAnimal
        // You will need to find the animal by animal type and in service country
        public static void reserveAnimal(Scanner scanner) {
            System.out.println("What animal type would you like to reserve? Enter dog or monkey.");
            String animalType = scanner.next().toLowerCase();
            if(!animalType.equals("dog") && !animalType.equals("monkey")) {
            	System.out.println("Invalid input. Please enter an animal type: dog or monkey.");
            	return;
            }
            System.out.println("Enter the animal's service country.");
            String serviceCountry = scanner.next().toLowerCase();
            // check lists based on users input for animal to reserve and reserve animal if available
            if(animalType.equals("dog")) {
            	for(int i = 0; i < dogList.size(); i++) {
            		if(dogList.get(i).getInServiceLocation().equals(serviceCountry) && !dogList.get(i).getReserved()) {
            			System.out.println(dogList.get(i).toString() + "has been successfully reserved.");
            			return;
            		}
            	}
            }
            else {
            	for(int i = 0; i < monkeyList.size(); i++) {
            		if(monkeyList.get(i).getInServiceLocation().equals(serviceCountry) && !monkeyList.get(i).getReserved()) {
            			System.out.println(monkeyList.get(i).toString() + "has been successfully reserved.");
            		}
            	}
            }

        }

        // Complete printAnimals
        // Include the animal name, status, acquisition country and if the animal is reserved.
	// Remember that this method connects to three different menu items.
        // The printAnimals() method has three different outputs
        // based on the listType parameter
        // dog - prints the list of dogs
        // monkey - prints the list of monkeys
        // available - prints a combined list of all animals that are
        // fully trained ("in service") but not reserved 
	// Remember that you only have to fully implement ONE of these lists. 
	// The other lists can have a print statement saying "This option needs to be implemented".
	// To score "exemplary" you must correctly implement the "available" list.
        public static void printAnimals(String type) {
            if(type.toLowerCase().equals("dog")) {
            	System.out.println("List of dogs:");
            	for(Dog dog: dogList) {
            		System.out.println(dog.getName() + ", " + dog.getTrainingStatus() + ", " + 
            	dog.getAcquisitionLocation() + ", " + dog.getReserved());
            	}
            }
            else if(type.toLowerCase().equals("monkey")) {
            	System.out.println("List of monkeys:");
            	for(Monkey monkey: monkeyList) {
            		System.out.println(monkey.getName() + ", " + monkey.getTrainingStatus() + ", " + 
            	monkey.getAcquisitionLocation() + ", " + monkey.getReserved());
            	}
            }
            else if(type.toLowerCase().equals("available")) {
            	System.out.println("List of all available animals:");
            	for(Dog dog : dogList) {
            		if(dog.getTrainingStatus().equalsIgnoreCase("in service") && !dog.getReserved()) {
            			System.out.println(dog.getName() + ", " + dog.getTrainingStatus() + ", " + 
            		dog.getAcquisitionDate());
            		}
            	}
            	for(Monkey monkey : monkeyList) {
            		if(monkey.getTrainingStatus().equalsIgnoreCase("in service") && !monkey.getReserved()) {
            			System.out.println(monkey.getName() + ", " + monkey.getTrainingStatus() + ", " +
            		monkey.getAcquisitionDate());
            		}
            	}
            }

        }
}
