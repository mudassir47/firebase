function generateCode() {
    const databaseRef = document.getElementById('databaseRef').value;
    const divClassName = document.getElementById('divClassName').value;
    const display_content_name = document.getElementById('display_content_name').value;
    const divtotal = document.getElementById('display_content_name').value;
    const generatedCode = ` const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
  const useref = ref(database, "${databaseRef}");
  
  function fetchuser() {
    get(useref).then((snapshot) => {
      const userlist = document.getElementById("${divClassName}");
      const totalUsers = document.getElementById("${divtotal}");
      let count = 0;
      userlist.innerHTML = '';
  
      snapshot.forEach((element) => {
        const userdata = element.val();
        const listitem = document.createElement('li');
        listitem.textContent = \`${display_content_name}: \${userdata.${display_content_name.toLowerCase()}}\`;
        userlist.appendChild(listitem);
      });
    }).catch((error) => {
    
      console.log("Error fetching users: ", error);
    });
  }
  
  fetchuser();`;
  
    document.getElementById('generatedCode').value = generatedCode;
  }
  