package hu.springIsmetles;

import org.springframework.stereotype.Component;

@Component("angler")
public class Angler implements Fisher{


    @Override
    public void catchFish(Fish fish) {
        System.out.println("Elloptam a "+fish.getName()+" halat");
    }



}