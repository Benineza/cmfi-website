package com.cmfirwanda.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ChurchApplication {
    public static void main(String[] args) {
        SpringApplication.run(ChurchApplication.class, args);
        System.out.println("CMFI Rwanda Church Backend Started!");
        System.out.println("Contact form API: http://localhost:8080/api/contact/submit");
    }
}