/*
const country = "Portugal";
const language = "Portuguese";
const population = 11;
const isIsland = false;

if(language === "English" && population < 50 && !isIsland){
    console.log(`You should live in ${country} :)`);
}else{
    console.log(`${country} does not meet your criteria`);
}
*/

const day = 'oi';

// switch(day){ 
//     case 'monday': // day === 'monday'
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case 'tuesday':
//         console.log('Prepare threory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break
//     case 'friday':
//         console.log('Record video');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
        
// }


if(day === "monday"){
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if (day === 'tuesday') {
    console.log('Prepare threory videos');
} else if (day === "wednesday" || day === "thursday"){
    console.log('Write code examples');
} else if (day === 'friday'){
        console.log('Record video');
} else if (day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend :D');
} else {
        console.log('Not a valid day!');
}
