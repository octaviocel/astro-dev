import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BoAgVVHb.mjs';

const html = () => "<p><strong>De la autora de ‘Circe’, una epopeya inolvidable. Todo lo que nunca te contaron sobre el mito de Aquiles y la Guerra de Troya.</strong>\\</p>\n<p>Grecia en la era de los héroes. Patroclo, un príncipe joven y torpe, ha sido exiliado al reino de Ftía, donde vive a la sombra del rey Peleo y su hijo divino, Aquiles. Aquiles, el mejor de los griegos, es todo lo que no es Patroclo: fuerte, apuesto, hijo de una diosa.\r\nUn día, Aquiles toma bajo su protección al lastimoso príncipe y ese vínculo provisional da paso a una sólida amistad mientras ambos se convierten en jóvenes habilidosos en las artes de la guerra. Pero el destino nunca está lejos de los talones de Aquiles. Cuando se extiende la noticia del rapto de Helena de Esparta, se convoca a los hombres de Grecia para asediar la ciudad de Troya.</p>\n<p>Aquiles, seducido por la promesa de un destino glorioso, se une a la causa, y Patroclo, dividido entre el amor y el miedo por su compañero, lo sigue a la guerra. Poco podía imaginar que los años siguientes iban a poner a prueba todo cuanto habían aprendido y todo cuanto valoraban profundamente</p>";

				const frontmatter = {"title":"La canción de Aquiles","author":"Madeline Miller","img":"aquiles-song.jpg","readtime":392,"description":"De la autora de 'Circe', una epopeya inolvidable. Todo lo que nunca te contaron sobre el mito de Aquiles y la Guerra de Troya.","buy":{"mexico":"https://www.amazon.com.mx/canci%C3%B3n-Aquiles-Madeline-Miller/dp/6075508058/ref=asc_df_6075508058/?hvadid=709952657183&hvpos=&hvnetw=g&hvrand=5678603057955830523&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=20714&hvtargid=pla-1345256846385&psc=1&mcid=3b6d5aaba4843ce2afdb87cfa7b7336d&gad_source=1","usa":"https://www.amazon.com/Learning-Git-GitHub-Oscar-Barajas/dp/607621319X"}};
				const file = "C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/content/books/aquiles-song.md";
				const url = undefined;
				function rawContent() {
					return "\r\n**De la autora de 'Circe', una epopeya inolvidable. Todo lo que nunca te contaron sobre el mito de Aquiles y la Guerra de Troya.**\\\r\n\r\nGrecia en la era de los héroes. Patroclo, un príncipe joven y torpe, ha sido exiliado al reino de Ftía, donde vive a la sombra del rey Peleo y su hijo divino, Aquiles. Aquiles, el mejor de los griegos, es todo lo que no es Patroclo: fuerte, apuesto, hijo de una diosa. \r\nUn día, Aquiles toma bajo su protección al lastimoso príncipe y ese vínculo provisional da paso a una sólida amistad mientras ambos se convierten en jóvenes habilidosos en las artes de la guerra. Pero el destino nunca está lejos de los talones de Aquiles. Cuando se extiende la noticia del rapto de Helena de Esparta, se convoca a los hombres de Grecia para asediar la ciudad de Troya. \r\n\r\nAquiles, seducido por la promesa de un destino glorioso, se une a la causa, y Patroclo, dividido entre el amor y el miedo por su compañero, lo sigue a la guerra. Poco podía imaginar que los años siguientes iban a poner a prueba todo cuanto habían aprendido y todo cuanto valoraban profundamente";
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
