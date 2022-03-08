package hu.springIsmetles;

public class FishingBag implements FisherBag{

    @Override
    public void getBag(Bag bag) {
        System.out.println("Elloptam a "+bag.getName()+" halat");
    }


}
