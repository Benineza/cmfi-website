package com.cmfirwanda.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactService {
    
    @Autowired
    private JavaMailSender mailSender;
    
    public void sendContactEmail(String name, String email, String message) {
        SimpleMailMessage emailMessage = new SimpleMailMessage();
        
        // To: Church email
        emailMessage.setTo("cmci.rwanda@gmail.com");
        
        // Subject
        emailMessage.setSubject("New Contact Message from " + name);
        
        // Body
        String emailBody = String.format(
            "You have received a new message from the church website:\n\n" +
            "Name: %s\n" +
            "Email: %s\n\n" +
            "Message:\n%s\n\n" +
            "---\n" +
            "This message was sent from the church website contact form.",
            name, email, message
        );
        
        emailMessage.setText(emailBody);
        
        // Reply-to is the person who filled the form
        emailMessage.setReplyTo(email);
        
        // Send the email
        mailSender.send(emailMessage);
    }
}