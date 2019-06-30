let text ; 
let counts= {} ; 
var keys = [] ; 
const fs  = require('fs') ; 
fs.readFile(__dirname + '/sample.txt' , function(err, data)
{
    if(err) throw err ; 
    var allwords = data.toString() ;  // Conversion to string
    var temp = allwords.split(" ") ; // Conversion to array
    var tokens = temp.join("\n") ;
    var tokens1 =  tokens.split(/\W+/) ;  // split about anything that does not lie between a-z and 0-9
    for(let i =0 ; i<tokens1.length ; i++)
    {
        let word = tokens1[i] ; 
        if(counts[word] === undefined)
        {
            counts[word] = 1 ;
            keys.push(word) ; 
        }
        else
        {
            counts[word] = counts[word] + 1 ;
        }
    }
    keys.sort() ;
    for(let i = 0 ; i<keys.length ; i++)
    {
        console.log(keys[i] + " " + counts[keys[i]]) ;         
    }
})