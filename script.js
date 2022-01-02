var finalCap;

function captcha() {
    var random_num = Math.random() * 10000;
    var floor_num = Math.floor(random_num);

    var digit = (num, c = 0) => {
        if (num) {
            return digit(Math.floor(num / 10), ++c);
        };
        return c;
    };

    var count = digit(floor_num);

    if (count == 3) {
        finalCap = floor_num + "0";
    }
    else if (count == 2) {
        finalCap = "0" + floor_num + "0";
    }
    else {
        finalCap = floor_num;
    }

    document.getElementById('capch').value = finalCap;
}



let firstflag = 0, lastflag = 0, fathersflag = 0, mobilenumflag = 0, mailflag = 0, accnumflag = 0, pincodeflag = 0, repincodeflag = 0, genderflag = 0, accbal = 0, capchaflag = 0;
let correctName = /^[A-Za-z]+$/;
let fathercorrectName = /^[A-Za-z _]+$/;
    
function firstnamecheck(elem){
    let name = elem.value.trim();
    
       
        if(name.length == 0){
            document.getElementById("finam").style="color:red";
            document.getElementById('finam').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> FirstName is Empty";
    
            firstflag = 0;
        }
        else{  
            if(name.match(correctName)){
            document.getElementById("finam").style="color:green";
            document.getElementById('finam').innerHTML="<i class='far fa-check-circle' style='font-size:1.2rem;'></i> FirstName is Correct";
    
            firstflag = 1;
            }else{
                document.getElementById("finam").style="color:red";
                document.getElementById('finam').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Enter Only Alphavates";
        
                firstflag = 0;
           }
    }

    }


function lastnamecheck(elem1){
    let lastname = elem1.value.trim();
    if(lastname.length == 0){
        document.getElementById("linam").style="color:red";
        document.getElementById('linam').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> LastName is Empty";

        lastflag = 0;
    }
    else{  
        if(lastname.match(correctName)){
           document.getElementById("linam").style="color:green";
           document.getElementById('linam').innerHTML="<i class='far fa-check-circle' style='font-size:1.2rem;'></i> LastName is Correct";

           lastflag = 1;
        }else{
            document.getElementById("linam").style="color:red";
            document.getElementById('linam').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Enter Only Alphavates";
    
            lastflag = 0;
        }
    }
}

function fathersnamecheck(elem2){
    let fathersname = elem2.value.trim();
    if(fathersname.length == 0){
        document.getElementById("fainam").style="color:red";
        document.getElementById('fainam').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Father's Name is Empty";

        fathersflag = 0;
    }
    else{  
        if(fathersname.match(fathercorrectName)){
            document.getElementById("fainam").style="color:green";
            document.getElementById('fainam').innerHTML="<i class='far fa-check-circle' style='font-size:1.2rem;'></i> Father's Name is Correct";

            fathersflag = 1;
        }else{
            document.getElementById("fainam").style="color:red";
            document.getElementById('fainam').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Enter Only Alphavates";
    
            fathersflag = 0;
        }
    }
}

function mobilenumcheck(elem3){
    let mobilenum = elem3.value.trim();
    if(isNaN(mobilenum)){
        document.getElementById("mobnum").style="color:red";
        document.getElementById('mobnum').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Please Enter valid Mobile Number";
        mobilenumflag = 0;
    }else{
    if(mobilenum.length == 0){
        document.getElementById("mobnum").style="color:red";
        document.getElementById('mobnum').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Mobile Number is Empty";

        mobilenumflag = 0;
    }
    else{  
        if(mobilenum.length < 10){
            document.getElementById("mobnum").style="color:red";
            document.getElementById('mobnum').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Mobile Number must be 10 Digits";
    
            mobilenumflag = 0;
        }else if(mobilenum.length > 10){
            document.getElementById("mobnum").style="color:red";
            document.getElementById('mobnum').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Mobile Number  is Not Greater then 10 Digits";
    
            mobilenumflag = 0;
        }
        else{
        document.getElementById("mobnum").style="color:green";
        document.getElementById('mobnum').innerHTML="<i class='far fa-check-circle' style='font-size:1.2rem;'></i> Mobile Number is Correct";

        mobilenumflag = 1;
        }
    }
}
}

