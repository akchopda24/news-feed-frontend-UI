*** Software requirement ***
1. Download visual studio code and install it

2. Node latest version install

*** Project setup ***
1. Clone or download repository code from below link
git clone https://github.com/akchopda24/news-feed-frontend-UI.git

2. Open folder file from visual studio code

3. Open command prompt in VS code and execute below command
npm install

4. Run it by below command
ng serve
   

*** If you get any error like below then execute solution command ***

Error => ng : File C:\Users\admin\AppData\Roaming\npm\ng.ps1 cannot be loaded. The file C:\Users\admin\AppData\Roaming\npm\ng.ps1 is not digitally signed. You cannot run this script on the current system. For more information about running scripts and setting execution policy, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.

Solution of error => You can fix this issue by execute the following CMD command in the same Powershell terminal
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

 
