package edu.syr9.fge.api;

import edu.syr9.fge.domain.Access;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicLong;

@RestController
public class FGEAPI {
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Access greeting(@RequestParam(value="name", defaultValue="World") String name) {
        Access access = new Access();
        access.setAccessId(counter.incrementAndGet());
        access.setPageName(String.format(template, name));
        return access;
    }
}
