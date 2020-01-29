// 이미지 alt 속 내용을 캡션으로 만들어줌
// alt 값이 없다면, caption을 생성하지 않음
// 기존에 지정된 width, height 값을 그대로 복사
$('.col-lg-8 p > img[alt]').replaceWith(function () {
    var src = makeValue(this, "src")
    var alt = makeValue(this, "alt")
    // var alt = makeValue("alt")
    var width = makeValue(this, "width", "80%")
    var height = makeValue(this, "height", "80%")
    return '<figure>'
        + '<a href="' + src + '" class="mg-link">'
        + '<center><img src="' + src + '" width="'+ width +'" height="'+ height +'"/></center></a>'
        + (alt ? '<figcaption class="caption" style="width:'+ width +'">' + alt + '</figcaption>' : '')
        + '</figure>';
});

// 이미지를 magnific popup image viewer에 연결시킴
$('.mg-link').magnificPopup({
    type: 'image',
    closeOnContentClick: true
});


function makeValue(self, name, defaultValue = ""){
    return $(self).attr(name) ? $(self).attr(name) : defaultValue
}