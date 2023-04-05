import axios from 'axios';

const scriptName = 'whatever.js';
const endpointName = 'endpoint-name';
const umamiUrl = 'https://analytics.gobbees.dev';
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
  'Access-Control-Max-Age': '86400',
};

export default async function handler(req, res) {
  const { uri } = req.query;

  if (uri.endsWith(scriptName)) {
    return getScript(req, res);
  } else if (uri.endsWith(endpointName)) {
    return postData(req, res);
  }
  res.status(404).send(null);
}

async function getScript(req, res) {
  const response = await axios.get(umamiUrl + '/umami.js', {
    headers: {
      ...req.headers,
      ...corsHeaders,
      'accept-encoding': 'gzip',
      host: null, // not removing host header will result in a weird SSL error that leads to a 500 code (EPROTO SSL alert number 80)
    },
    decompress: true,
  });

  const originalScript = await response.data;
  const obfuscatedScript = originalScript.replace(
    new RegExp('/api/collect', 'g'),
    `/${endpointName}`
  );
  res.status(response.status ?? 200).send(obfuscatedScript);
}

async function postData(req, res) {
  const response = await axios.post(umamiUrl + '/api/collect', req.body, {
    headers: {
      ...req.headers,
      ...corsHeaders,
      host: null, // not removing host header will result in a weird SSL error that leads to a 500 code (EPROTO SSL alert number 80)
    },
  });
  res.status(response.status ?? 201).send(response.data);
}
