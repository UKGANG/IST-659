package edu.syr9.fge;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

public class ServletInitializer extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(FgeApplication.class);
	}

	@RequestMapping("/")
	public ModelAndView home()
	{
	    ModelAndView modelAndView = new ModelAndView();
	    modelAndView.setViewName("index");
	    return modelAndView;
	}
}