function mailcheck(elem4){
    let mail = elem4.value.trim();
    if(mail.length == 0){
        document.getElementById("mail").style="color:red";
        document.getElementById('mail').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Mail is Empty";

        mailflag = 0;
    }
    else{  
        document.getElementById("mail").style="color:green";
        document.getElementById('mail').innerHTML="<i class='far fa-check-circle' style='font-size:1.2rem;'></i> Mail is Correct";

        mailflag = 1;
    }
}

function accnumcheck(elem5){
    let accnum = elem5.value.trim();
    if(isNaN(accnum)){
        document.getElementById("accnum").style="color:red";
        document.getElementById('accnum').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Please Enter valid Account Number";
        accnumflag = 0;
    }else{
    if(accnum.length == 0){
        document.getElementById("accnum").style="color:red";
        document.getElementById('accnum').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Account Number is Empty";

        accnumflag = 0;
    }
    else{  
        if(accnum.length < 12){
            document.getElementById("accnum").style="color:red";
            document.getElementById('accnum').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Account Number must be 12 Digits";
    
            accnumflag = 0;
        }else if(accnum.length > 12){
            document.getElementById("accnum").style="color:red";
            document.getElementById('accnum').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Account Number  is Not Greater then 12 Digits";
    
            accnumflag = 0;
        }
        else{
        document.getElementById("accnum").style="color:green";
        document.getElementById('accnum').innerHTML="<i class='far fa-check-circle' style='font-size:1.2rem;'></i> Mobile Number is Correct";

        accnumflag = 1;
        }
    }
}
}

var pincodestore ;
function pincodecheck(elem6){
    let pincode = elem6.value.trim();
    pincodestore = pincode;
    if(isNaN(pincode)){
        document.getElementById("pincode").style="color:red";
        document.getElementById('pincode').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Please Enter valid Pin Code";
        pincodeflag = 0;
    }else{
    if(pincode.length == 0){
        document.getElementById("pincode").style="color:red";
        document.getElementById('pincode').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Pin Code is Empty";

        pincodeflag = 0;
    }
    else{  
        if(pincode.length < 4){
            document.getElementById("pincode").style="color:red";
            document.getElementById('pincode').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Pin Code must be 4 Digits";
    
            pincodeflag = 0;
        }else if(pincode.length > 4){
            document.getElementById("pincode").style="color:red";
            document.getElementById('pincode').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Pin Code  is Not Greater then 4 Digits";
    
            pincodeflag = 0;
        }
        else{
        document.getElementById("pincode").style="color:green";
        document.getElementById('pincode').innerHTML="<i class='far fa-check-circle' style='font-size:1.2rem;'></i> Pin Code is Correct";

        pincodeflag = 1;
        }
    }
}
}

function repincodecheck(elem7){
    let repincode = elem7.value.trim();
    if(repincode.match(pincode)){
        document.getElementById("repincode").style="color:red";
        document.getElementById('repincode').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Pin Code Is Not Match";
        repincodeflag = 0;
    }else{
    if(repincode.length == 0){
        document.getElementById("repincode").style="color:red";
        document.getElementById('repincode').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Re-Pin Code Field is Empty";

        repincodeflag = 0;
    }
    else{  
      
       if(repincode.length > 4){
            document.getElementById("repincode").style="color:red";
            document.getElementById('repincode').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Pin Code must be same and >= 4 Digits";
    
            repincodeflag = 0;
        }
        else if(pincodestore != repincode){
            document.getElementById("repincode").style="color:red";
            document.getElementById('repincode').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Pin Code is Not Match";
    
            repincodeflag = 0;
            
        }else{
            document.getElementById("repincode").style="color:green";
            document.getElementById('repincode').innerHTML="<i class='far fa-check-circle' style='font-size:1.2rem;'></i> Pin Code is Match";
    
            repincodeflag = 1;
        }
    }
 }
}

