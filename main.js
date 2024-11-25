var Name = document.getElementById("ProductName");
var category = document.getElementById("ProductCategory");
var price = document.getElementById("Productprice");
var des = document.getElementById("Productdescription");
var inputs;

if (localStorage.getItem("items")) {
  inputs = JSON.parse(localStorage.getItem("items"));
  display();
} else {
  inputs = [];
}
console.log(inputs.length)
function addProduct() {
  if(Name.value==""&& category.value==""&&price.value==""&&des.value=="")
    alert("Please Enter Data")
  else{
  var product = {
    name: Name.value,
    category: category.value,
    price: price.value,
    description: des.value
  };

  inputs.push(product);
  localStorage.setItem('items', JSON.stringify(inputs));
  display();}
 Name.value="";
category.value="";
price.value="";
des.value="";
}
function update(index){
  alert(index)
 
  Name.value=inputs[index].name;
  category.value=inputs[index].category;
  price.value=inputs[index].price;
  des.value=inputs[index].description;
   inputs.splice(index ,1);
  localStorage.setItem('items' , JSON.stringify(inputs));
  display();
}

function display() {
  var cartona = '';

  for (var i = 0; i < inputs.length; i++) {
    cartona += `<tr>
      <th scope="row">${inputs[i].name}</th>
      <td>${inputs[i].category}</td>
      <td>${inputs[i].price}</td>
      <td>
        <a href="#" class="btn btn-outline-primary p-2 mx-3" onclick='update(${i})'>Update</a>
        <a href="#" class="btn btn-outline-danger p-2"  onclick='deleteItem(${i})'>Delete</a>
      </td>
    </tr>`;
  }

  document.getElementById("item").innerHTML = cartona;
}

function deleteItem(index){
    inputs.splice(index ,1);
    localStorage.setItem('items' , JSON.stringify(inputs));
    display();
};
function searchToggle(obj, evt){
  var container = $(obj).closest('.search-wrapper');
      if(!container.hasClass('active')){
          container.addClass('active');
          evt.preventDefault();
      }
      else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
          container.removeClass('active');
          // clear input
          container.find('.search-input').val('');
      }
}
$("#searchName").keyup(function () {
  var searchval = document.getElementById("searchName").value
  box='';
  console.log(box)
  for (let i = 0; i < inputs.length; i++) {
    if(inputs[i].name.toLowerCase().includes(searchval.toLowerCase()))
    {

      box += `<tr>
      <th scope="row">${inputs[i].name}</th>
      <td>${inputs[i].category}</td>
      <td>${inputs[i].price}</td>
      <td>
        <a href="#" class="btn btn-outline-primary p-2 mx-3" onclick='update(${i})'>Update</a>
        <a href="#" class="btn btn-outline-danger p-2"  onclick='deleteItem(${i})'>Delete</a>
      </td>
    </tr>`;
    }
    document.getElementById("item").innerHTML = box;
    
    
  }

})

