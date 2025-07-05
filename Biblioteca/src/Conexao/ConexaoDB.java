package Conexao;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class ConexaoDB {

    private static final String URL = "jdbc:mysql://localhost:3306/mydb";
    private static final String USUARIO = "root";
    private static final String SENHA = "root";


    public static Connection conectar(){
        Connection conexao = null;

        try{
            conexao = DriverManager.getConnection(URL,USUARIO,SENHA);
            System.out.println("Conexão com o banco de dados estabelecida com sucesso");
        }catch(SQLException error){
            System.err.println("Erro ao conectar ao bd:" + error.getMessage());

        } return conexao;
    }
    public static void fecharConexao(Connection conexao){
        if(conexao != null){
            try{
                conexao.close();
                System.out.println("Conexao com bd fechada!");

            }catch (SQLException e){
                System.err.println("Erro ao fechar a conexão com bd:" + e.getMessage());
            }

        }
    }
    public static void main(String[] args){
        Connection testeConexao = ConexaoDB.conectar();
        if(testeConexao != null){
        ConexaoDB.fecharConexao(testeConexao);

        }
    }
}
