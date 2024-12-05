const input = document.getElementById("enter");
const addit = document.getElementById("addit");
const datas = document.getElementById("datas");

function doit() {
    const data = input.value.trim();
    if (data) {
        // Create the list item
        const list = document.createElement("li");
        list.className = "listedit";


        // Create the span for task text
        const spans = document.createElement("span");
        spans.textContent = data;
        list.appendChild(spans);
        datas.appendChild(list);
        input.value = "";

        // Delete button
        const dlt = document.createElement("button");
        dlt.innerHTML = "<i class='bx bx-trash' style='color:#ffffff'></i>";
        dlt.style.float = "right";
        dlt.style.marginRight = "10px";
        dlt.style.background = "transparent";
        dlt.style.border = "none";

        dlt.addEventListener("click", function () {
            datas.removeChild(list);
        });
        list.appendChild(dlt);

        // Edit button
        const editbtn = document.createElement("button");
        editbtn.innerHTML = "<i class='bx bxs-edit-alt' style='color:#ffffff'></i>";
        editbtn.style.float = "right";
        editbtn.style.marginRight = "20px";
        editbtn.style.background = "transparent";
        editbtn.style.border = "none";
        list.appendChild(editbtn);

        editbtn.addEventListener("click", function () {
            // Create input field for editing
            const editthings = document.createElement("input");
            editthings.type = "text";
            editthings.value = spans.textContent;

            // Replace span with input field
            list.replaceChild(editthings, spans);

            // Save changes on Enter key
            editthings.addEventListener("keydown", function (svs) {
                if (svs.key === "Enter") {
                    spans.textContent = editthings.value.trim();
                    list.replaceChild(spans, editthings);
                }
               
            });

            // Optional: Save changes on blur (when input loses focus)
            editthings.addEventListener("blur", function () {
                spans.textContent = editthings.value.trim();
                list.replaceChild(spans, editthings);
            });

            // Focus on the input field for user convenience
            editthings.focus();
        });


    } else {
        alert("Enter the task!");
    }
}

addit.addEventListener("click", doit);
input.addEventListener("keydown",function(a){
    if(a.key==="Enter"){
        doit()
    }
})

