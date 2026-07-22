function objectMethods(obj){
    console. log ("Ortgtnal 0b1%gt:*, obj");

    let keys = Object.keys(obj);
    console. log("After Object. keys():*, keys");

    let values = Object. values(obj); 
    console. log("After Object. values():*, values");
    
    let entries = Object.entries(obj);
    console. log("After Object.entrtes():*, entrtes");
    
    let hasProp =
obj.has0wnProperty("property");
    console. log("After has0unProperty():",
hasProp);
}