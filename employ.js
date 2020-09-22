var employee =
{
    name:'CVP',
    age:24,
    hobbies:['Drawing','Music','Travel'],
    greet:  function()
            {
                console.log('Good day ')
            },
    address:{
                city:'Mysore',
                state:'KA'
            }
}

for (const attr in employee)
{
    var emp = employee[attr];
    if(emp instanceof Array)
    {
        for (const i in emp) 
            console.log('hobbies: '+emp[i]);
    }
    else if(typeof emp == 'object')
    {
        for (const key in emp)
            console.log(key+' : '+emp[key]);
    }
    else if(typeof emp == 'function')
    {
        emp();
    }
    else
        console.log(emp); 
}