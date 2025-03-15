 
class APIManager {
    static GetAPICall = (url) => {
        const token = localStorage.getItem("jwtToken");
    console.log("Token being sent:", token);
        return fetch(url, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwtToken"),
                
            },
        }).then((response) => response.json());
        
    };

    static PutApiCall = (url, body) => {
        return fetch(url, {
            method: 'PUT',
            headers: {
                 'Content-Type': 'application/json',

                'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            },
            body: JSON.stringify(body)
        });
    }
    static DeleteApiCall = (url) => {
        return fetch(url, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer '+ localStorage.getItem("jwtToken")
            }
        });
    }
    static PostApicall=(url,data)=>{
        return fetch(url,{
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json',
                
                'Authorization': 'Bearer '+ localStorage.getItem("jwtToken"),
                
            },
            body: JSON.stringify(data)
        })
    }
}

export default APIManager;
