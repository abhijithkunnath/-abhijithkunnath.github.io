function items() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText)

            var items = response.items;

            document.getElementById("view").style.display = "none";

            document.getElementById("items").innerHTML = `<thead>
        <tr>
          <th scope="col">Sl-No</th>
          <th scope="col">Items</th>
          <th scope="col">Quantity</th>
          <th scope="col">Unit</th>
          <th scope="col">Department</th>
          <th scope="col">Notes</th>
          <th scope="col">Status ?</th>
        </tr>
      </thead>
      <tbody id="tableBody">
      <tr id="my_span0" >
      <td>${items[0].serialNumber}</td>
      <td>${items[0].name}</td>
      <td>${items[0].quantity}</td>
      <td>${items[0].unit}</td>
      <td>${items[0].Department}</td>
      <td>${items[0].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(0)" id="ckb0"></td>
      </tr>

      <tr id="my_span1" >
      <td>${items[1].serialNumber}</td>
      <td>${items[1].name}</td>
      <td>${items[1].quantity}</td>
      <td>${items[1].unit}</td>
      <td>${items[1].Department}</td>
      <td>${items[1].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(1)" id="ckb1"></td>
      </tr>

      <tr id="my_span2" >
      <td>${items[2].serialNumber}</td>
      <td>${items[2].name}</td>
      <td>${items[2].quantity}</td>
      <td>${items[2].unit}</td>
      <td>${items[2].Department}</td>
      <td>${items[2].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(2)" id="ckb2"></td>
      </tr>

      <tr id="my_span3" >
      <td>${items[3].serialNumber}</td>
      <td>${items[3].name}</td>
      <td>${items[3].quantity}</td>
      <td>${items[3].unit}</td>
      <td>${items[3].Department}</td>
      <td>${items[3].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(3)" id="ckb3"></td>
      </tr>

      <tr id="my_span4" >
      <td>${items[4].serialNumber}</td>
      <td>${items[4].name}</td>
      <td>${items[4].quantity}</td>
      <td>${items[4].unit}</td>
      <td>${items[4].Department}</td>
      <td>${items[4].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(4)" id="ckb4"></td>
      </tr>
      
      <tr id="my_span5" >
      <td>${items[5].serialNumber}</td>
      <td>${items[5].name}</td>
      <td>${items[5].quantity}</td>
      <td>${items[5].unit}</td>
      <td>${items[5].Department}</td>
      <td>${items[5].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(5)" id="ckb5"></td>
      </tr>

      <tr id="my_span6" >
      <td>${items[6].serialNumber}</td>
      <td>${items[6].name}</td>
      <td>${items[6].quantity}</td>
      <td>${items[6].unit}</td>
      <td>${items[6].Department}</td>
      <td>${items[6].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(6)" id="ckb6"></td>
      </tr>

      <tr id="my_span7" >
      <td>${items[7].serialNumber}</td>
      <td>${items[7].name}</td>
      <td>${items[7].quantity}</td>
      <td>${items[7].unit}</td>
      <td>${items[7].Department}</td>
      <td>${items[7].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(7)" id="ckb7"></td>
      </tr>
      
      <tr id="my_span8" >
      <td>${items[8].serialNumber}</td>
      <td>${items[8].name}</td>
      <td>${items[8].quantity}</td>
      <td>${items[8].unit}</td>
      <td>${items[8].Department}</td>
      <td>${items[8].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(8)" id="ckb8"></td>
      </tr>

      <tr id="my_span9" >
      <td>${items[9].serialNumber}</td>
      <td>${items[9].name}</td>
      <td>${items[9].quantity}</td>
      <td>${items[9].unit}</td>
      <td>${items[9].Department}</td>
      <td>${items[9].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(9)" id="ckb9"></td>
      </tr>

      
      </tbody>`;


          

    

    


        }
    }
    xhttp.open("GET", "list.json", true)
    xhttp.send();
}



