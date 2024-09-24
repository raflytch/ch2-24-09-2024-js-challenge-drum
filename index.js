// document
//   .querySelector("button")
//   .addEventListener("click", () => handleClick("hai"));

// function handleClick(greet) {
//   alert(`Halo FSW 2  ${greet}`);
// }

// handleClick();

// console.log(document.querySelectorAll("button")[3]);

// Array.length()

// let totalOfButtons = document.querySelectorAll("button").length;

// for (let i = 0; i < totalOfButtons; i++) {
//   console.log(i);
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
// this.style.color = "yellow";
// Lakuin sesuatu setelah button di klik

//     switch (this.innerHTML) {
//       case "w":
//         let tom1 = new Audio("sounds/tom-1.mp3");
//         tom1.play();
//         break;
//       case "a":
//         let tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         break;
//       case "s":
//         let tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play();
//         break;
//       case "d":
//         let tom4 = new Audio("sounds/tom-4.mp3");
//         tom4.play();
//         break;
//       case "j":
//         let snare = new Audio("sounds/snare.mp3");
//         snare.play();
//         break;
//       case "k":
//         let crash = new Audio("sounds/crash.mp3");
//         crash.play();
//         break;
//       case "l":
//         let kick = new Audio("sounds/kick-bass.mp3");
//         kick.play();
//         break;
//       default:
//         console.log("drumnya ilang woi");
//     }
//   });
// }

// document.querySelectorAll("button").forEach((button) =>
//   button.addEventListener("click", function () {
//     alert("Hallo FSW 2");

// Lakuin sesuatu setelah button di klik
//   })
// );

// Tugas Mandiri
// Mendapatkan semua tombol dengan kelas 'drum'
const drums = document.querySelectorAll(".drum");

// Fungsi untuk memainkan suara berdasarkan indeks
function playSound(index) {
  switch (index) {
    case 0:
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case 1:
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case 2:
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case 3:
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case 4:
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case 5:
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case 6:
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log("Suara drum tidak ditemukan!");
  }
}

// Fungsi untuk menambahkan animasi pada tombol
function addAnimation(button) {
  // Ubah warna tombol menjadi biru selama 3 detik
  button.style.color = "blue";
  setTimeout(() => {
    button.style.color = "";
  }, 3000);

  // Tambahkan animasi rotasi berputar selama 2 detik
  button.style.transition = "transform 2s";
  button.style.transform = "rotate(360deg)";

  // Hapus animasi setelah 2 detik reset rotasi
  setTimeout(() => {
    button.style.transform = "rotate(0deg)";
  }, 2000);
}

// Event listener untuk klik tombol drum
drums.forEach((drum, index) => {
  drum.addEventListener("click", function () {
    playSound(index);
    addAnimation(drum);
  });
});

// Event listener untuk tombol keyboard
document.addEventListener("keypress", function (event) {
  // Tangkap tombol yang ditekan
  let keyPress = event.key.toLowerCase();

  drums.forEach((drum, index) => {
    // ambil class huruf dari tombol
    const key = drum.classList[0];
    key === keyPress ? (playSound(index), addAnimation(drum)) : null;
  });
});
