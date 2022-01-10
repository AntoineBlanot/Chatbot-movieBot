'use strict'

class FBeamer{
    constructor({pageAccessToken, VerifyToken}) {
        if (pageAccessToken != null && VerifyToken != null)
        {
            this.pageAccessToken=pageAccessToken;
            this.VerifyToken=VerifyToken;
            console.log('It works perfectly <3');
        }
        else
            console.log(`Error: one token is missing ${pageAccessToken} and ${VerifyToken}`);
    }
    
    registerHook(req, res)
    {
        const params = req.query;
        const mode = params['hub.mode'],
        token = params['hub.verify_token'],
        challenge = params['hub.challenge'];
        
        try {
            
            if (mode == 'subscribe' && token === VerifyToken) {
                console.log("Webhook is registered")
                return res.send(challenge);
            } 
            else {
                console.log("Could not register webhook");
                return res.sendStatus(200);
            }
            
        } catch(e) {
            console.log(e);
        }
    }   
}

module.exports= FBeamer;
