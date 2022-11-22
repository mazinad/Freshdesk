const btoa=require('btoa');
exports = {
  onConversationCreateCallback: async function (data) {
    let cc_email = data.data.conversation.cc_emails;
    let email=data.iparams.email;
    let ticketId=data.data.conversation.ticket_id;
    let group_id=data.iparams.group;
    console.log(cc_email);
    console.log(email);
    console.log(ticketId);
    console.log(typeof group_id);
    try{
     if(cc_email.includes(email)){
       console.log("true");
       console.log(" This is the ticket id  ",ticketId, " This is the group id ",group_id);
        await changeGroup(ticketId,group_id,data);
     }else{
       console.log("false");
     }
    } catch(error){
      console.log("Error occured",error);
    }
  },
};
async function changeGroup(id,group_id,data){
  console.log("Change group function");
  let domainName=data.iparams.iparamsDomain;
  console.log(domainName);
  let apiKey=data.iparams.iparamsKey;
  console.log(apiKey);
//   const response=await $request.get(`https://${datas.iparams.domainName}/api/v2/tickets/${id}`, {
//     headers: {
//       'Authorization': 'Basic ' +btoa(`${datas.iparams.apiKey}`),
//       'Content-Type': 'application/json'
// },
//   })
  // const output=await JSON.parse(response.response);
  // let type=output.type;
  // console.log(type);
   try{
    const response=await $request.put(`https://${domainName}/api/v2/tickets/${id}`, {
      headers: {
        'Authorization': 'Basic ' +btoa(`${apiKey}`),
        'Content-Type': 'application/json'
  },
  body:JSON.stringify({
    "group_id":parseInt(group_id)
  })
});
  const data =await JSON.parse(response.response);
  console.log("Response Outputed",data);
}
catch(e){
  console.log(e);
}
}



