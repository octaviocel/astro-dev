import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BoAgVVHb.mjs';

const html = () => "<p>Hoy en día es imposible imaginar el desarrollo de software sin Git. Según la encuesta de Stack Overflow de 2018, casi el 90% de los desarrolladores usaban Git para manejar su código fuente. Si te preguntas por qué no hay encuestas más recientes… ¡Es simplemente porque no preguntaron más! Su dominio empezaba a ser tan evidente que no dejaba margen a la curiosidad.</p>\n<p>Siendo tan importante entender Git, su manejo y dominio, él decidido escribir este libro. <strong>Un libro que yo mismo hubiera estado encantado de leer cuándo empecé.</strong> Un libro del que estoy seguro que podrás extraer algún aprendizaje y que te podrá servir de guía en el futuro.</p>\n<p>En el libro te explico los orígenes de Git y por qué ahora lo usa todo el mundo. ¿De dónde nació? ¿Quién lo creó? Además, te explico todos sus fundamentos para que entiendas qué es lo que esconden todos los comando que utilizas en tu día a día.</p>\n<p>Después de ayudarte a instalar y configurar Git, te explicaré cómo puedes trabajar en Git de forma local y remota y qué diferencias existe entre esos dos modos. Luego haremos repaso de algunas buenas prácticas, cómo usar los alias, los hooks, trucos imprescindibles y muchas cosas más.</p>\n<p>¿Te interesa dominar Git? ¿Quieres una guía que te va a acompañar siempre? ¡Este es tu libro!</p>";

				const frontmatter = {"title":"Aprendiendo Git y GitHub","author":"Miguel Ángel Durán","img":"learning-git.jpg","readtime":224,"description":"Aprende Git y GitHub desde cero, con ejemplos prácticos y ejercicios.","buy":{"mexico":"https://www.amazon.com/Aprendiendo-Git-GitHub-pr%C3%A1cticas-estrategias/dp/B0D2LPMG6F","usa":"https://www.amazon.com/Learning-Git-GitHub-Oscar-Barajas/dp/607621319X"}};
				const file = "C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/content/books/learning-git.md";
				const url = undefined;
				function rawContent() {
					return "\r\nHoy en día es imposible imaginar el desarrollo de software sin Git. Según la encuesta de Stack Overflow de 2018, casi el 90% de los desarrolladores usaban Git para manejar su código fuente. Si te preguntas por qué no hay encuestas más recientes... ¡Es simplemente porque no preguntaron más! Su dominio empezaba a ser tan evidente que no dejaba margen a la curiosidad.\r\n\r\nSiendo tan importante entender Git, su manejo y dominio, él decidido escribir este libro. **Un libro que yo mismo hubiera estado encantado de leer cuándo empecé.** Un libro del que estoy seguro que podrás extraer algún aprendizaje y que te podrá servir de guía en el futuro.\r\n\r\nEn el libro te explico los orígenes de Git y por qué ahora lo usa todo el mundo. ¿De dónde nació? ¿Quién lo creó? Además, te explico todos sus fundamentos para que entiendas qué es lo que esconden todos los comando que utilizas en tu día a día.\r\n\r\nDespués de ayudarte a instalar y configurar Git, te explicaré cómo puedes trabajar en Git de forma local y remota y qué diferencias existe entre esos dos modos. Luego haremos repaso de algunas buenas prácticas, cómo usar los alias, los hooks, trucos imprescindibles y muchas cosas más.\r\n\r\n¿Te interesa dominar Git? ¿Quieres una guía que te va a acompañar siempre? ¡Este es tu libro!";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
