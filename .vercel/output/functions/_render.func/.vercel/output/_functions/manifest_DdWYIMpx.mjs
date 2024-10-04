import { i as decodeKey } from './chunks/astro/server_BoAgVVHb.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D1Sz5E5K.mjs';

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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DbCjIg6Q.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DbCjIg6Q.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.0.0-beta.2_rollup@4.22.5_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/pages/book/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/book/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/pages/about.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/book/[id]@_@astro":"pages/book/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.0.0-beta.2_rollup@4.22.5_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/content/books/aquiles-song.md?astroContentCollectionEntry=true":"chunks/aquiles-song_C18XMbdO.mjs","C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/content/books/learning-git.md?astroContentCollectionEntry=true":"chunks/learning-git_By6GrMKQ.mjs","C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/content/books/not-in-love.md?astroContentCollectionEntry=true":"chunks/not-in-love_BbTY3-BZ.mjs","C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/content/books/pilots-handbook.md?astroContentCollectionEntry=true":"chunks/pilots-handbook_Df3FI5ye.mjs","C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/content/books/aquiles-song.md?astroPropagatedAssets":"chunks/aquiles-song_DSQl9aV4.mjs","C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/content/books/learning-git.md?astroPropagatedAssets":"chunks/learning-git_DMxkmvyr.mjs","C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/content/books/not-in-love.md?astroPropagatedAssets":"chunks/not-in-love_BaV8OtEf.mjs","C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/content/books/pilots-handbook.md?astroPropagatedAssets":"chunks/pilots-handbook_BkKEh3eg.mjs","C:\\Users\\octac\\OneDrive\\Escritorio\\CURSOS\\astro\\dev-books\\.astro\\assets.mjs":"chunks/assets_BwNa1IAe.mjs","C:\\Users\\octac\\OneDrive\\Escritorio\\CURSOS\\astro\\dev-books\\.astro\\modules.mjs":"chunks/modules_DKjajEJ1.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BiVqq9HT.mjs","C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/node_modules/.pnpm/astro@5.0.0-beta.2_rollup@4.22.5_typescript@5.6.2/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Ba3325OT.mjs","C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/content/books/aquiles-song.md":"chunks/aquiles-song_CRN6NfS4.mjs","C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/content/books/learning-git.md":"chunks/learning-git_BrC9wZyS.mjs","C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/content/books/not-in-love.md":"chunks/not-in-love_B-3dK_v6.mjs","C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/content/books/pilots-handbook.md":"chunks/pilots-handbook_fLNY9ps3.mjs","C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/components/BookScore.astro":"chunks/BookScore_ZVkbeiXD.mjs","C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/components/BuyButton.astro":"chunks/BuyButton_Daz7HYYj.mjs","\u0000@astrojs-manifest":"manifest_DdWYIMpx.mjs","C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/node_modules/.pnpm/astro@5.0.0-beta.2_rollup@4.22.5_typescript@5.6.2/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BB6uRyKX.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.DbCjIg6Q.css","/aquiles-song.jpg","/favicon.svg","/learning-git.jpg","/not-in-love.jpg","/pilots-handbook.jpg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BB6uRyKX.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[["C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/components/BookScore.astro","BookScore"],["C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/components/BuyButton.astro","BuyButton"]],"key":"+shGZ0Q/O0Jgx24b5oJq3sSjLuZ31BBPjG//OO6y9dc=","envGetSecretEnabled":true});

export { manifest };
