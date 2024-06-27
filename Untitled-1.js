/* window.addEventListener("message", function(event) {
    // Check message type
    if (event.data.type === "SendMessageToUnity") {
        // Call the SendMessageToUnity function
        SendMessageToUnity();
    }
});*/
// Add an event listener to handle messages from the parent window

   /* window.addEventListener('message', function(event) {
        // Check if the message is coming from the expected origin
        if (event.origin === 'https://3d51a3-39.myshopify.com') {
            // Handle the message from Shopify
            console.log('Message from Shopify:', event.data);
            
            // Call Unity function with the message data, if needed
            SendMessageToUnity(event.data);
        }
    }),*/ /* }).then((unityInstance) => {
 window.unityInstance = unityInstance});*/
 /*window.addEventListener("message", function(event) {
    // Check message type
    if (event.data.type === "SendMessageToUnity") {
        // Call Unity function with the message data
        window.unityInstance.SendMessageToUnity();
    }
});*/


}).then((unityInstance) => {
    window.unityInstance = unityInstance;
    console.log("Unity Instance", unityInstance);});
    window.addEventListener("message", function(event) {
       // Check message type
       if (event.data.type === "Map") {       
          window.unityInstance.SendMessage('stops', 'MapFromJs');
       }
       if (event.data.type === "Screen") {
          window.unityInstance.SendMessage('stops', 'ScreenFromJs');
       }
       if (event.data.type === "Silluete") {
          window.unityInstance.SendMessage('stops', 'SillueteFromJs');
       }
   });