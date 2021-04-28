disableButtons = () =>{
    document.getElementById('lighthouse').disabled = true;
    document.getElementById('lighthouse').style.opacity = 0.8;
    document.getElementById('paymentpage').disabled = true;
    document.getElementById('paymentpage').style.cursor = 0.8;
}
enableButtons = () =>{
    document.getElementById('lighthouse').disabled = false;
    document.getElementById('lighthouse').style.cursor = 1;
    document.getElementById('paymentpage').disabled = false;
    document.getElementById('paymentpage').style.cursor = 1;
}
let username = "merchant.test222201363002";
let userID = "test222201363002";
let password = "5881eea53e5d11596e74b0c0a32efe7f";
let uniqueOrderID = "";
fetch('newOrder.php', {
    method: 'POST',
    body: {},
}).then(response => response.json() ).then(result=>{
    uniqueOrderID = result;
    let url = `https://epayment.areeba.com/api/rest/version/55/merchant/${userID}/session`;

    fetch(url,{
        method:'POST',
        headers : {
            'Authorization': 'Basic ' + btoa(`${username}:${password}`),
            'Access-Control-Allow-Origin':'*',
            'Allow-Control-Allow-Origin':'*',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "apiOperation": "CREATE_CHECKOUT_SESSION", 
            "interaction" : {
                "operation" : "PURCHASE"
            },
            "order": {
                "currency": "USD",
                    "id": uniqueOrderID,
                    "amount": 10
            }
        })
    }).then((resp) =>{
        return resp.json()
    }).then((data) =>{
        Checkout.configure({
            merchant:userID,
            order: {
                amount: 10,
                currency: 'USD',
                description: 'Donation for the puppies',
                id: uniqueOrderID
            },
            session: {
                id: data.session.id
            },
            interaction: {
              operation: 'PURCHASE',
                merchant: {
                    name: 'DogeLife',
                    address: {
                        line1: '200 Sample St',
                        line2: '1234 Example Town'     
                    }    
                }
            }
        });
    }).catch(err => console.log(err));


});;
