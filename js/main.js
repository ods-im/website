// Do not mess with this file unless you know what you're doing :P

$(document).on('click', 'a[href^="#"]', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 900);
});

// This is for the click to copy
let t;
$(document).ready(()=>{
	t = $(".ip").html();
})
$(document).on("click",".ip",()=>{
	let copy = document.createElement("textarea");
	copy.style.position = "absolute";
	copy.style.left = "-99999px";
	copy.style.top = "0";
	copy.setAttribute("id", "ta");
	document.body.appendChild(copy);
	copy.textContent = t;
	copy.select();
	document.execCommand("copy");
	$(".ip").html("<span class='extrapad'>IP 已复制!</span>");
	setTimeout(function(){
		$(".ip").html(t);
		var copy = document.getElementById("ta");
		copy.parentNode.removeChild(copy);
	},1000);
})
$(document).on("click",".copy",()=>{
	let copy = document.createElement("textarea");
	copy.style.position = "absolute";
	copy.style.left = "-99999px";
	copy.style.top = "0";
	copy.setAttribute("id", "ta");
	document.body.appendChild(copy);
	copy.textContent = t;
	copy.select();
	document.execCommand("copy");
	$(".ip").html("<span class='extrapad'>IP 已复制!</span>");
	setTimeout(function(){
		$(".ip").html(t);
		var copy = document.getElementById("ta");
		copy.parentNode.removeChild(copy);
	},1000);
});

// This is to fetch the player count
$(document).ready(()=>{
  const ip = $(".sip").attr("data-ip");
  const port = $(".sip").attr("data-port");

  $.get(`https://mcapi.us/server/status?ip=${ip}&port=${port}`, (result)=>{
    if (result.online) {
      $(".sip").html(result.players.now);
    } else {
      $(".playercount").html("请检查服务器是否开启!");
    }
  });

  setInterval(()=>{
    $.get(`https://mcapi.us/server/status?ip=${ip}&port=${port}`, (result)=>{
      if (result.online) {
        $(".sip").html(result.players.now);
      } else {
        $(".playercount").html("请检查服务器是否开启!");
      }
    });
  }, 500);
});
