      //event listener do Enter
      document.querySelector("#inputTxt").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            adicionar();
        }
    });

    function adicionar() {
      let taskInput = document.querySelector("#inputTxt");
      let taskText = taskInput.value;

      if (taskText !== "") {
        let taskList = document.getElementById("tarefas");
        let taskExists = Array.from(taskList.getElementsByTagName("li")).some(
          (li) => li.innerText.trim() === taskText.trim()
        );

        if (!taskExists) {
          //criar tarefa
          let li = document.createElement("li");
          li.innerText = taskText.trim();
          taskList.appendChild(li);
          taskInput.value = "";

          //evento de completar tarefa
          li.addEventListener("click", function () {
            this.classList.toggle("task-complete");
          });

          //botão de Ok
          let completeBtn = document.createElement("button");
          completeBtn.id = "completeBtn";
          taskList.appendChild(completeBtn);
          let iconOk = document.createElement('i');
          iconOk.classList.add('fa-solid', 'fa-check')
          completeBtn.appendChild(iconOk);
          completeBtn.onclick = function(){
            li.classList.toggle("task-complete");
          }

          //botão de remover
          let removeBtn = document.createElement("button");
          removeBtn.id = "removeBtn";
          taskList.appendChild(removeBtn);
          let iconTrash = document.createElement("i");
          iconTrash.classList.add("fa-solid", "fa-trash");
          removeBtn.appendChild(iconTrash);
          removeBtn.onclick = function () {
            li.remove();
            completeBtn.remove();
            this.remove();
          };
        } else {
          alert("Tarefa já existente");
          taskInput.value = "";
        }
      } else {
        alert("Adicione tarefa válida");
      }
    }