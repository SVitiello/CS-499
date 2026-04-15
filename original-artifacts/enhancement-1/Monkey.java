// monkey class that inherits from the rescue animal class
public class Monkey extends RescueAnimal {
	// declare variables for attributes specified for monkey
	private String species;
	private int tailLength;
	private int height;
	private int bodyLength;


// constructor method for all attributes
	public Monkey(String name, String gender, String age, String weight, String acquisitionDate, String acquisitionCountry,
		String trainingStatus, boolean reserved, String inServiceCountry, int bodyLength, int tailLength, int height, String species) {
		setName(name);
        setGender(gender);
        setAge(age);
        setWeight(weight);
        setAcquisitionDate(acquisitionDate);
        setAcquisitionLocation(acquisitionCountry);
        setTrainingStatus(trainingStatus);
        setReserved(reserved);
        setInServiceCountry(inServiceCountry);
		setSpecies(species);
		setTailLength(tailLength);
		setHeight(height);
		setBodyLength(bodyLength);
	}
	// accessors and mutators for monkey specific variables:
	//mutator for species
	public void setSpecies(String species) {
		this.species = species;	
	}

	//accessor for species
	public String getSpecies() {
		return species;
	}

	//mutator for tail length
	public void setTailLength(int tailLength) {
		this.tailLength = tailLength;	
	}

	//accessor for trail length
	public int getTailLength() {
		return tailLength;
	}

	//mutator for height
	public void setHeight(int height) {
		this.height = height;
	}

	//accessor for height
	public int getHeight() {
		return height;
	}

	//mutator for body length
	public void setBodyLength(int bodyLength) {
		this.bodyLength = bodyLength;
	}

	//accessor for body length
	public int bodyLength() {
		return bodyLength;
	}
}
