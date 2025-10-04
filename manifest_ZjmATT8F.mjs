import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, g as decodeKey } from './chunks/astro/server_Dj1AFl_g.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/daws/repos/optyp.github.io/","adapterName":"","routes":[{"file":"file:///D:/daws/repos/optyp.github.io/dist/error/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/error","isIndex":false,"type":"page","pattern":"^\\/error\\/?$","segments":[[{"content":"error","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/error.astro","pathname":"/error","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/daws/repos/optyp.github.io/dist/explore/ats-resume/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/explore/ats-resume","isIndex":false,"type":"page","pattern":"^\\/explore\\/ats-resume\\/?$","segments":[[{"content":"explore","dynamic":false,"spread":false}],[{"content":"ats-resume","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/explore/ats-resume.astro","pathname":"/explore/ats-resume","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/daws/repos/optyp.github.io/dist/explore/freelancing/fiverr/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/explore/freelancing/fiverr","isIndex":false,"type":"page","pattern":"^\\/explore\\/freelancing\\/fiverr\\/?$","segments":[[{"content":"explore","dynamic":false,"spread":false}],[{"content":"freelancing","dynamic":false,"spread":false}],[{"content":"fiverr","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/explore/freelancing/fiverr.astro","pathname":"/explore/freelancing/fiverr","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/daws/repos/optyp.github.io/dist/explore/freelancing/toptal/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/explore/freelancing/toptal","isIndex":false,"type":"page","pattern":"^\\/explore\\/freelancing\\/toptal\\/?$","segments":[[{"content":"explore","dynamic":false,"spread":false}],[{"content":"freelancing","dynamic":false,"spread":false}],[{"content":"toptal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/explore/freelancing/toptal.astro","pathname":"/explore/freelancing/toptal","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/daws/repos/optyp.github.io/dist/explore/freelancing/upwork/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/explore/freelancing/upwork","isIndex":false,"type":"page","pattern":"^\\/explore\\/freelancing\\/upwork\\/?$","segments":[[{"content":"explore","dynamic":false,"spread":false}],[{"content":"freelancing","dynamic":false,"spread":false}],[{"content":"upwork","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/explore/freelancing/upwork.astro","pathname":"/explore/freelancing/upwork","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/daws/repos/optyp.github.io/dist/explore/github/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/explore/github","isIndex":false,"type":"page","pattern":"^\\/explore\\/github\\/?$","segments":[[{"content":"explore","dynamic":false,"spread":false}],[{"content":"github","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/explore/github.astro","pathname":"/explore/github","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/daws/repos/optyp.github.io/dist/explore/job-portals/indeed/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/explore/job-portals/indeed","isIndex":false,"type":"page","pattern":"^\\/explore\\/job-portals\\/indeed\\/?$","segments":[[{"content":"explore","dynamic":false,"spread":false}],[{"content":"job-portals","dynamic":false,"spread":false}],[{"content":"indeed","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/explore/job-portals/indeed.astro","pathname":"/explore/job-portals/indeed","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/daws/repos/optyp.github.io/dist/explore/job-portals/naukri/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/explore/job-portals/naukri","isIndex":false,"type":"page","pattern":"^\\/explore\\/job-portals\\/naukri\\/?$","segments":[[{"content":"explore","dynamic":false,"spread":false}],[{"content":"job-portals","dynamic":false,"spread":false}],[{"content":"naukri","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/explore/job-portals/naukri.astro","pathname":"/explore/job-portals/naukri","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/daws/repos/optyp.github.io/dist/explore/linkedin/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/explore/linkedin","isIndex":false,"type":"page","pattern":"^\\/explore\\/linkedin\\/?$","segments":[[{"content":"explore","dynamic":false,"spread":false}],[{"content":"linkedin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/explore/linkedin.astro","pathname":"/explore/linkedin","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/daws/repos/optyp.github.io/dist/explore/personal-branding/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/explore/personal-branding","isIndex":false,"type":"page","pattern":"^\\/explore\\/personal-branding\\/?$","segments":[[{"content":"explore","dynamic":false,"spread":false}],[{"content":"personal-branding","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/explore/personal-branding.astro","pathname":"/explore/personal-branding","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/daws/repos/optyp.github.io/dist/explore/portfolio-site/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/explore/portfolio-site","isIndex":false,"type":"page","pattern":"^\\/explore\\/portfolio-site\\/?$","segments":[[{"content":"explore","dynamic":false,"spread":false}],[{"content":"portfolio-site","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/explore/portfolio-site.astro","pathname":"/explore/portfolio-site","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/daws/repos/optyp.github.io/dist/faq/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/daws/repos/optyp.github.io/dist/feedback/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/feedback","isIndex":false,"type":"page","pattern":"^\\/feedback\\/?$","segments":[[{"content":"feedback","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/feedback.astro","pathname":"/feedback","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/daws/repos/optyp.github.io/dist/privacy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/daws/repos/optyp.github.io/dist/refund/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/refund","isIndex":false,"type":"page","pattern":"^\\/refund\\/?$","segments":[[{"content":"refund","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/refund.astro","pathname":"/refund","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/daws/repos/optyp.github.io/dist/terms/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/terms","isIndex":false,"type":"page","pattern":"^\\/terms\\/?$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.astro","pathname":"/terms","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/daws/repos/optyp.github.io/dist/thank-you/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/thank-you","isIndex":false,"type":"page","pattern":"^\\/thank-you\\/?$","segments":[[{"content":"thank-you","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thank-you.astro","pathname":"/thank-you","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/daws/repos/optyp.github.io/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://optyp.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/daws/repos/optyp.github.io/src/pages/error.astro",{"propagation":"none","containsHead":true}],["D:/daws/repos/optyp.github.io/src/pages/explore/personal-branding.astro",{"propagation":"none","containsHead":true}],["D:/daws/repos/optyp.github.io/src/pages/explore/ats-resume.astro",{"propagation":"none","containsHead":true}],["D:/daws/repos/optyp.github.io/src/pages/explore/freelancing/fiverr.astro",{"propagation":"none","containsHead":true}],["D:/daws/repos/optyp.github.io/src/pages/explore/freelancing/toptal.astro",{"propagation":"none","containsHead":true}],["D:/daws/repos/optyp.github.io/src/pages/explore/freelancing/upwork.astro",{"propagation":"none","containsHead":true}],["D:/daws/repos/optyp.github.io/src/pages/explore/github.astro",{"propagation":"none","containsHead":true}],["D:/daws/repos/optyp.github.io/src/pages/explore/job-portals/indeed.astro",{"propagation":"none","containsHead":true}],["D:/daws/repos/optyp.github.io/src/pages/explore/job-portals/naukri.astro",{"propagation":"none","containsHead":true}],["D:/daws/repos/optyp.github.io/src/pages/explore/linkedin.astro",{"propagation":"none","containsHead":true}],["D:/daws/repos/optyp.github.io/src/pages/explore/portfolio-site.astro",{"propagation":"none","containsHead":true}],["D:/daws/repos/optyp.github.io/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["D:/daws/repos/optyp.github.io/src/pages/feedback.astro",{"propagation":"none","containsHead":true}],["D:/daws/repos/optyp.github.io/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/daws/repos/optyp.github.io/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["D:/daws/repos/optyp.github.io/src/pages/refund.astro",{"propagation":"none","containsHead":true}],["D:/daws/repos/optyp.github.io/src/pages/terms.astro",{"propagation":"none","containsHead":true}],["D:/daws/repos/optyp.github.io/src/pages/thank-you.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/error@_@astro":"pages/error.astro.mjs","\u0000@astro-page:src/pages/explore/ats-resume@_@astro":"pages/explore/ats-resume.astro.mjs","\u0000@astro-page:src/pages/explore/freelancing/fiverr@_@astro":"pages/explore/freelancing/fiverr.astro.mjs","\u0000@astro-page:src/pages/explore/freelancing/toptal@_@astro":"pages/explore/freelancing/toptal.astro.mjs","\u0000@astro-page:src/pages/explore/freelancing/upwork@_@astro":"pages/explore/freelancing/upwork.astro.mjs","\u0000@astro-page:src/pages/explore/github@_@astro":"pages/explore/github.astro.mjs","\u0000@astro-page:src/pages/explore/job-portals/indeed@_@astro":"pages/explore/job-portals/indeed.astro.mjs","\u0000@astro-page:src/pages/explore/job-portals/naukri@_@astro":"pages/explore/job-portals/naukri.astro.mjs","\u0000@astro-page:src/pages/explore/linkedin@_@astro":"pages/explore/linkedin.astro.mjs","\u0000@astro-page:src/pages/explore/personal-branding@_@astro":"pages/explore/personal-branding.astro.mjs","\u0000@astro-page:src/pages/explore/portfolio-site@_@astro":"pages/explore/portfolio-site.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/feedback@_@astro":"pages/feedback.astro.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/refund@_@astro":"pages/refund.astro.mjs","\u0000@astro-page:src/pages/terms@_@astro":"pages/terms.astro.mjs","\u0000@astro-page:src/pages/thank-you@_@astro":"pages/thank-you.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_ZjmATT8F.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BPQOIwgX.js","/astro/hoisted.js?q=1":"_astro/hoisted.BhW4nyOm.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///D:/daws/repos/optyp.github.io/dist/error/index.html","/file:///D:/daws/repos/optyp.github.io/dist/explore/ats-resume/index.html","/file:///D:/daws/repos/optyp.github.io/dist/explore/freelancing/fiverr/index.html","/file:///D:/daws/repos/optyp.github.io/dist/explore/freelancing/toptal/index.html","/file:///D:/daws/repos/optyp.github.io/dist/explore/freelancing/upwork/index.html","/file:///D:/daws/repos/optyp.github.io/dist/explore/github/index.html","/file:///D:/daws/repos/optyp.github.io/dist/explore/job-portals/indeed/index.html","/file:///D:/daws/repos/optyp.github.io/dist/explore/job-portals/naukri/index.html","/file:///D:/daws/repos/optyp.github.io/dist/explore/linkedin/index.html","/file:///D:/daws/repos/optyp.github.io/dist/explore/personal-branding/index.html","/file:///D:/daws/repos/optyp.github.io/dist/explore/portfolio-site/index.html","/file:///D:/daws/repos/optyp.github.io/dist/faq/index.html","/file:///D:/daws/repos/optyp.github.io/dist/feedback/index.html","/file:///D:/daws/repos/optyp.github.io/dist/privacy/index.html","/file:///D:/daws/repos/optyp.github.io/dist/refund/index.html","/file:///D:/daws/repos/optyp.github.io/dist/terms/index.html","/file:///D:/daws/repos/optyp.github.io/dist/thank-you/index.html","/file:///D:/daws/repos/optyp.github.io/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"LfaKbPn+ogZZSqKgRt9Pnrcaryx7YZihmcGFo+41B3k=","experimentalEnvGetSecretEnabled":false});

export { manifest };
