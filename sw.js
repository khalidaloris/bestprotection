/* Best Protection — عامل الخدمة: للإشعارات فقط.
   ما يخزّن الصفحات (عشان أي تحديث ترفعه لـ v2.html يوصل فوراً). يرفع جنب v2.html في GitHub. */
const ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAIAAABt+uBvAAANm0lEQVR42u2bXWwbV3bHz7l35nJIiqJMmbJcW7K+XMuyDXu9aFMnm4WBBt2gwea1QIACiyIPm34tUKDAPi6QPCzQIruLPjVF+7ABCjSAg7QBgjw0QAInceIgjrPxVpJTW3JFSxYpUuKHSM7XPftwpPGIpKgPy5stMBeGMZy5c+fe3/zPueeeO0IpJURl+yIiBBGgCFAEKAIUAYoARYAiQFGJAEWAIkARoAhQBCgCFAGKSgQoAhQBigBFgCJAEaAIUFSMx9o6IhIRH/wODp779tsD1JHC7yaacN+6YzIOFsc30sgjCieQ+YEB2veoHgVHi7UGQ9pNm+1EWk52YYR7+rpj9yPcZU3u2aMQb6cWHG837PDJ7Y73DGjHkexmkNvVeXRA+zCu4Lg7oz0oaK8+uHt9IuLe8AFuFiFEuM5j8j7Bo3dktDOgLtppP7ldNW7E87zg8UqpWCymlDIMQwjBV23btm3bcRy+Sym1V43sZi4P02lntB9AuznfERYiaq1d12UimUzmyJEjAwMDvb29lmXxVa01AAghhBBSSiFEo9HI5/O5XG5hYaHRaJimqZQKFNfR3bY/PRBmu0A66ujAAHWXEh/wa3ddl4ji8fixY8fGxsaOHDkihCiXy8vLy/l8vlQqra+vs1iCopRKp9ODg4NjY2MnTpxQSs3NzX366ae5XE4pZZom02x5YjDCLvbezqL7/7sF1PKKutsUuw/XdX3fl1IeO3ZscnJycHDQdd1cLnf37t3FxcXw41kvYY/j+36AAABGRkaeeuqpc+fOLSwsvPPOO3Nzc5ZlGYahtW43/LBeOl4NayTsAbuLaGdA4blzO/mwE2E59PT0nD9//vTp04Zh3Llz59atW0tLSwERwzDa3UrHZn3fZ9tMJpPPP//85cuXp6enX3/99WKxmEqlWiyoo4m1THPhOaELpj0D6q4mlgy3ODEx8cwzz5w8eXJpaenDDz/84osvbNsGAMMw+Cnt9+5mMuZG0un0iy++eOnSpTfeeOPKlSumaZqmyXW01vyGuE3+2dFkWnC0MNoPoBbP0vKG2RwymczFixefe+65kZGRGzduvP322zdv3gymoS5+quP5cNf5jNa62WzypeHh4VdeecX3/ZdffnlhYSGZTHIfWCkdvXK7lXXksp0b2gOgcLuGYfT09AwODp46dWp8fLy/v//rr7/O5XI3b94sFApcwTCMls6F450wqSAOaBkeEWmtpZRPPvnk008/PTg4+Oabb7777rsvvPDCs88++9prr127do21E7QZuDaeEwOJtYBgrDs6oz0EikIIwzAsy0qlUul0OpvNHj169NixY8PDw9lstlQqVatV3/czmUyz2bx69eoHH3zApEzTDO4Nxs/q832/o7CDcFFKiYimaZ49e7anp4eJT09PFwqFqampTCaTz+eDyYHjCcdx1jdLvV73PC/QciwWY+G3ANpOR7sFJITg1rkfPDweGyslFovFYrFkMplMJgcHBy9cuHDmzBnHcT7//PPr16/Pzs5WKhUi6unpSSQSqVSqp6cnlUolEolYLBaPxznMYcWxZwlOxuNxpZQQwnVd5qWU6uvrsyyLjS4ejwfxN5eAteu65XJ5aWlpbm5uZmZmdnb23r17nucppZRSgabaRbRPE+MWd78C6O3tHRsbGxgYEEKsra0tLy+XSiUmFZ7mg8KDZOto8aP86OCt8AF3qb2fpmlalpVIJJLJZDabHRoaGh8fHx4etiyrWCx++eWXH3/88fz8PGuqBdD+TSxs5GFXGg4Lw5e01qxtLpZlJZNJIUSg+XY3GXiozkvqrZ6ro18PDIeNKJ1OK6Wq1Wrg4EdHRycnJ0dGRlZXVz/77LN79+4FNnEACmoPi1rio+3Os6/hqTcQSPv82B62dExibLfubamste7v7z979uzly5cvXLhARG+99db8/PzKykqlUkmn0wMDA6VSaWZmptFohGPxAwDUfhEAEIEIeLCsifYFSqegDgEBodtdm10HIXabEuH1XbCImZqaeumll6SUr776quu6lmXV6/VGo9Hb24uIDx48CGoeMKBNo2irLIRASaS3C7uJ9CYpwWw2QITsqMWKAVH7/sNe8NVOARr7rGCInuexxT3xxBPnzp177733crmc53lSSt/3OYLlCgcJiIgACFGYhgloABLriPvuOw3HdQ0V49NhXRCREEIaJm3e8fA/IO37AFutCQEISGvXblo9vYAIGzoFAkAiIh0aDBGBQOETIRACEGjQSAhA1Gg2rbiV6kk5jmPbdktuoIuJGfvKrSASoZBnnv9p4vAJFdPxhFJK1dddu+kaJi588svb194UhkJ4SAeFcJvNoalL3/3By4K0qaQhtWFIX/vaN9xG+T9/9le1UkEa4ReG2veMRPpP/vqfjoycjkk3HpMooNH0fWHd//W1d//5x9IwgRgZApEH+ns//EXy6Fhtre576GoXHc8jF+zmZ1d+Uij8H8cNXXJyLWeM/aU4NRL4oGO/N/P+v1WWbkmlEDQR+q6bHv72xe//aGnmWnV1SRoqcC6ktZBiae7Xb//8RwAkBCDSpngEEDXW14RkWwMglpu0bXvye39G8eyVf/hLiQBIQJo0gFC+U0Npkqagcxq153ofvvELGU+4tt038t3j3/7+r678PaBAX3vNciym2K53v0dm7DMNTASEXr3irPxPo3RHsOYBNAC4bn7pz10fBbamaRCF2yiX6+WOfbGs+IZPAWTbJAAC0LL//syt4r1ftdSXAPFkQgdzBBESImAxd2sjxJXp2tD5cu5LrmxasQ2vt7ms2c3GhrHP9CUBINSqzeN/+HdDeg2EaRgGEXl2Q6RPV+ZuOGv3MRYjHXLViL7nHh46P/7kD0mQlFJIgUKC9jRJu3jn1n//HEjDlilfCxR3P/qPP3jhZ9/5i18KdJSKuY5NgKjdOx/968rcDakSRH7Yx1mWRSjcZlOalhm3TFMJKQViMG/sKYe7v41DJCAkTW5zee6T2uptlDFEICIgX5jZ0W/9aero+OqDu6YZWq9qQiEqK4szV/9dI6FAwWtUIE0IXgVBc+cfMiUtDbmen/7oX36QPPz7wjSJNBCQ9vtO/NHod/5mbelvfc8O5jJeuBKRQADSwhDKMJC0BElALSHuththWy/tBxABAQgidCu52vL79XK+pULp+CUt0kgaQAAE8wUhSrtesOuFjh9RKKVIIAYD0JoABAoU4Kw/cNYfhOuX738V7/9HYSRcZ11Ksy1cBARwG43KygoKSQjbTVg75qT3pSCeNZBqleLhkT/WbkWgYmH5nuNCur76db0wK6TQRAj0UHfaTR0a7j9+URNJwwRAISSQ1pok6sX/fd9zKiiMDaaIAtFznezxb6UHz5AGjkg0aNdx0Bot3r7arBelMNuzq4CICHa9WVspohREAEgIO2cd92liLT3YDNR0Y/kT20yjNAAFApHWCOg5Oa92F3QdpUDQQYjE3babzUI+D4BCSkApQBCQ1loIj0jz698ai+pq1bahgCgABSCQJu27nn3HLU9LsRF2trlIDVLalfnS7f8C8oAMFn7YPe9y7b2HndXW7FwoYA0/QSBIwwAURCS2Js+1Jt9zaTMG3Jj1Nn8qK4YggsaCMbiOQ1uXNvxPKhNRIm6RQOCGtNau40gBKhb3SQsUQaq/y57PfrZ9tgUUegkohEABCH5oER9kFIPkEftRjoG19jermZu5bYeXGkGXeDcRAKQ0gvQr32gYhhASgIJtNR58sOnIs6qQ0rFtTgBxte5brPsH1L7kkVKePHmSxz8/P++5niadyWROnDjhum61Wl1YWODV/KFDh8bHx7XWs7Oz9XqdN8umpqYSicTi4uLc3ByPbXJy0rIs13Vv377Ne7BcDRFnZ2er1SoRZbPZU6dOAcHM7EyxWOSMOAAUi0XeoT19+nQqleItJk4znTlzZnp6uq+vr1arNRqNIL2/4z79nj/Ba2lRSpnJZBzHOXz4cDwe16SJqLe3Nx6Pe543MDAQ9GN0dPSrr77K5XITExO+7/PeaS6X832fIbIZ8g6a4zhsC57nTUxM3L9//8aNG+vr6/yGisXi2tpavpBnIp7npdPpvr4+3/cdxxkaGqrVatevXx8bG1NKsXJ5GzKbzfKZve76tyZodp/A55BsZWVlcXGxWq1KKbXWlmXZtq2UKpVK5XKZXxenk2OxWKPRqFQqQgjOCkop8/l8sCPU399v27bneeVymbOInHXllKvneUxNSrm+vs5P9H0/kUj4vl+pVNjukskk97NQKPBbdBwnn8+PjIwsLCxwKnI7vTzS5y+d6UrJe3sbE7DW/FYZSqPRCDatDh06xCMPvw/TNDnZzD41SMvXajV2GWyeUspqtRrUZMMJsq78M8DX19enlFpdXWUZaq2VUs1mk3UdRtM+ux88INbRdmvi9hVzu49s/xqmpdpW777lW5mWn+GsaxBVh1mE382Oi/iDAbQbj97lK9eOEVr3G3f8QqFj/e5ri+4u6bEA+u18mtn9q8Xdu+HuNffspOEb+lgXvomPpB/7h+SPaSTtktluL+TRKf8/UNDjsEqI/lbjUcwq+mOWCFAEKAIUAYoARYAiQFGJAEWAIkARoAhQBCgCFAGKAEUlAhQBigBFgCJAEaAIUAQoKhGgvZTfAHSmUuJoDGPBAAAAAElFTkSuQmCC';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('push', (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { try { d = { b: e.data.text() }; } catch (__) { d = {}; } }
  const title = String(d.t || 'Best Protection — العقود');
  const opts = { body: d.b ? '\u200F' + String(d.b) : '', icon: ICON, lang: 'ar', dir: 'rtl', data: { u: String(d.u || 'v2.html#/') } };
  if (d.g) { opts.tag = String(d.g); opts.renotify = true; }
  // ‏(علامة RLM قبل النص: السطر يبدأ من اليمين حتى لو أوله رقم العقد BP-…)
  // الجهاز يشترط إظهار إشعار مع كل رسالة
  e.waitUntil(self.registration.showNotification(title, opts));
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const raw = (e.notification.data && e.notification.data.u) || 'v2.html#/';
  const url = new URL(raw, self.registration.scope);
  if (url.origin !== self.location.origin) return;
  e.waitUntil((async () => {
    const wins = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const app = wins.find((c) => /\/v2\.html(#|$|\?)/.test(c.url)) || wins[0];
    if (app) {
      try { app.postMessage({ type: 'bp-open', url: url.href }); } catch (_) { /* */ }
      try { await app.focus(); return; } catch (_) { /* يفتح نافذة جديدة تحت */ }
    }
    await self.clients.openWindow(url.href);
  })());
});
