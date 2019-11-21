package edu.syr9.fge.api;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.syr9.fge.domain.Access;

@RestController
public class FGEAPI {
	private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();

	@GetMapping(path = "/greeting")
	public Access greeting(@RequestParam("userName") String userName, @RequestParam("password") String password) {
		Access access = new Access();
		access.setAccessId(counter.incrementAndGet());
		access.setPageName(String.format(template, userName));
		return access;
	}
}
