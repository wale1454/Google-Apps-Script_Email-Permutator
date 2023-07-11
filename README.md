# Google Sheets Email Permutation Generator using Google Apps Script

This is a simple Google Apps Script tool that generates possible email address permutations based on provided name, surname, and company address in a Google Sheets document.

## Usage

1. Open a Google Sheets document.
2. Click on "Extensions" in the menu, then select "Apps Script."
3. Replace the existing code in the Apps Script editor with 'email_permutator.gs'
4. Click on save at the top of the screen, in the toolbar section.
5. Go back to the Google Sheets doc. and Fill in the "Names" and "Company Address" columns in your Google Sheets document.
6. Then go the the Apps Script editor and click on the "Run" button (▶️) in the toolbar to execute the script.
7. Email permutations will be generated in the adjacent column.

## Configuration


- Input the name and surname together at position (A1) i.e (John Doe), and company domain URL at position (B1) i.e (www.example.com). 
- The email permutations would appear under column (C).

- The script uses various patterns to generate email permutations, such as first name, last name, initials, hyphenation, and underscore. You can modify the `generatePermutations` function to include or customize additional patterns however you like.


## Limitations

- This script assumes that the company address domain is in the format of "www.example.com". You can also modify the code in the `generatePermutations` function to extract the domain correctly.


Feel free to modify and adapt the code according to your needs.

## Demo




https://github.com/wale1454/Google-Apps-Script_Email-Permutator/assets/31905212/62db2a8e-ca34-43bb-96a4-eb7e9ef0af2a


---------------


Click on the google sheets below to duplicate the file and test it out.

https://docs.google.com/spreadsheets/d/16lPOotiRX477BWUIkE0lMc2x7e07ZxP7bSnDMVqM8CI/edit?usp=sharing




---------------
