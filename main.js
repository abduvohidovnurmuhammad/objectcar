        
    // function faktaryal(a) {
    //     if (a===0) {
    //         return 1
    //     }
    //     else{
    //         return a*faktaryal(a-1)
    //     }
    // }
    // console.log(faktaryal(prompt("son kiriting faktaryal aniqlaymiz")));
    // ---------------object-------------------------------------------

        // let savol = prompt("moshina malumotini biuz bilan bolishasizmi ha ni kiriting ")
        // if( savol=="ha"){
        //   alert("boshladik")
        // } 

        // const obj ={
        //    nomi : prompt("yoqtirgan moshinangizni nomini kiriting"),
        //     rang : prompt("rangini kiriting"),
        //     yil : prompt("yilini kiriting"),
        //     davlat : prompt("qaysi davlatdan ishlab chiqariladi")

        // }

        //     console.log(obj);
            let arr = [ 1,2,3,4,5,6,5,6,3,2,4,3,1];
            function x (arr){
                let obj = {}
                for( let i = 0 ; i <arr.length; i++){
                    obj[arr[i]]=arr[i]
                }
                return Object.values(obj)
            }
            console.log(x(arr));



        

        


    