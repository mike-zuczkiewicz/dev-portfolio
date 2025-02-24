<script lang="ts">
  import {SectionHeadline} from "$components";

    interface MyWorkSectionProps {
        projects: ProcessedProject[];
    }
    let { projects }: MyWorkSectionProps = $props();
    let mainProject = projects[0];
</script>

<section class="mt-l">
    <SectionHeadline sectionName="my-work">My Work</SectionHeadline>
    <div class="default-margin projects-container mt-m">
        <article class="main-project mb-m">
            <a href={`/work/${mainProject.slug}`}>
                <img src={mainProject.projectImageUrl} alt={mainProject.name} />
            </a>
            <div class="project-info mt-s">
                <div class="title-and-company">
                    <h3 class="semi-bold">{mainProject.name}</h3>
                    <p class="company dark-gray">{mainProject.company}</p>
                </div>
                <a href={`/work/${mainProject.slug}`} class="button-to-article">→</a>
            </div>
        </article>
        <div class="more-projects-container">
            {#each projects.slice(1) as project}
                <article class="project">
                    <a href={`/work/${project.slug}`}>
                        <img src={project.projectImageUrl} alt={project.name} />
                    </a>
                    <div class="project-info mt-s">
                        <div class="title-and-company">
                            <h3 class="semi-bold">{project.name}</h3>
                            <p class="company dark-gray">{project.company}</p>
                        </div>
                        <a href={`/work/${project.slug}`} class="button-to-article">→</a>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>

<style>
    img {
        width: 100%;
        border-radius: 20px;
        object-fit: cover;
        cursor: pointer;
    }

    .main-project img {
        max-height: 450px;
    }
    .more-projects-container img {
        max-height: 300px;
    }

    .more-projects-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 48%));
        gap: 4%;
    }
    .project-info {
        display: flex;
        justify-content: space-between;
        align-items: top;
    }
    .button-to-article {
        font-size: 2rem;
        color: var(--dark-gray);
        text-decoration: none;
        border: 2px solid black;
        padding: 0rem 1rem;
        border-radius: 20px;
        transition: all 0.3s;
        height: fit-content;
    }
    .company {
        margin-bottom: 0px;
    }
</style>