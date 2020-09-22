var string = "Hello World, this is my first js program";

function countVowel(str)
{
    var count = 0;
    for (const i of str)
    {
        if(i!=null)
        {
            count++;
        }
    }
    return count;
}

console.log(countVowel(string));
console.log(countVowel("Hello"));