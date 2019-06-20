import javax.servlet.http.*;  
import javax.servlet.*;  
import java.io.*; 
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;
import java.util.HashMap;
import java.util.Map;
import org.json.simple.JSONArray; 
import org.json.simple.JSONObject; 
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.* ;




public class singrec extends HttpServlet{


 public native String getrec(String name); 

   static {
   System.load("C:\\Program Files\\Apache Software Foundation\\Tomcat 9.0\\webapps\\processapp\\WEB-INF\\classes\\myjni1.dll");
    }



public void doGet(HttpServletRequest req,HttpServletResponse res)  
throws ServletException,IOException  
{ 



    singrec hello = new singrec(); 

  String id = req.getParameter("id");
  String a =  hello.getrec(id);





res.setContentType("application/json");


PrintWriter out = res.getWriter();
JSONObject jo = new JSONObject();
JSONArray ja = new JSONArray();


res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
   






  // System.out.println(a[i]);
    Map  m = new LinkedHashMap(10);
    String data[] = a.split(",");
    m.put("cpu" , data[0]);
    m.put("tpt" , data[1]);
    m.put("sh" , data[2]);

    ja.add(m);





      jo.put("data" , ja);
      out.println(jo);


}









}  