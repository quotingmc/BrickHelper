console.log("api called");

// const consumerKey = "B59EC431086348A595D48A3659FCB0B1";
// const consumerSecret = "3CC035C6D67D4C3CBFD47CFB34234CAE";
// const tokenValue = "978A779A01E7498787E38DC3CC2C7D55";
// const tokenSecret = "838FFF989D9B428DA361D7934CFDE49B";

const queryParameters = {
    direction:"in",
    status:"",
    filed:"false"
}   
const oauth_timestamp = Math.floor(Date.now() / 1000);


const parameters = {
    oauth_version:"1.0",
    oauth_consumer_key:"B59EC431086348A595D48A3659FCB0B1",
    oauth_token:"978A779A01E7498787E38DC3CC2C7D55",
    oauth_timestamp: oauth_timestamp,
    oauth_nonce: "oauth45once",
    oauth_signature_method:"HMAC-SHA1",
    ...queryParameters
    
}

let ordered = {};
Object.keys(parameters).sort().forEach(function(key) {
    ordered[key] = parameters[key];
});

let encodedParameters = '';for (k in ordered) 
{
    const encodedValue = escape(ordered[k]);
    const encodedKey = encodeURIComponent(k);  if(encodedParameters === '')
    {
        encodedParameters += encodeURIComponent(`${encodedKey}=${encodedValue}`)
    } else {
        encodedParameters += encodeURIComponent(`&${encodedKey}=${encodedValue}`);
  }
}

const method = 'GET';
const base_url = 'https://api.bricklink.com/api/store/v1/';
const encodedUrl = encodeURIComponent(base_url);

encodedParameters = encodeURIComponent(encodedParameters); // encodedParameters which we generated in last step.

const signature_base_string = `${method}&${encodedUrl}&${encodedParameters}`

console.log(signature_base_string)






console.log(encodedParameters);