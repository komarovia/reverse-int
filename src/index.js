module.exports = function reverse (n) {
	if (n < 0) {n = n * -1}
	n = String(+n);
	n = n.split('');
	n = n.reverse();
	n = +n.join('');
	return n;
}
