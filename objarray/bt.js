const array = [
  {
    name: "van a",
    age: 26,
    gender: "male",
    phoneNumber: "0123123333",
    address: "113 abc ",
    dateCreated: new Date(),
    roles: ["GD", "BA"],
  },

  {
    name: "Thi C",
    age: 30,
    gender: "female",
    phoneNumber: "0120023333",
    address: "113 abc ",
    dateCreated: new Date(),
    roles: ["KT"],
  },

  {
    name: "van abac",
    age: 18,
    gender: "male",
    phoneNumber: "0123123333",
    address: "113 abc ",
    dateCreated: new Date(),
    roles: ["NV"],
  },

  {
    name: "Tran A",
    age: 36,
    gender: "male",
    phoneNumber: "0123123333",
    address: "113 abc ",
    dateCreated: new Date(),
    roles: ["GD", "TL", "PO"],
  },

  {
    name: "Thanh Y",
    age: 22,
    gender: "female",
    phoneNumber: "0123123333",
    address: "113 abc ",
    dateCreated: new Date(),
    roles: ["QC", "PM"],
  },
   {
    name: "Thanh Chi",
    age: 30,
    gender: "female",
    phoneNumber: "0123123333",
    address: "113 abc ",
    dateCreated: new Date(),
    roles: ["GD", "PM"],
  },
     {
    name: "Thanh Chi",
    age: 42,
    gender: "female",
    phoneNumber: "0123123333",
    address: "113 abc ",
    dateCreated: new Date(),
    roles: ["GD", "PM"],
  },
];

// 1. tạo một bảng hiển thị dữ liệu trên dùng html css
// 2. Tính xem có bao nam, bao nữ
// 3. kiểm tra xem có nv nào trên 40 tuổi không
// => nếu có in ra 1 dòng p : Có ... nv trên 40
// => nếu không in ra dòng p: Không có nv trên 40
// 4. Kiểm tra xem có nv nào là GD trên 30 tuổi không
// nếu có =>  in như trên
// nếu không =>
// 5. viết một hàm cho phép khi bấm vào một dòng trên bảng
// hiển thị thong tin của dòng đó dưới dạng Alert

// 1. tạo một bảng hiển thị dữ liệu trên dùng html css
function makeTable() {
  const headerLine = document.getElementById("rowHeader");

  const header = Object.keys(array[0]); // Lấy key của object để tạo header
  header.forEach((x) => {
    const cellHeader = document.createElement("td"); // Tạo ô cho header
    cellHeader.innerHTML = x;
    headerLine.appendChild(cellHeader);
    headerLine.classList.add("tabledesigner");
    cellHeader.classList.add("tabledesigner");
  });

  array.forEach(
    (
      items,
      index // Vòng lặp vào mảng để lấy từng object
    ) => {
      const detailsLine = document.createElement("tr");
      const deatils = Object.values(array[index]);
     
      deatils.forEach((y) => {
        // Vòng lặp vào object để lấy từng value
        
        const celldetails = document.createElement("td");
        celldetails.innerHTML = y;
        detailsLine.appendChild(celldetails);
        detailsLine.classList.add("tabledesigner");
        celldetails.classList.add("tabledesigner");

         //////===============================================================================
          console.log("kq1"+detailsLine.name)
           console.log("kq2"+deatils[0]);

        //////===============================================================================
       // Thêm sự kiện click vào dòng
        detailsLine.addEventListener("click", () => {
        
           alert(`Tên: ${deatils[0]}`)
           // alert(`Tên: ${detailsLine.name}\nTuổi: ${item.age}\nGiới tính: ${item.gender}\nSĐT: ${item.phoneNumber}\nĐịa chỉ: ${item.address}\nNgày tạo: ${item.dateCreated.toLocaleDateString()}\nVai trò: ${item.roles.join(", ")}`);
        });

      //////

      });
      document.querySelector("table").appendChild(detailsLine); // cái này hoi chat
    }
  );
}


makeTable();

// 2. Tính xem có bao nam, bao nữ
function lookGender() {
  let maleCount = 0;
  let femaleCount = 0;
  array.forEach(
    (
      items,
      index // Vòng lặp vào mảng để lấy từng object
    ) => {
      const deatils = Object.values(array[index]);

      deatils.forEach((y) => {
        // Vòng lặp vào object để lấy từng value
        if (y == "male") {
          //if(y.includes("Nam"))
          maleCount += 1;
        }
        if (y == "female") {
          femaleCount += 1;
        }
      });
    }
  );
  const countNam = document.getElementById("printMale");
  countNam.innerHTML = maleCount;
  const countNu = document.getElementById("printFemale");
  countNu.innerHTML = femaleCount;
}

lookGender();

// 3. kiểm tra xem có nv nào trên 40 tuổi không

function ageStaffHigher40() {
  let countAge = 0;
  const notiAgeHigher40 = document.getElementById("printAge");
  const notiAgeNull = document.getElementById("printAgeNull");

  array.forEach(
    (
      items,
      index // Vòng lặp vào mảng để lấy từng object
    ) => {
      if (items.age > 40) {
        countAge += 1;
      }
    }
  );
  console.log(countAge)
 
  if (countAge === 0) {
        notiAgeNull.style.display = "block"; 
        notiAgeHigher40.style.display = "none"; 
    } else {
        const countAge40 = document.getElementById("printCountAge");
        countAge40.innerHTML = countAge; 
        notiAgeHigher40.style.display = "block"; 
        notiAgeNull.style.display = "none"; 
    }
}
ageStaffHigher40();

 // 4. Kiểm tra xem có nv nào là GD trên 30 tuổi không

function checkStaff() {
    let count = 0; 
   const notiStaff = document.getElementById("printStaff");
   const notiStaffNull= document.getElementById("printStaffNull")
  
    array.forEach((item) => { 
       
        if (item.age >= 30 && item.roles.includes('GD')) {
            count += 1; 
        }
    });

   
   
  if (count === 0) {
  notiStaff.style.display ="none";
  notiStaffNull.style.display ="block";
  
  } else {
    
    const countStaff = document.getElementById("printCountStaff");
   countStaff.innerHTML = count;
  
     notiStaff.style.display ="block";
  notiStaffNull.style.display ="none";
  }
}

checkStaff()
   console.log("vo day t1");


// 5. viết một hàm cho phép khi bấm vào một dòng trên bảng
// hiển thị thong tin của dòng đó dưới dạng Alert

