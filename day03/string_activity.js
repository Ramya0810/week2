function stringrev(){
    let String="Ramya";
    let reverse="";
    for(let i=String.length-1;i>=0;i--)
    {
reverse=reverse+String[i];
    }
    console.log(reverse);
    if(String===reverse)
    {
        console.log("palidrome");
    }
        else
        {
            console.log("not a palidrome");
    }
}
stringrev();
