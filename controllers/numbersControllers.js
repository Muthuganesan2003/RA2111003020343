import axios from "axios";
export const getNumbers = async (req,res)=>{
    try{
        const token = {
            token_type: "Bearer",
            access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTQ4NTkwLCJpYXQiOjE3MTIxNDgyOTAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImI1NDVkNTliLTA0OWMtNDk1MS1hNTQ3LTUyOTRiZTc0NWQyMSIsInN1YiI6Im1uMzI1OEBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiU1JNIEluc3RpdHV0ZSBvZiBTY2llbmNlIEFuZCBUZWNobm9sb2d5LFJhbWFwdXJhbSIsImNsaWVudElEIjoiYjU0NWQ1OWItMDQ5Yy00OTUxLWE1NDctNTI5NGJlNzQ1ZDIxIiwiY2xpZW50U2VjcmV0IjoiU0tRS3lEcHhUaWZCQ1lZcCIsIm93bmVyTmFtZSI6Ik1VVEhVR0FORVNBTiBOIEciLCJvd25lckVtYWlsIjoibW4zMjU4QHNybWlzdC5lZHUuaW4iLCJyb2xsTm8iOiJSQTIxMTEwMDMwMjAzNDMifQ.2jydBLI6ddVOuYndDY6hcBy7KtE7E0QgGd_2UzGJfwk",
            expires_in: 1712148590,
        };
        const{numID} = req.params;
        const response =await axios.get("http://20.244.56.144/test/primes/${numID}",{
            headers:{
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTQ4NTkwLCJpYXQiOjE3MTIxNDgyOTAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImI1NDVkNTliLTA0OWMtNDk1MS1hNTQ3LTUyOTRiZTc0NWQyMSIsInN1YiI6Im1uMzI1OEBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiU1JNIEluc3RpdHV0ZSBvZiBTY2llbmNlIEFuZCBUZWNobm9sb2d5LFJhbWFwdXJhbSIsImNsaWVudElEIjoiYjU0NWQ1OWItMDQ5Yy00OTUxLWE1NDctNTI5NGJlNzQ1ZDIxIiwiY2xpZW50U2VjcmV0IjoiU0tRS3lEcHhUaWZCQ1lZcCIsIm93bmVyTmFtZSI6Ik1VVEhVR0FORVNBTiBOIEciLCJvd25lckVtYWlsIjoibW4zMjU4QHNybWlzdC5lZHUuaW4iLCJyb2xsTm8iOiJSQTIxMTEwMDMwMjAzNDMifQ.2jydBLI6ddVOuYndDY6hcBy7KtE7E0QgGd_2UzGJfwk",
            }
        })
        res.json(response.data);
    }
    catch(error){
        console.log(error);
        res.status(500).json({"error":error.message});
    }
}