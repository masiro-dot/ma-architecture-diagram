// ビルド済み成果物を追加依存なしでローカル確認する小さなHTTPサーバー。
import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, relative, extname, isAbsolute } from 'node:path';

const directory = fileURLToPath(new URL('../dist/', import.meta.url));
const port = Number(process.argv[2] || 4173);
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.glb': 'model/gltf-binary', '.txt': 'text/plain; charset=utf-8' };
try { await stat(resolve(directory, 'index.html')); }
catch { console.error('dist/index.htmlがありません。pnpm buildを実行してください。'); process.exit(1); }
if (!Number.isInteger(port) || port < 1024 || port > 65535) { console.error('ポートは1024〜65535で指定してください。'); process.exit(1); }

const server = createServer(async (req, res) => {
  try {
    if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405); res.end(); return; }
    const path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = resolve(directory, `.${path === '/' ? '/index.html' : path}`);
    const relation = relative(directory, file);
    if (relation.startsWith('..') || isAbsolute(relation)) { res.writeHead(403); res.end(); return; }
    const info = await stat(file);
    if (!info.isFile()) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream', 'Content-Length': info.size, 'Cache-Control': 'no-cache' });
    if (req.method === 'HEAD') { res.end(); return; }
    createReadStream(file).on('error', () => res.destroy()).pipe(res);
  } catch { res.writeHead(404); res.end('Not found'); }
});
server.on('error', (error) => { console.error(error.code === 'EADDRINUSE' ? `ポート${port}は使用中です。node scripts/serve.mjs 4174 などで変更できます。` : error.message); process.exit(1); });
server.listen(port, '127.0.0.1', () => { console.log(`間 / MA — http://127.0.0.1:${port}/\nブラウザで上記URLを開いてください。停止するには Ctrl+C。`); });
