function intersection(){
    let arr1=[10,12,14,16,18];
    let arr2=[5,16,20,14,2,10,11];

    for(let i=0;i<arr1.length;i++)
    {
        for(let j=0;j<arr2.length;j++)
        {
            if(arr1[i]==arr2[j])
    
                console.log(arr1[i]);
        }
    }
    
}
intersection();