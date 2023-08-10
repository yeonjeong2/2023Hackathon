package hackerton.hackathon.Repository;

import hackerton.hackathon.Domain.UserDB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface UserRepository extends JpaRepository<UserDB, Integer> {

    UserDB findByUserName(String userName);

    UserDB findByToken(String token);

    void deleteByUserName(String userName);
}
