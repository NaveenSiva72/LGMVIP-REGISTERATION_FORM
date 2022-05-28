
      function productUpdate() {
        if (
          $("#name").val() != "" &&
          $("#email").val() != "" &&
          $("#website").val() != "" &&
          $("#imageLink").val() != ""
        ) {
          productAdd();
          formClear();
          $("#name").focus();
        } else {
          document.getElementById("errorMsg").innerHTML =
            "Please Fill all the fields of the form";
        }
      }
      let count = 0;
      function productAdd() {
        var genderOutput = genderChoice();
        var skillOutput = skillChoices();
        if ($("#productTable tbody").length == 0) {
          $("#productTable").append("<tbody></tbody>");
        }
        if (count % 2 == 0) {
          $("#productTable tbody").append(
            "<tr>" +
              "<td id='newData' class='animated fadeIn' style='height:100px'>" +
              "<b>" +
              $("#name").val() +
              "</b>" +
              "<br>" +
              genderOutput +
              "<br>" +
              $("#email").val() +
              "<br>" +
              '<u style="color:blue">' +
              $("#website").val() +
              "</u>" +
              "<br>" +
              skillOutput +
              "</td>" +
              "<td id='newData' class='animated fadeIn'>" +
              '<a href="' +
              $("#imageLink").val() +
              '" target="_blank">' +
              '<img src="' +
              $("#imageLink").val() +
              '" alt="Photo" title="Click to open in new tab" style="width:125px;height:100px"></a>' +
              "</td>" +
              "</tr>"
          );
        } else {
          $("#productTable tbody").append(
            "<tr>" +
              "<td id='newData' class='animated fadeIn' >" +
              "<b>" +
              $("#name").val() +
              "</b>" +
              "<br>" +
              genderOutput +
              "<br>" +
              '<u style="color:blue">' +
              $("#website").val() +
              "</u>" +
              "<br>" +
              $("#email").val() +
              "<br>" +
              skillOutput +
              "</td>" +
              "<td id='newData' class='animated fadeIn'>" +
              '<a href="' +
              $("#imageLink").val() +
              '" target="_blank">' +
              '<img src="' +
              $("#imageLink").val() +
              '" alt="Photo" title="Click to open in new tab" style="width:125px;height:100px"></a>' +
              "</td>" +
              "</tr>"
          );
        }
        count += 1;
      }
      function genderChoice() {
        const choices = document.querySelectorAll('input[name="genderchoice"]');
        let selectedValue;
        for (const choice of choices) {
          if (choice.checked) {
            selectedValue = choice.value;
            break;
          }
        }
        return selectedValue;
      }

      function skillChoices() {
        const choices = document.querySelectorAll('input[name="skillchoice"]');
        let selectedValue = [];
        for (const choice of choices) {
          if (choice.checked) {
            selectedValue.push(choice.value);
          }
        }
        return selectedValue.toString();
      }

      function formClear() {
        $("#name").val("");
        $("#email").val("");
        $("#website").val("");
        $("#imageLink").val("");
        document.getElementById("male").checked = true;
        document.getElementById("java").checked = true;
        document.getElementById("html").checked = false;
        document.getElementById("css").checked = false;
        document.getElementById("errorMsg").innerHTML = "<br>";
      }
  