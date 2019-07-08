const rssParser = require('rss-parser');
const parser = new rssParser();
function main (vars) {
	return parser.parseURL('http://feeds.bbci.co.uk/news/rss.xml');
}
