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




public class AllRec extends HttpServlet{


 public native String[] sayHi(); 

   static {
   System.load("C:\\Program Files\\Apache Software Foundation\\Tomcat 9.0\\webapps\\processapp\\WEB-INF\\classes\\myjni.dll");
    }



public void doGet(HttpServletRequest req,HttpServletResponse res)  
throws ServletException,IOException  
{ 



    AllRec hello = new AllRec(); 

  String a[] =  hello.sayHi();





res.setContentType("application/json");


PrintWriter out = res.getWriter();
JSONObject jo = new JSONObject();
JSONArray ja = new JSONArray();


res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
   




  for(int i = 0 ; i < a.length ; i++)
  {

  // System.out.println(a[i]);
    Map  m = new LinkedHashMap(10);
    String data[] = a[i].split(",");
    m.put("id" , data[0]);
    m.put("ProcessName" , data[1]);
    m.put("handles" , data[2]);
    m.put("pm" , data[3]);
    m.put("npm" , data[4]);
    m.put("vm" , data[5]);
    m.put("ws" , data[6]);

    ja.add(m);

  }





      jo.put("data" , ja);
      out.println(jo.toJSONString());


}









}  