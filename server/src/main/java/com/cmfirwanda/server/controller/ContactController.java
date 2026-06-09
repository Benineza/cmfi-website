package com.cmfirwanda.server.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cmfirwanda.server.model.ContactMessage;
import com.cmfirwanda.server.service.ContactService;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {
    
    @Autowired
    private ContactService contactService;
    
    @PostMapping("/submit")
    public ResponseEntity<Map<String, Object>> submitContact(@RequestBody ContactMessage contactMessage) {
        Map<String, Object> response = new HashMap<>();
        
        try {
            // Validate input
            if (contactMessage.getName() == null || contactMessage.getName().trim().isEmpty()) {
                response.put("success", false);
                response.put("message", "Name is required");
                return ResponseEntity.badRequest().body(response);
            }
            
            if (contactMessage.getEmail() == null || contactMessage.getEmail().trim().isEmpty()) {
                response.put("success", false);
                response.put("message", "Email is required");
                return ResponseEntity.badRequest().body(response);
            }
            
            if (contactMessage.getMessage() == null || contactMessage.getMessage().trim().isEmpty()) {
                response.put("success", false);
                response.put("message", "Message is required");
                return ResponseEntity.badRequest().body(response);
            }
            
            // Send email to church
            contactService.sendContactEmail(
                contactMessage.getName(),
                contactMessage.getEmail(),
                contactMessage.getMessage()
            );
            
            response.put("success", true);
            response.put("message", "Thank you for your message! We'll get back to you soon.");
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            e.printStackTrace();
            response.put("success", false);
            response.put("message", "Error sending message. Please try again later.");
            return ResponseEntity.internalServerError().body(response);
        }
    }
    
    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> healthCheck() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "OK");
        response.put("service", "CMFI Rwanda Church API");
        return ResponseEntity.ok(response);
    }
}