package hu.springIsmetles;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class FishingRod {
    private @Getter Fisher owner;


    @Autowired
    public void setOwner(@Qualifier("angler") Fisher owner) {
        this.owner = owner;
        System.out.println(this.owner);
    }



    @Override
    public String toString() {
        return "FishingRod{" +
                "owner=" + owner +
                '}';
    }


}
