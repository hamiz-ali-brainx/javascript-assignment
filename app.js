(function(window, document, undefined){

    
    window.onload = init;
    
      function init(){
        
        const hourHand = document.getElementById('hour');
        const secondHand = document.getElementById('second');
        const minuteHand = document.getElementById('minute');
        function setTime(){
            const time_now = new Date();
            
            const seconds = time_now.getSeconds();
        
            // converting seconds to degrees
            const secondRotation =(seconds * 6);

            
            secondHand.style.transform=`rotate(${secondRotation}deg)`;
            
            //converting minute to degrees
            const minutes = time_now.getMinutes();
            const minutesRotation =(seconds * 0.1) +( minutes * 6);
            minuteHand.style.transform=`rotate(${minutesRotation}deg)`;

            //converting hour to degrees
            const hour = time_now.getHours();
            const hoursRotation =(minutes*30/60) + (hour * 360/12);
            hourHand.style.transform=`rotate(${hoursRotation}deg)`;
          }
        //setInterval 1000
        setInterval(setTime, 1000); 
        setTime();
      }

      
    
    })(window, document, undefined);
    


