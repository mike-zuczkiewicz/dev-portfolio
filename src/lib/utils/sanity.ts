import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
    projectId: 'n0agr4kw',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-03-25',
};

const sanityClient = createClient(config);
export default sanityClient;

export function processProjectEntries(rawProject: SanityProject) {
    const builder = imageUrlBuilder(sanityClient);
    const projectImageUrl = builder.image(rawProject.image).url();
    const processedProject: ProcessedProject = {
        name: rawProject.name,
        company: rawProject.company,
        dateAccomplished: rawProject.dateAccomplished,
        stack: rawProject.stack,
        slug: rawProject.slug,
        projectImageUrl,
        content: rawProject.content.map(processProjectContent),
    }
    return processedProject;
}


function processProjectContent(content: rawTextContent | rawImageContent) {
    if (content._type === 'block') {
        const processedTextContent: ProcessedTextContent = {
            type: 'text',
            style: content.style,
            textToRender: content.children.map(elem => elem.text).join('\n'),
        };
        return processedTextContent
    } else {
        const builder = imageUrlBuilder(sanityClient);
        const projectImageUrl = builder.image(content).url();
        const processedImage: ProcessedImageContent = {
            type: 'image',
            url: projectImageUrl,
        };
        return processedImage;
    }
}