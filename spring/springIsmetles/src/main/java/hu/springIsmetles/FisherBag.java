package hu.springIsmetles;


import lombok.Getter;
import org.springframework.stereotype.Component;

@Component
public class FisherBag{
    private @Getter Bag bag;

    @Override
    public String toString() {
        return "FishingRod{" +
                "owner=" + bag +
                '}';
    }


    @Override
    public void getBag(Bag bag) {
        this.bag = bag;
        System.out.println(this.bag);
    }
}