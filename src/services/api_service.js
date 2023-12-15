
const requestHttp = async () =>{
    const requestInfos = new Request("http://localhost:3001/data",{
        method:"get",
    });

    const request = await fetch(requestInfos);
    const response = await request.json();
    return response;
};
    //export{datas};


export default requestHttp;
// console.log(requestHttp());
