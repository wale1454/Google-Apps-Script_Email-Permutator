function generateEmailPermutations() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var startRow = 1; // Assuming data starts from row 2
  var nameColumn = 1; // Column A
  var companyAddressColumn = 2; // Column C
  var emailColumn = 3; // Column D

  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();

  for (var i = startRow - 1; i < data.length; i++) {
    var name = data[i][nameColumn - 1];
    var companyAddress = data[i][companyAddressColumn - 1];
    var emailPermutations = generatePermutations(name, companyAddress);

    // Writes the email permutations to the email column (Third column - C)
    for (var j = 0; j < emailPermutations.length; j++) {
      sheet.getRange(i + 1, emailColumn).offset(j, 0).setValue(emailPermutations[j]);
    }
  }
}

 // unction to generate various possible email permutations
function generatePermutations(name, companyAddress) {
  var permutations = [];
  var parts = name.split(" ");
  var firstName = parts[0];
  var lastName = parts[parts.length - 1];
  var domain = companyAddress.split("www.")[1]; // Extract the domain from the company address

   // Generate email permutations
  permutations.push(firstName.toLowerCase() + "@" + domain);
  permutations.push(lastName.toLowerCase() + "@" + domain);
  permutations.push(firstName.toLowerCase() + lastName.toLowerCase() + "@" + domain);
  permutations.push(firstName.toLowerCase() + "." + lastName.toLowerCase() + "@" + domain);
  permutations.push(firstName[0].toLowerCase() + lastName.toLowerCase() + "@" + domain);
  permutations.push(firstName[0].toLowerCase() + "." + lastName.toLowerCase() + "@" + domain);
  permutations.push(firstName[0].toLowerCase() + "." + lastName[0].toLowerCase() + "@" + domain);
  permutations.push(lastName.toLowerCase() + firstName.toLowerCase() + "@" + domain);
  permutations.push(lastName.toLowerCase() + "." + firstName.toLowerCase() + "@" + domain);
  permutations.push(lastName.toLowerCase().charAt(0) + firstName.toLowerCase() + "@" + domain);
  permutations.push(lastName.toLowerCase().charAt(0) + "." + firstName.toLowerCase() + "@" + domain);
  permutations.push(firstName.toLowerCase().charAt(0) + lastName.toLowerCase().charAt(0) + "@" + domain);
  permutations.push(firstName.toLowerCase().charAt(0) + "." + lastName.toLowerCase().charAt(0) + "@" + domain);
  permutations.push(firstName.toLowerCase() + "-" + lastName.toLowerCase() + "@" + domain);
  permutations.push(firstName.toLowerCase().charAt(0) + "-" + lastName.toLowerCase() + "@" + domain);
  permutations.push(firstName.toLowerCase() + "-" + lastName.toLowerCase().charAt(0) + "@" + domain);
  permutations.push(firstName.toLowerCase().charAt(0) + "-" + lastName.toLowerCase().charAt(0) + "@" + domain);
  permutations.push(lastName.toLowerCase() + "-" + firstName.toLowerCase() + "@" + domain);
  permutations.push(lastName.toLowerCase().charAt(0) + "-" + firstName.toLowerCase() + "@" + domain);
  permutations.push(lastName.toLowerCase() + "-" + firstName.toLowerCase().charAt(0) + "@" + domain);
  permutations.push(lastName.toLowerCase().charAt(0) + "-" + firstName.toLowerCase().charAt(0) + "@" + domain);
  permutations.push(firstName.toLowerCase() + "_" + lastName.toLowerCase() + "@" + domain);
  permutations.push(firstName.toLowerCase().charAt(0) + "_" + lastName.toLowerCase() + "@" + domain);
  permutations.push(firstName.toLowerCase() + "_" + lastName.toLowerCase().charAt(0) + "@" + domain);
  permutations.push(firstName.toLowerCase().charAt(0) + "_" + lastName.toLowerCase().charAt(0) + "@" + domain);
  permutations.push(lastName.toLowerCase() + "_" + firstName.toLowerCase() + "@" + domain);
  permutations.push(lastName.toLowerCase().charAt(0) + "_" + firstName.toLowerCase() + "@" + domain);
  permutations.push(lastName.toLowerCase() + "_" + firstName.toLowerCase().charAt(0) + "@" + domain);
  permutations.push(lastName.toLowerCase().charAt(0) + "_" + firstName.toLowerCase().charAt(0) + "@" + domain);

  return permutations;
}
