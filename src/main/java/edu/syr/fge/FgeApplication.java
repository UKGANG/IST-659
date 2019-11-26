package edu.syr.fge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"edu.syr.fge.repository.mapper", "edu.syr.fge.service", "edu.syr.fge.api"})
public class FgeApplication {

	public static void main(String[] args) {
		SpringApplication.run(FgeApplication.class, args);
	}

}
