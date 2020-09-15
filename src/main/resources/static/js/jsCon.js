let parameters = {};
let dataBooks;

let myTableDiv;
let table;
let tableBody;

function load(){
    console.log("Start");
    init();
}

function init(){
    getBooksForLibrary(parameters, function(error, listBooks){
       console.log(JSON.parse(listBooks));
        dataBooks = JSON.parse(listBooks);
       generateBooksTable();
    });
}

function generateBooksTable(){

    myTableDiv = document.getElementById("divTable");
    table = document.createElement("TABLE");
    table.border = 0;
    table.id = "tableItems";

    tableBody = document.createElement("TBODY");
    table.appendChild(tableBody);

    let tableThead = document.createElement("THEAD");
    table.appendChild(tableThead);

    let trHead = document.createElement("TR");
    tableThead.appendChild(trHead);

    let tdHead1 = document.createElement("TH");
    tdHead1.appendChild(document.createTextNode("ID"));
    trHead.appendChild(tdHead1);

    let tdHead2 = document.createElement("TH");
    tdHead2.appendChild(document.createTextNode("BookName"));
    trHead.appendChild(tdHead2);

    let tdHead3 = document.createElement("TH");
    tdHead3.appendChild(document.createTextNode("ProductionDate"));
    trHead.appendChild(tdHead3);

    let tdHead4 = document.createElement("TH");
    tdHead4.appendChild(document.createTextNode("Delete"));
    trHead.appendChild(tdHead4);

    for (i = 0; i < dataBooks.length; i++ ){
        addItemToTableBooks(dataBooks[i]);
    }

    myTableDiv.appendChild(table);
}

function addItemToTableBooks(book){
    let tr = document.createElement('TR');
    let td1 = document.createElement('TD');
    td1.appendChild(document.createTextNode(book.id))
    tr.appendChild(td1);

    let td2 = document.createElement('TD');
    td2.appendChild(document.createTextNode(book.title))
    tr.appendChild(td2);

    let td3 = document.createElement('TD');
    td3.appendChild(document.createTextNode(book.productionYear))
    tr.appendChild(td3);

    let td4 = document.createElement('TD');
    let buttonDel = document.createElement('BUTTON');
    buttonDel.innerHTML = "Del";
    buttonDel.setAttribute("onclick","onClickDeleteBookFromLibrary(this)");
    buttonDel.id = book.id;
    td4.appendChild(buttonDel);
    tr.appendChild(td4);

    tableBody.appendChild(tr);
}

function onClickAddBookToLibrary(){
    console.log("addBookToLibrary");
    let param = {};
    //param.id = document.getElementById("inputId").value;
    param.title = document.getElementById("inputTitle").value;
    param.productionYear = document.getElementById("inputProductionDate").value;
    console.log(param);
    addBooksToLibrary(param, function(error, newBook){
        addItemToTableBooks(JSON.parse(newBook));
    });
}

function onClickDeleteBookFromLibrary(btnDel){
    console.log("deleteBookFromLibrary");
    let param = {};
    param.id = btnDel.id;
    console.log(param);
    addBooksToLibrary(param, function(error, newBook){
        deleteBookFromLibrary(JSON.parse(newBook));
        let row = btnDel.parentNode.parentNode;
        row.parentNode.removeChild(row);
    });
}