function gendercheck(gen){
    let gender = gen.value;
   
    if(gender == "Male" || gender == "FeMale" || gender == "Other"){
        document.getElementById("gen").style="color:green";
        document.getElementById('gen').innerHTML="<i class='far fa-check-circle' style='font-size:1.2rem;'></i> Gender is Selected";
        genderflag = 1;
    }else{
        document.getElementById("gen").style="color:red";
        document.getElementById('gen').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Please Select the Gender";

        genderflag = 0;
    }
}

function accbalcheck(elem8){
    let accbal = elem8.value.trim();
    if(isNaN(accbal)){
        document.getElementById("accbal").style="color:red";
        document.getElementById('accbal').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Please Enter valid Amount";
        accbalflag = 0;
    }else{
    if(accbal.length == 0){
        document.getElementById("accbal").style="color:red";
        document.getElementById('accbal').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Account will be Open Rs. 1000 Or More";

        accnumflag = 0;
    }else if(accbal < 1000){
        document.getElementById("accbal").style="color:red";
        document.getElementById('accbal').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Account will be Open Rs. 1000 Or More";

        accnumflag = 0;
    }
    else{  
    
        document.getElementById("accbal").style="color:green";
        document.getElementById('accbal').innerHTML="<i class='far fa-check-circle' style='font-size:1.2rem;'></i> You want to Open the Account with Rs. " + accbal;

        accnumflag = 1;
        
    }
 }
}

function capchacheck(elem9){
    let capcha = elem9.value.trim();
    if(capcha.match(fathercorrectName)){
        document.getElementById("capcha").style="color:red";
        document.getElementById('capcha').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Capcha Is Not Match";
        capchaflag = 0;
    }else{
    if(capcha.length == 0){
        document.getElementById("capcha").style="color:red";
        document.getElementById('capcha').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i>  Capcha Field is Empty";

        capchaflag = 0;
    }
    else{  
      
       if(capcha.length > 4){
            document.getElementById("capcha").style="color:red";
            document.getElementById('capcha').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Capcha Is Not Match";
    
            capchaflag = 0;
        }
        else if(finalCap != capcha){
            document.getElementById("capcha").style="color:red";
            document.getElementById('capcha').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Capcha is Not Match";
    
            capchaflag = 0;
            
        }else{
            document.getElementById("capcha").style="color:green";
            document.getElementById('capcha').innerHTML="<i class='far fa-check-circle' style='font-size:1.2rem;'></i> Capcha is Match";
    
            capchaflag = 1;
        }
    }
 }
}



function validate(){
    if(firstflag == 1 && lastflag == 1 && fathersflag == 1 && mobilenumflag == 1 && mailflag == 1 && accnumflag == 1 && pincodeflag == 1 && repincodeflag == 1 && genderflag == 1 && accbal == 1){
        return true;
    }
    else{
        if(firstflag == 0){
          document.getElementById('finam').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> First Name is Empty";
        }else if(lastflag == 0){
            document.getElementById('linam').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Last Name is Empty";
        }else if(fathersflag == 0){
            document.getElementById('fainam').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Father's Name is Empty";
        }else if(mobilenumflag == 0){
            document.getElementById('mobnum').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Enter valid Mobile Number";
        }else if(mailflag == 0){
            document.getElementById('mail').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Enter valid Mail";
        }else if(accnumflag == 0){
            document.getElementById('accnum').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Enter valid Account Number";
        }else if(pincodeflag == 0){
            document.getElementById('pincode').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Enter valid Pin Code Number";
        }else if(repincodeflag == 0){
            document.getElementById('repincode').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Pin Code is Not Match";
        }else if(genderflag == 0){
            document.getElementById('gen').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Please Select the Gender";
        }else if(accbalflag == 0){
            document.getElementById('accbal').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Account will be Open Rs. 1000 Or More";
        }else if(capchaflag == 0){
            document.getElementById('capcha').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Capcha is Not Match";
        }
        return false;
    }
    
}