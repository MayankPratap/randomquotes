$(document).ready(function(){ 

   var quotes=["Java is to JavaScript what Car is to Carpet. -- Chris Heilman","If debugging is the process of removing software bugs, then programming must be the process of putting them in. -- Edsger Dijkstra","First, solve the problem. Then, write the code. -- John Johnson"," Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration. -- Stan Kelly","Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. -- Rick Osborne","Copy and paste is a design error. -- David Parnas"," When someone says,'I want a programming language in which I need only say what I want done,' give him a lollipop. -- Alan Perlis","Computers are good at following instructions, but not at reading your mind. -- Donald Knuth","Talk is cheap. Show me the code -- Linus Torvalds"," don't care if it works on your machine! We are not shipping your machine! -- Vidu","Measuring programming progress by lines of code is like measuring aircraft building progress by weight. -- Bill Gates","“To iterate is human, to recurse divine -- L.Peter","Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. -- Linus Torvalds","when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create. -- Anonymous","Give a man a program, frustrate him for a day."
+"Teach a man to program, frustrate him for a lifetime.","Always work hard on something uncomfortably exciting. -- Larry Page"];

    var quoteholder="",len=0,check=false;

    $('#newquote').click(showquote);

      function showquote(){

        check=true;
        
        len=quotes.length;  //Stores number of quotes
 
        quoteholder=quotes[Math.floor(Math.random()*len)];  //Select a particular quote

        $('#quote p mark').text(quoteholder);  //Insert that quote into html
      } 



        $('#tweet').click(tweetquote);

        function tweetquote(){

          if(check==true){  //will not tweet if a new quote button is not clicked

            var quotesplit=quoteholder.split(" "); //Seperate each word of quote

            len=quotesplit.length;  //Number of words in quote selected

            for(var i=0;i<len-1;++i){
            
               quotesplit[i]=quotesplit[i]+'%20'; //encoding words of quote to fit in our twitter url
            }

            quoteholder=quotesplit.join("");  //Again join the modified words

            var url='https://twitter.com/intent/tweet?text='+quoteholder;
            window.location.href=url;
          
            check=false;          
 
         }



       }

});
