var koe_34_xhr = new XMLHttpRequest()
koe_34_xhr.open('GET','https://bili.imba97.cn/dwz.php?url=' + window.location.href, 'true');
koe_34_xhr.send();
koe_34_xhr.onreadystatechange = function () {
  if (koe_34_xhr.readyState === 4 && koe_34_xhr.status === 200) {
    var json = JSON.parse(koe_34_xhr.responseText);
    if(typeof json.url !== 'undefined') {
      prompt('短网址', json.url);
    }
  }
}
