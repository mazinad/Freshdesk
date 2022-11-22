$(document).ready(function () {
  app.initialized()
    .then(function (_client) {
      window.client = _client;
      getGroup();
    }).catch(function (e) {
      console.error(e);
    });
});
async function getGroup(){
  console.log("getGroupppppppppppppppppppppppppssssssssssssssss");
  try{
    const response=await client.request.get('https://techaffinityinc.freshdesk.com/api/v2/groups', {
      headers: {
        'Authorization': 'Basic ' +btoa('VYUDaISDETObHFtX84SE'),
        'Content-Type': 'application/json'
  },
});
  const data =await JSON.parse(response.response);
  console.log(data);
  data.filter((item)=>{
     $("#group").append(`<option value="${item.id}">${item.name}</option>`)
    console.log(item.name);
  })
}
catch(e){
  console.log(e);
}
}