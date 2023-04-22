function display(id, name, role) {
    if (role === void 0) { role = "Guest User"; }
    console.log("ID", id);
    console.log("Name", name);
    console.log("Role", role);
}
display(1, "JackSparrow");
display(2, "MoneyHeist", "Proffesor");
