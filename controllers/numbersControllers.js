import axios from "axios";
export const getNumbers = async (req,res)=>{
    try{
        const tokenResponse = await axios.post("http://20.244.56.144/test/auth", {
            companyName: "SRM Institute of Science And Technology,Ramapuram",
            clientID: "0cfebb1e-2064-4950-aabb-ec1c3bfb43c2",
            clientSecret: "tdFhMTIGmlmNvrRI",
            ownerName: "MUTHUGANESAN N G",
            ownerEmail: "mn3258@srmist.edu.in",
            rollNo: "RA2111003020343"
        });
        if(!tokenResponse){
            throw new Error("Auth failed");
        }
        const accessToken = tokenResponse.data.access_token;
        const {numId} = req.params;
        console.log(numId);
        const response =await axios.get(`http://20.244.56.144/test/primes/${numId}`,{
            headers:{
                "Authorization":`Bearer ${accessToken}`
            }
        })
        res.json(response.data);
    }
    catch(error){
        console.log(error);
        res.status(500).json({"error":error.message});
    }
}