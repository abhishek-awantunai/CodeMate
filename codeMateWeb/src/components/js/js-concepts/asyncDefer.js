/**

ASYNC and DEFER :-
    - These are boolean attributes which are used along script tag to load external attributes efficiently in our web page.  


1) Normal Script Load

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/ajax.js"></script>

HTML LOAD :-    ---------------1------------------                              --------------4--------------
JS  LOAD :-                                       ------2------ -------3--------

Step 1 :- Html comes to browser and it starts getting parsed until it sees script tag.After seeing the script tag it pauses its parsing and starts working on the script tag. 

Step 2 :- JS file is being download from the server.

Step 3 :- JS file is being fully executed and completes its execution.

Step 4 :- Html parsing resumes from where it was left.


2) Async Script Load

<script async type="text/javascript" src="http://ajax.googleapis.com/ajax/ajax.js"></script>

HTML LOAD :-    ---------------1------------------                 --------------4--------------
JS  LOAD :-                          ------2------ -------3--------

Step 1 :- Html comes to browser and it starts getting parsed and in parallel it starts downloading the scripts until it fully downloads the script.Once scripts are ready to be executes HTML parsing pauses unit the scripts will be completely executed.

Step 2 :- JS file is being download from the server.

Step 3 :- JS file is being fully executed and completes its execution.

Step 4 :- Html parsing resumes from where it was left.


3) Defer Script Load

<script defer type="text/javascript" src="http://ajax.googleapis.com/ajax/ajax.js"></script>

HTML LOAD :-    ------------------------------1-------------------------------
JS  LOAD :-                    ---------------2------------------             -------------3--------------

Step 1 :- Html comes to browser and it starts getting parsed and in parallel it starts downloading the scripts and after completely parsing the HTML its starts its JS execution.

Step 2 :- JS file is being download from the server.

Step 3 :- JS file is being fully executed and completes its execution.

*/