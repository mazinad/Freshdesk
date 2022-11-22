var client;

init();

async function init() {
  client = await app.initialized();
  client.events.on('app.activated',getMapping);
  client.iparams.get().then(async function(data) {
   console.log(data);
  });

}

async function getMapping(){
  let email="syedm@techaffinity.com"

  try{
    const response=await client.request.get('https://techaffinityinc.freshdesk.com/api/v2/groups', {
      headers: {
        'Authorization': 'Basic ' + btoa('VYUDaISDETObHFtX84SE'),
        'Content-Type': 'application/json'
  },
});
  const data =await JSON.parse(response.response);
  console.log(data);
  await data.filter((item)=>{
    if(item.name=="Product Management"){
      console.log(item);
    }
  })
}
catch(e){
  console.log(e);
}
}

async function changeGroup(id,group_id){
  try{
    const response=await client.request.put('https://techaffinityinc.freshdesk.com/api/v2/tickets/'+id, {
      headers: {
        'Authorization': 'Basic ' +btoa('VYUDaISDETObHFtX84SE'),
        'Content-Type': 'application/json'
  },
  body:JSON.stringify({
    "group_id":group_id
  })
});
  const data =await JSON.parse(response.response);
  console.log(data);
}
catch(e){
  console.log(e);
}
}


