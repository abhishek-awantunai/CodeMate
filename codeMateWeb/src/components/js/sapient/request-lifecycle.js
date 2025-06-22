/*
Request Lifecycle :-

HTTP :- Hyper Text Transfer Protocol

It is a application layer protocol that allows web-based applications to communicate and exchange data.

The HTTP is the messenger of the Web.

It is a TCP / IP based protocol.

It is used to deliver contents for example images, videos, audios, documents etc.

Important things about HTTP :-
    - It is connection-less i.e after making the request the client disconnect from the server, then when the response is ready the server re-establish the connection again and deliver the response.

    - The HTTP i.e it can deliver any sort of data as long as the two computers are able to read it.

    - The HTTP is stateless i.e client and server know each other just during the current request.
    
    
REQUEST RESPONSE CYCLE :-
    - Using TCP/IP connection it established a connection between the server and the client via internet  and a suitable environment is created for the to use http and share data.

    - REQUEST ( HTTP message ) :- When connection is established the client sends request called HTTP message and since Http is a connection-less protocol, the client disconnects from server and waits for the response.
    
    - Server processes the request and prepares the response and establishes the connection again and sends back the response again in the form of HTTP message to the client and disconnects.


HTTP message :-
    - Start Line :-
    - Headers
    - Body

*/