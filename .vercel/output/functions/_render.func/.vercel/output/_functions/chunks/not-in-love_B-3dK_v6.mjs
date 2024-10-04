import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BoAgVVHb.mjs';

const html = () => "<p><strong>An Indie Next and a Hall of Fame LibraryReads Pick!</strong></p>\n<p><strong>A forbidden, secret affair proves that all’s fair in love and science—from New York Times bestselling author Ali Hazelwood.</strong></p>\n<p>Rue Siebert might not have it all, but she has enough: a few friends she can always count on, the financial stability she yearned for as a kid, and a successful career as a biotech engineer at Kline, one of the most promising start-ups in the field of food science. Her world is stable, pleasant, and hard-fought. Until a hostile takeover and its offensively attractive front man threatens to bring it all crumbling down.</p>\n<p>Eli Killgore and his business partners want Kline, period. Eli has his own reasons for pushing this deal through—and he’s a man who gets what he wants. With one burning exception: Rue. The woman he can’t stop thinking about. The woman who’s off-limits to him.</p>\n<p>Torn between loyalty and an undeniable attraction, Rue and Eli throw caution out the lab and the boardroom windows. Their affair is secret, no-strings-attached, and has a built-in deadline: the day one of their companies will prevail. But the heart is risky business—one that plays for keeps.</p>";

				const frontmatter = {"title":"Not in Love","author":"Ali Hazelwood","img":"not-in-love.jpg","readtime":224,"description":"Ali Hazelwood is the 1 New York Times bestselling author of Love, Theoretically and The Love Hypothesis, as well as a writer of peer-reviewed articles about brain science, in which no one makes out and the ever after is not always happy. Originally from Italy, she lived in Germany and Japan before moving to the US to pursue a PhD in neuroscience. When Ali is not at work, she can be found running, eating cake pops, or watching sci-fi movies with her three feline overlords (and her slightly-less-feline husband).","buy":{"mexico":"https://www.amazon.com.mx/Not-Love-Ali-Hazelwood/dp/0593550420/ref=bmx_dp_u15dzbkn_d_sccl_3_1/133-7597509-2437735?psc=1#customerReviews","usa":"https://www.amazon.com/Learning-Git-GitHub-Oscar-Barajas/dp/607621319X"}};
				const file = "C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/content/books/not-in-love.md";
				const url = undefined;
				function rawContent() {
					return "\r\n**An Indie Next and a Hall of Fame LibraryReads Pick!**\r\n\r\n**A forbidden, secret affair proves that all’s fair in love and science—from New York Times bestselling author Ali Hazelwood.**\r\n\r\nRue Siebert might not have it all, but she has enough: a few friends she can always count on, the financial stability she yearned for as a kid, and a successful career as a biotech engineer at Kline, one of the most promising start-ups in the field of food science. Her world is stable, pleasant, and hard-fought. Until a hostile takeover and its offensively attractive front man threatens to bring it all crumbling down.\r\n\r\nEli Killgore and his business partners want Kline, period. Eli has his own reasons for pushing this deal through—and he’s a man who gets what he wants. With one burning exception: Rue. The woman he can’t stop thinking about. The woman who's off-limits to him.\r\n\r\nTorn between loyalty and an undeniable attraction, Rue and Eli throw caution out the lab and the boardroom windows. Their affair is secret, no-strings-attached, and has a built-in deadline: the day one of their companies will prevail. But the heart is risky business—one that plays for keeps.\r\n";
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
