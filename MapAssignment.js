const MapAssignement =(data)=> data.map(
    (item)=>
     `I am planing to do ${item.course} 
     from ${item.institute} 
     situted at ${item.city} 
     having contact as ${item.MobileNo}`
)

console.log(MapAssignement([
    {
        course: "PDAC",
        institute : "Pickupbiz",
        city:"Nanded",
        MobileNo: 9874561230
        
    }
]))