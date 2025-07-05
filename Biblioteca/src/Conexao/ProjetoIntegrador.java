package Conexao;
import java.sql.*;

public class ProjetoIntegrador {
    private static final String URL = "jdbc:postgresql://localhost:5432/Resgatech";
    private static final String USUARIO = "postgres";
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

    public static void setUser(int id_usuario,String CPF,String email,String senha,String nomecompleto, String telefone){
        String sql = "INSERT INTO Usuario (id_usuario,CPF,email,senha,nomecompleto,datacadastro,telefone) VALUES (?,?,?,?,?,NOW(),?)";
        Connection conexao = null;
        PreparedStatement stmt = null;

        try{
            conexao = conectar();
            if(conexao != null) {
                stmt = conexao.prepareStatement(sql);
                stmt.setInt(1,id_usuario);
                stmt.setString(2, CPF);
                stmt.setString(3, email);
                stmt.setString(4, senha);
                stmt.setString(5, nomecompleto);
                stmt.setString(6, telefone);
                int linhasAfetadas = stmt.executeUpdate();
                if (linhasAfetadas > 0) {
                    System.out.println("Aluno" + nomecompleto + "Inserido no BD com sucesso.");
                }
            }
        }catch(SQLException e){
            System.err.println("Erro ao inserir aluno no PostgresSQL:" + e.getMessage());
        }finally {
            try{
                if(stmt != null) stmt.close();
                if(conexao != null) fecharConexao(conexao);
            }catch (SQLException e){
                System.err.println("Erro ao fechar recursos após inserção:" + e.getMessage());

            }
        }
    }

    public static void getUser(){
        String sql = "SELECT id_usuario,cpf,email,nomecompleto,datacadastro,telefone FROM Usuario ORDER BY id_usuario";
        Connection conexao = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;
        try{
            conexao = conectar();
            if(conexao != null) {
                stmt = conexao.prepareStatement(sql);
                rs = stmt.executeQuery();
                System.out.println("\n--- Usuarios Cadastrados ---");
                boolean encontrouAluno = false;
                while (rs.next()) {
                    int id = rs.getInt("id_usuario");
                    String cpf = rs.getString("cpf");
                    String email = rs.getString("email");
                    String nomecompleto = rs.getString("nomecompleto");
                    Date datacadastro = rs.getDate("datacadastro");
                    String telefone = rs.getString("telefone");
                    System.out.println("ID:" + id + ", CPF:" + cpf + ", Email" + email + ", Nome Completo:" + nomecompleto + ", Data Cadastro:" + datacadastro + ",telefone" + telefone);
                }
                if(!encontrouAluno){
                    System.out.println("Nenhum usuario encontrado.");
                }
                System.out.println("------------------------------\n");
            }
        }catch(SQLException e){System.err.println("Erro ao consultar usuarios no BD:" + e.getMessage());
        }finally {
            try{
                if(rs != null) rs.close();
                if(stmt != null) stmt.close();
                if(conexao != null) fecharConexao(conexao);
            }catch (SQLException e){System.err.println("Erro ao fechar recursos após consulta" + e.getMessage());
            }
        }
    }


    public static void main(String[] args){
        Connection testeConexao = ConexaoPostgresDB.conectar();
        System.out.println("\n--- Realizando Inserções");
        //setUser(1,"04529679020","jorgeSilva@gmail.com","jorgaopneus","Jorge Da Silva Reis Boehme","51982072220");
        setUser(2,"04529454567","josue123@gmail.com","josueborracharias","Josue Silva de Souza Nietzke","51982075456");

        System.out.println("\n--- Realizando Consulta---");
        getUser();
        if(testeConexao != null){
            ConexaoPostgresDB.fecharConexao(testeConexao);

        }

    }

}
