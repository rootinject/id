const injectBtn = document.getElementById("injectBtn");
const injectStatus = document.getElementById("injectStatus");
const statusText = document.querySelector(".status-text");
const successText = document.getElementById("successText");
const targetLink = "https://rajapupuksawit.pro/win1131-kw";

injectBtn.addEventListener("click", () => {
  injectBtn.disabled = true;
  injectBtn.textContent = "PROCESSING...";
  injectStatus.classList.remove("hidden");
  successText.classList.add("hidden");

  statusText.textContent = "CONNECTING TO SERVER...";

  setTimeout(() => {
    statusText.textContent = "SENDING PAYLOAD...";
  }, 1500);

  setTimeout(() => {
    statusText.textContent = "BYPASS CHECK...";
  }, 3000);

  setTimeout(() => {
    statusText.textContent = "SUCCESS";
    injectBtn.textContent = "INJECTED";
    injectBtn.style.background = "#00ffaa";

    // tampilkan keterangan sukses
    successText.classList.remove("hidden");

  }, 4500);

  // redirect ke WIN1131
  setTimeout(() => {
    window.location.href = targetLink;
  }, 6500); // 2 detik setelah sukses
});

// toggle switch
document.querySelectorAll(".switch").forEach(btn => {
  btn.onclick = () => {
    btn.classList.toggle("on");
    btn.textContent = btn.classList.contains("on") ? "YES" : "NO";
  };
});

// chat dummy
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendChat = document.getElementById("sendChat");

const users = [
  "docxm","jimmyhong","kurmx","hikmr","tikz","doomtrobo",
  "ryanzx","alvin88","bimo777","raflyx","kenzoid","vanzky",
  "xenon99","arka21","dimasgg","fajars","iqbalx",
  "kurniawan","leo777","mariox","naufal22","opankz",
  "pradipta","qwertyx","reza888","suryaid","teguhx",
  "udinmax","vicky77","wawanx","yogaplay","zenky",
  "aditpro","bagas77","cahyoid","dennys","eko777",
  "ferdian","galihx","hendra88","indrazz","joni777",
  "kikiwin","lukmanx","mikoid","nando77","okkyx",
  "putrax","rizal88","sandyx","tono777","uwayx",
  "wahyupro","yusufid","zidanx","arief77","bayuplay",
  "chandrax","dion777","erikplay","fajarid","gilangx",
  "hasan88","ivan777","jakaid","kevinx","luthfi77",
  "maulanax","noval88","oscarid","pandu777","rafiix",
  "syahrulx","taufik88","ucup777","wildanx","yazid88",
  "zakyid","andre777","bastianx","cepix","darryl77",
  "ekoxtreme","firmanx","gustav88","hidayatx"
];

const texts = [
  "mantap hari ini",
  "server HK gacor",
  "auto scatter muncul",
  "main bentar langsung naik",
  "baru masuk udah hijau",
  "scatter cepet banget",
  "baru depo langsung jalan",
  "server stabil ga delay",
  "wild sering keluar",
  "free spin gampang",
  "main santai hasilnya ada",
  "pola hari ini enak",
  "x100 tembus barusan",
  "belum lama udah wd",
  "server ga ribet",
  "auto spin aman",
  "lagi hoki banget",
  "modal kecil tembus",
  "scatter beruntun",
  "main sebentar profit",
  "server rame tapi lancar",
  "spin manual lebih kena",
  "pola malem ini gacor",
  "baru login langsung naik",
  "ga pake lama langsung dapet",
  "win kecil tapi konsisten",
  "naik pelan tapi pasti",
  "jam segini enak main",
  "server adem",
  "ga sering zonk",
  "wild dobel muncul",
  "free spin panjang",
  "lagi hoki server ini",
  "main auto cepet masuk",
  "pola lama masih jalan",
  "scatter ga pelit",
  "x50 sering dapet",
  "server mantap hari ini",
  "main iseng malah dapet",
  "belum panas udah win",
  "lagi lancar banget",
  "masuk awal langsung hijau",
  "ga perlu nunggu lama",
  "spin dikit tapi kena",
  "hari ini ramah modal",
  "auto scatter keliatan",
  "server ga berat",
  "wd aman",
  "pola simpel tapi kena",
  "main pagi juga oke",
  "baru nyoba langsung dapet",
  "malem ini enak",
  "x100 nongol",
  "scatter nyusul terus",
  "main pelan aman",
  "server stabil banget",
  "ga kerasa udah naik",
  "lagi hoki juga",
  "free spin sering muncul",
  "pola gacor hari ini",
  "main ga pake mikir",
  "spin cepet respon",
  "ga sering mati",
  "win berasa",
  "scatter gampang",
  "modal balik",
  "main enjoy hasil oke",
  "server rame tapi aman",
  "wild muncul terus",
  "auto jalan mulus",
  "lagi panas",
  "baru depo langsung gas",
  "pola sore ini masuk",
  "main dikit dapet",
  "server ga ngelag",
  "win kecil tapi rutin",
  "free spin berturut",
  "ga nyesel main",
  "jam hoki",
  "main aman",
  "server friendly",
  "scatter cepet nyantol",
  "x50 sering nongol",
  "main tenang",
  "ga banyak zonk",
  "lagi bagus",
  "pola ga ribet",
  "win tipis tapi jalan",
  "server bersih",
  "main santai tapi dapet",
  "hari ini hoki",
  "scatter dateng terus"
];

function addChat(user, text) {
  const div = document.createElement("div");
  div.className = "msg";
  div.innerHTML = `<span class="user">${user}</span>: ${text}`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendChat.onclick = () => {
  if (!chatInput.value.trim()) return;
  addChat("You", chatInput.value);
  chatInput.value = "";
};

chatInput.addEventListener("keydown", e => {
  if (e.key === "Enter") sendChat.click();
});

setInterval(() => {
  addChat(
    users[Math.floor(Math.random() * users.length)],
    texts[Math.floor(Math.random() * texts.length)]
  );
}, 3000);
