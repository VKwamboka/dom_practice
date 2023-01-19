// const url = "https://jsonplaceholder.typicode.com/todos";
// let tableData = document.querySelector(".table");

// async function getData() {
//   try {
//     // We are using fetch to get the response
//     const response = await fetch(url);
//     const data = await response.json();

//     console.log(data);
//     // Trigger the listData function and pass the result
//     allData(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// const allData = (data) => {
//   data.forEach((element) => {
//     let row = document.createElement("tr");
//     let td1 = document.createElement("td");
//     let td2 = document.createElement("td");

//     td1.innerHTML = element.id;
//     td2.innerHTML = element.title;

//     row.appendChild(td1);
//     row.appendChild(td2);
//     tableData.appendChild(row);
//   });

//   // console.log(tableData)
// };

// getData();
// //   allData()




let button = document.querySelector(".sub")
button.addEventListener("click",()=>{
    button.style.backgroundColor = "blue"
})
