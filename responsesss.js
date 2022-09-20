function getBotResponse(input) {
    if (input == "Cold") {
        return " Contact General Physician Doctor  ";
    } else if (input == "Fever ") {
        return " Contact General Physician doctor";
    } else if (input == "Heart Problem") {
        return "Contact  Cardiologist";                                                   
    } else if(input == "headache"){
        return "please take  Saridon and take rest and if problem persist contact opthalomologist"; 
    }  else if(input == "Kidney Problem"){
        return "Contact Nephrlologist";
    } else if (input == "PAIN"){
        return "Please take rest and contact your doctor";
    }else if(input=="i love you sonia"){
        return "i love you too ashutosh"
    }else if(input=="i love you Aman"){
        return "i love you too Shrishi"
    }

    if (input == "hello") {
        return "how are you sir! What's yours problem Kindly Mention Your problem";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}