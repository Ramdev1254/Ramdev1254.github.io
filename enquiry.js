function submitInquiry() {
    let name = document.getElementById("name").value;
    let question = document.getElementById("question").value;

    if (name === "" || question === "") {
        document.getElementById("response").innerText = "Please fill all fields!";
        return;
    }

    document.getElementById("response").innerText =
        "Thank you " + name + "! Your question has been received. We will guide you soon.";
}
