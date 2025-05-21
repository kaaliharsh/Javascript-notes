

class Pen {
    String type;
    String color;

    void setType(String type, String color) {
        this.type = type;
        this.color=color;
    }
    @Override 
    public String toString(){
        return type+ color;
    }
}

public class understandClass {
    public static void main(String[] args) {
        Pen pen1 = new Pen();
        pen1.setType("Gel", "Blue");
        String ans=pen1.toString();
        System.out.println(ans);
    }
}