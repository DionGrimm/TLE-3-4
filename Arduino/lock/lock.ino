#include <ESP8266WiFi.h>
 
const char* ssid = "Fox Flight";     // login wifi netwerk
const char* password = "196270512405";

int redLedPin = 5;   
int greenLedPin =4;

int redBlink = true;
int greenBlink = true;

int sound = 16;

 

WiFiServer server(80);
 
void setup() {
  Serial.begin(115200);
  delay(10);

 pinMode(redLedPin,OUTPUT);
 pinMode(greenLedPin,OUTPUT);
 pinMode(sound,OUTPUT);

 
  // Connect to WiFi network
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

 // makes connection with the wifi network
  WiFi.begin(ssid, password);  
 
  while (WiFi.status() != WL_CONNECTED) {  
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
 
  // Start the server
  server.begin();
  Serial.println("Server started");
 
  // Print the IP address
  Serial.print("Use this URL to connect: ");
  Serial.print("http://");
  Serial.print(WiFi.localIP());
  Serial.println("/");
 
}
 
void loop() {
  // Check if a client has connected
  WiFiClient client = server.available();
  if (!client) {
    return;
  }
 
  // Wait until the client sends some data
  Serial.println("new client");
  while(!client.available()){
    delay(1);
  }
 
  // Read the first line of the request
  String request = client.readStringUntil('\r');
  Serial.println(request);
  client.flush();
 
  // Match the request
 
  int value = LOW;
  
  // when the lock button is pressed the led turns red
  if (request.indexOf("/LED=Red") != -1)  {

    if (redBlink == true){

       digitalWrite(sound,HIGH);
       digitalWrite(redLedPin,HIGH);
       delay(100);
       digitalWrite(redLedPin,LOW);
       digitalWrite(sound,LOW);
       delay(100);

          redBlink = false;   
    } 

     digitalWrite(redLedPin,HIGH);
     digitalWrite(greenLedPin,LOW);
    
      value = HIGH;
      greenBlink = true;
      
  }

   // when the Unlock button is pressed the led turns green
  if (request.indexOf("/LED=Green") != -1)  {

       if (greenBlink == true){

       digitalWrite(sound,HIGH);
       digitalWrite(greenLedPin,HIGH);
       delay(100);
       digitalWrite(greenLedPin,LOW);
       digitalWrite(sound,LOW);
       delay(100);

          greenBlink = false;
      
    }

     digitalWrite(greenLedPin,HIGH);
     digitalWrite(redLedPin,LOW);
        
    value = LOW;
    redBlink = true;
  }
 
 
  // Return the response
  client.println("HTTP/1.1 200 OK");
  client.println("Content-Type: text/html");
  client.println("");
  client.println("<!DOCTYPE HTML>");
  client.println("<html>");
 
  client.print("Led pin is now: ");
 
  if(value == HIGH) {
    client.print("Red");
  } else {
    client.print("Green");
  }
  client.println("<br><br>");
  client.println("<a href=\"/LED=Red\"\"><button>Lock</button></a>");
  client.println("<a href=\"/LED=Green\"\"><button>Unlock </button></a><br />");  
  client.println("</html>");
 
  delay(1);
  Serial.println("Client disonnected");
  Serial.println("");
 
}
