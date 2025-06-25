/**

CORS - Cross Origin Resource Sharing

It is a mechanism which uses additional HTTP headers to tell the browser if a web app can share resource with another web app at different origins. 

If they have same origin then they can easily share the resource but if they have different origins then they follow the CORS policy.

If Origin A needs to get some resource from Origin B then first of all a CORS PREFLIGHT request will be sent i.e a Preflight / Options call will be made.

When Preflight is sent from Origin A to Origin B then Origin B checks is its a valid request or not and then tells the browser if its a valid request or not and once Origin B verifies its valid it sends back additional Http headers supporting the CORS policy telling the browser it is safe to make a call.

These headers gets added from Origin B after Preflight is sent back
Accept-Control-Allow-Origin: *
Accept-Control-Allow-Methods: [GET, PUT, POST, DELETE, PATCH]

Simple Call & Preflight Call
Every time Preflight call isn't made only on some condition its called otherwise simple call is made.

*/