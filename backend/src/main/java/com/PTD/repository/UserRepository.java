
package com.PTD.repository;
import com.PTD.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
public interface UserRepository extends JpaRepository<User,Long>{
 Optional<User> findByEmail(String email);
 Optional<User> findByRegNum(String regnum);
 boolean existsByEmail(String email);

 boolean existsByEmailAndUserIdNot(
         String email,
         Long userId
 );

}
