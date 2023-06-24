import WebsiteAnalyzer from './WebsiteAnalyzer';

const analyzer = new WebsiteAnalyzer({
    url: 'https://webpack.js.org'
});

analyzer.analyze().then((data) => {;
    console.log(data);
});