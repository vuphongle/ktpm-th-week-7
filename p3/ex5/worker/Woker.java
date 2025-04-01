import redis.clients.jedis.Jedis;
import java.sql.*;

public class Worker {
    public static void main(String[] args) {
        Jedis jedis = new Jedis("redis", 6379);
        while (true) {
            String vote = jedis.lpop("votes");
            if (vote != null) {
                saveVoteToDb(vote);
            }
        }
    }

    public static void saveVoteToDb(String vote) {
        try (Connection conn = DriverManager.getConnection("jdbc:postgresql://postgres:5432/votes", "user", "password")) {
            String sql = "INSERT INTO votes (choice) VALUES (?)";
            try (PreparedStatement stmt = conn.prepareStatement(sql)) {
                stmt.setString(1, vote);
                stmt.executeUpdate();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
