//var fname = prompt("Enter first Name");
//var lname = prompt("Enter last name");
//var fullName = fname+" "+lname;
//document.write(""+fullName);



//var mobile = prompt("Enter your favorite mobile phone model");
//document.write(""+mobile.length);



//var word = "Pakistani";
//var found = word.indexOf("n");
//document.write("Index of 'n' "+found);


//var lastletter = "Hello world";
//document.write(lastletter.lastIndexOf("l"));


//var word2 = "Pakistani";
//document.write("character at index 3 :  "+word2.charAt(3));


// concat method 

//var fname = prompt("Enter first Name");
//var lname = prompt("Enter last name");
//var fullName = fname.concat(" "+lname) ;
//document.write("contact"+fullName);


//program to replace word

//var city = "hyderabad";
//document.write(city.replace("hydera","Islama"))

//replace and with &
//var message = "Ali and Sami are best friends. They play cricket and football together.";
//if(message.match("and"))
//{
    // /and//g perform global replacement
  //  document.write(message.replace(/and/g,"&"));
//}


// string to integer 

var n_s= "472";
var integer =parseInt(n_s);
//document.write("Value : "+integer+" ");
//document.write("<br>");
//document.write("Type : "+typeof(integer));

//show input in capital letters

var word_p = "peanuts";
var c_word =  word_p.toUpperCase()
//document.write("capital "+c_word);


// first word capital

var word_j = "javascript";
//document.write(""+ word_j.charAt(0).toUpperCase()+word_j.slice(1));


var  n_f=35.36;
var n_s = n_f.toString();

//document.write(typeof(n_s));
//document.write(n_s.replace('.',''));


//var userInput = prompt("User Name");
var regex = /^[!@#\$%\^\&*\)\(+=._-]+$/g

    if(userInput.match(regex)){
    //if(regex.test(userInput)){ 
    //alert("Enter valid username");
    }


    A = ["cake", "apple pie", "cookie", "chips", "patties"] 
    for (let i = 0; i < A.length; i++) {
            document.write(A[i]);
    }  


