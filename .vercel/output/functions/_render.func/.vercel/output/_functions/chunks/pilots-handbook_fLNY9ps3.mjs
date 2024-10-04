import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BoAgVVHb.mjs';

const html = () => "<p>WITH UPDATES THROUGH MARCH 2023!\r\nThis official Federal Aviation Administration (FAA) handbook provides basic knowledge essential for pilots on topics like decision making, aerodynamics, flight controls, weather theory, airport operations, and more.</p>\n<p>This updated handbook introduces pilots to the broad spectrum of knowledge that will be needed as they progress in their pilot training. Written for the pilot preparing for a Remote, Sport, Private, Commercial, or Flight Instructor Pilot Certificate, it is a key reference for all the information necessary to operate an aircraft and to pass the FAA Knowledge Exam and Practical Test. The table of contents includes:</p>\n<p>Introduction to Flying\r\nAeronautical Decision-Making\r\nAircraft Construction\r\nPrinciples of Flight\r\nAerodynamics of Flight\r\nFlight Controls\r\nAircraft Systems\r\nFlight Instruments\r\nFlight Manuals and Other Documents\r\nWeight and Balance\r\nAircraft Performance\r\nWeather Theory\r\nAviation Weather Services\r\nAirport Operations\r\nAirspace\r\nNavigation\r\nAeromedical Factors</p>\n<p>This handbook introduces readers to flying and a history of flight, then explores the role of the FAA, criteria for earning the various pilot certificates, how to plan their flight education, and the examinations associated with earning a pilot certificate.\r\nBeginners and advanced pilots alike will find the Pilot’s Handbook of Aeronautical Knowledge to be their primary resources for all things aviation.</p>\n<p>In addition to the most current FAA information, this edition features full-color drawings and photographs, an index, a glossary, and appendices of common acronyms, abbreviations and NOTAM contractions, and airport signs.</p>";

				const frontmatter = {"title":"Pilot's Handbook of Aeronautical Knowledge","author":"Federal Aviation Administration","img":"pilots-handbook.jpg","readtime":528,"description":"The Pilot's Handbook of Aeronautical Knowledge provides basic knowledge that is essential for pilots. This handbook introduces pilots to the broad spectrum of knowledge that will be needed as they progress in their pilot training.","buy":{"mexico":"https://www.amazon.com.mx/Handbook-Aeronautical-Knowledge-Aviation-Administration/dp/1510726063/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&s=books&sr=1-1&ufe=app_do%3Aamzn1.fos.de93fa6a-174c-4df7-be7c-5bc8e9c5a71b","usa":"https://www.amazon.com/Learning-Git-GitHub-Oscar-Barajas/dp/607621319X"}};
				const file = "C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/content/books/pilots-handbook.md";
				const url = undefined;
				function rawContent() {
					return "\r\nWITH UPDATES THROUGH MARCH 2023!\r\nThis official Federal Aviation Administration (FAA) handbook provides basic knowledge essential for pilots on topics like decision making, aerodynamics, flight controls, weather theory, airport operations, and more.\r\n\r\nThis updated handbook introduces pilots to the broad spectrum of knowledge that will be needed as they progress in their pilot training. Written for the pilot preparing for a Remote, Sport, Private, Commercial, or Flight Instructor Pilot Certificate, it is a key reference for all the information necessary to operate an aircraft and to pass the FAA Knowledge Exam and Practical Test. The table of contents includes:\r\n\r\nIntroduction to Flying\r\nAeronautical Decision-Making\r\nAircraft Construction\r\nPrinciples of Flight\r\nAerodynamics of Flight\r\nFlight Controls\r\nAircraft Systems\r\nFlight Instruments\r\nFlight Manuals and Other Documents\r\nWeight and Balance\r\nAircraft Performance\r\nWeather Theory\r\nAviation Weather Services\r\nAirport Operations\r\nAirspace\r\nNavigation\r\nAeromedical Factors\r\n\r\nThis handbook introduces readers to flying and a history of flight, then explores the role of the FAA, criteria for earning the various pilot certificates, how to plan their flight education, and the examinations associated with earning a pilot certificate.\r\nBeginners and advanced pilots alike will find the Pilot's Handbook of Aeronautical Knowledge to be their primary resources for all things aviation.\r\n\r\nIn addition to the most current FAA information, this edition features full-color drawings and photographs, an index, a glossary, and appendices of common acronyms, abbreviations and NOTAM contractions, and airport signs.";
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
