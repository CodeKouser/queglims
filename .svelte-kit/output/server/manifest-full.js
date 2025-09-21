export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BcMUSfkl.js",app:"_app/immutable/entry/app.DEPLIFvo.js",imports:["_app/immutable/entry/start.BcMUSfkl.js","_app/immutable/chunks/BnTB5HFV.js","_app/immutable/chunks/BpvbfEuJ.js","_app/immutable/chunks/CIMEkeN5.js","_app/immutable/chunks/CJyYlenq.js","_app/immutable/chunks/D6K9DCH3.js","_app/immutable/entry/app.DEPLIFvo.js","_app/immutable/chunks/CIMEkeN5.js","_app/immutable/chunks/CJyYlenq.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BpvbfEuJ.js","_app/immutable/chunks/D6K9DCH3.js","_app/immutable/chunks/C8Rs5w6z.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/subscribe",
				pattern: /^\/api\/subscribe\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/subscribe/_server.js'))
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
