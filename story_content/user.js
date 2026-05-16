function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5VpEpCepKaM":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var nama = player.GetVar("Nama_Sales");

fetch("https://script.google.com/macros/s/AKfycbwTn7YX6BccN-_tXyMEPUq8uSwEkIuZur-8PQ9Zf0K3jMdHjT_B0pYr39QIbufoNFbI2g/exec", {
  method: "POST",
  mode: "no-cors",
  body: JSON.stringify({
    nama: nama
  }),
  headers: {
    "Content-Type": "application/json"
  }
});
}

