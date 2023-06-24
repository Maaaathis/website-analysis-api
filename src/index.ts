import WebsiteAnalyzer from './WebsiteAnalyzer';

const analyzer = new WebsiteAnalyzer({
    url: 'https://team-panel.com'
});

analyzer.analyze().then((data) => {;
    console.log(data);
});