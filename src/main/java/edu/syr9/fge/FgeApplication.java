package edu.syr9.fge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"edu.syr9.fge.dao", "edu.syr9.fge.service", "edu.syr9.fge.api"})
public class FgeApplication {

	public static void main(String[] args) {
		SpringApplication.run(FgeApplication.class, args);
	}

}
