        // รับอ้างถึงปุ่ม "Login" โดยใช้ ID
        var loginButton = document.getElementById("loginButton");
    
        // เพิ่มการฟังก์ชันเมื่อคลิกปุ่ม
        loginButton.addEventListener("click", function() {
            // เปลี่ยนไปยังหน้า "home.html"
            window.location.href = "home.html";
        });


    // รับอ้างถึงฟอร์มและฟิลด์ข้อมูลชื่อผู้ใช้และรหัสผ่าน
    var loginForm = document.getElementById("loginForm");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    // เพิ่มการฟังก์ชันเมื่อส่งแบบฟอร์ม
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // ยกเลิกการส่งแบบฟอร์มเพื่อป้องกันการโหมดใหม่

        // ตรวจสอบว่าชื่อผู้ใช้และรหัสผ่านถูกต้อง
        if (usernameInput.value === "admin" && passwordInput.value === "adminweb") {
            // ถ้าถูกต้อง, เปลี่ยนไปยังหน้า "home.html"
            window.location.href = "home.html";
        } else {
            // ถ้าไม่ถูกต้อง, แจ้งเตือนผู้ใช้หรือดำเนินการเพิ่มตามที่คุณต้องการ
            alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
        }
    });

