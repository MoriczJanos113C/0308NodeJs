package hu.springIsmetles;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringIsmetlesApplication {



	public static void main(String[] args) {
		System.out.println("A program elindul...");
		SpringApplication.run(SpringIsmetlesApplication.class, args);
		System.out.println("A program befejeződött...");
	}


}