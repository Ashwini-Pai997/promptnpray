const http = require('http');
const https = require('https');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204); res.end(); return;
  }

  if (req.method === 'POST' && req.url === '/api/gemini') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const { apiKey, prompt } = JSON.parse(body);
      const postData = JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }]
      });
      const options = {
        hostname: 'api.groq.com',
        path: '/openai/v1/chat/completions',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'Content-Length': Buffer.byteLength(postData)
        }
      };
      const apiReq = https.request(options, apiRes => {
        let data = '';
        apiRes.on('data', chunk => data += chunk);
        apiRes.on('end', () => {
          res.writeHead(apiRes.statusCode, { 'Content-Type': 'application/json' });
          res.end(data);
        });
      });
      apiReq.on('error', e => {
        res.writeHead(500); res.end(JSON.stringify({ error: e.message }));
      });
      apiReq.write(postData);
      apiReq.end();
    });
    return;
  }

  // Serve index.html for any GET request
  if (req.method === 'GET') {
    fs.readFile(__dirname + '/index.html', (err, data) => {
      if (err) {
        console.log('Could not find index.html at:', __dirname + '/index.html');
        res.writeHead(500); 
        res.end('index.html not found in: ' + __dirname);
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
    return;
  }

  res.writeHead(404); res.end('Not found');
});

server.listen(PORT, () => {
  console.log(`✅ Server running! Open this in your browser:`);
  console.log(`   http://localhost:${PORT}`);
  console.log(`\nServing files from: ${__dirname}`);
  console.log(`Press Ctrl+C to stop.`);
});
