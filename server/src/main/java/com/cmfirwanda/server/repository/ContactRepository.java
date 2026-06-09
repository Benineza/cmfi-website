package com.cmfirwanda.server.repository;

import com.cmfirwanda.server.model.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ContactRepository extends JpaRepository<ContactMessage, Long> {
    
    // Find unread messages
    List<ContactMessage> findByIsReadFalse();
    
    // Find messages by email
    List<ContactMessage> findByEmail(String email);
    
    // Custom query to find recent messages
    @Query("SELECT c FROM ContactMessage c ORDER BY c.createdAt DESC")
    List<ContactMessage> findAllOrderByDateDesc();
    
    // Count unread messages
    @Query("SELECT COUNT(c) FROM ContactMessage c WHERE c.isRead = false")
    long countUnreadMessages();
}