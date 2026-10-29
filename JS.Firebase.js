
  // Cấu hình Firebase từ dự án quoerp của bạn
  const firebaseConfig = {
    apiKey: "AIzaSyC6v_3fwaRg7Im3jbVSbw1IkYCra3or5Ik",
    authDomain: "quoerp.firebaseapp.com",
    projectId: "quoerp",
    storageBucket: "quoerp.firebasestorage.app",
    messagingSenderId: "968467006611",
    appId: "1:968467006611:web:28f4093633d265b442f966",
    measurementId: "G-M2WL4KK0P0"
  };

  // Khởi tạo Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  console.log("🔥 Đã kết nối thành công với Firebase Firestore của dự án quoerp!");
