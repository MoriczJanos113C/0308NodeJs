package hu.springIsmetles;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Primary
@Component("fisher")
public class SportFisher implements Fisher{

    @Override
    public void catchFish(Fish fish) {
        System.out.println("Megfogtam: "+ fish.getName() + "halat");
    }


}