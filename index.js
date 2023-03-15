function distanceFromHqInBlocks(distance){
    if (distance<42){
    return 42 - distance
}
else 
return distance - 42;
}

function distanceFromHqInFeet(distance){
    if (distance>42){
        return (distance -42)* 264
    }
    else {
        return (42- distance)* 264
    }
}

function distanceTravelledInFeet (start, destination){
    if (destination > start){
        return (destination-start)*264;
    }
    else{
        return (start-destination)*264;
    }
    }     

    function calculatesFarePrice(start,destination){
        if (start === destination){
        return 'gives customers a free sample';
    }
    else{
        return 0;}}

         
        function calculatesFarePrice(start, destination) {
            const distanceInFeet = distanceTravelledInFeet(start, destination);
          
            if (distance <= 400) {
              return 0;
            } else if (distance <= 2000) {
              return (distanceInFeet - 400) * 0.02;
            } else if (distanceInFeet <= 2500) {
              return 25;
            } else {
              return 'cannot travel that far';
            }
          }
          
    

