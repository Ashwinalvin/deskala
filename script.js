fetch("http:localhost:9000/human").then((data)=>{
    return data.json();
}).then((objectData)=>{
    let tableData ="";
    objectData.map((values)=>{
        tableData+=<tr> <td>${values.id}</td> <td>${values.Name}</td>   <td>${values.DOB}</td> <td>${values.Address}</td><td ><i class="bi bi-pencil"></i></td><td><i class="bi bi-archive"></i></td> </tr>
    })
    document.getElementById("table_body").
    innerHTML=tableData
})