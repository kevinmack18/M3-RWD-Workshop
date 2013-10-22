/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Resource-Dot-Com\'">' + entity + '</span>' + html;
	}
	var icons = {
			'facebook' : '&#x66;',
			'twitter' : '&#x74;',
			'goal' : '&#x21;',
			'circle-full' : '&#xa1;',
			'circle' : '&#x6f;',
			'rotate' : '&#x4f;',
			'angle-down' : '&#x76;',
			'caret-up' : '&#x5e;',
			'caret-left' : '&#x3c;',
			'arrow-right' : '&#x7d;',
			'caret-right' : '&#x3e;',
			'arrow-left' : '&#x7b;',
			'eye' : '&#x22;',
			'menu' : '&#x23;',
			'reorder' : '&#x3d;',
			'sort' : '&#xe6;',
			'loop' : '&#xec;',
			'arrow-left-2' : '&#x31;',
			'arrow-left-3' : '&#x33;',
			'angle-left' : '&#x35;',
			'arrow-right-2' : '&#x32;',
			'arrow-right-3' : '&#x34;',
			'angle-right' : '&#x36;',
			'RWD' : '&#x77;',
			'rlogo-02' : '&#x72;',
			'resourcefulllogo-01' : '&#x52;',
			'resoucewordmark-03' : '&#x73;',
			'virtual-to-physical' : '&#x7e;',
			'forward-04' : '&#xbb;',
			'close-05' : '&#x58;',
			'back-03' : '&#xab;',
			'instagram' : '&#x69;',
			'android' : '&#x61;',
			'google-plus' : '&#x67;',
			'youtube' : '&#x79;',
			'foursquare' : '&#x46;',
			'pinterest' : '&#x70;',
			'html5' : '&#x48;',
			'github' : '&#x47;',
			'github-2' : '&#x68;',
			'apple' : '&#x41;',
			'windows8' : '&#x57;',
			'camera' : '&#x43;',
			'play' : '&#x63;',
			'pause' : '&#x5d;',
			'stop' : '&#x5b;',
			'play-2' : '&#x2d;',
			'pause-2' : '&#x5f;',
			'mobile' : '&#x6d;',
			'screen' : '&#x64;',
			'cart' : '&#x65;',
			'marker' : '&#x78;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};