<script lang="ts">
    let { data } = $props();

    const {company, name, dateAccomplished, stack, projectImageUrl, content} = data;

    function getTagFromStyle(style: string): string {
        if(style === 'normal') {
                return 'p';
        }
        else {
            return style;
        }
    }
</script>

<main class="default-margin work-page">
    <h4>{company}</h4>
    <div class="underscore"></div>
    <h2 class="mb-s">{name}</h2>
    <img src={projectImageUrl} alt={name} class="project-image" />
    <div class="project-container mt-m">
        <div class="meta-data">
            <h3 class="semi-bold">Date</h3>
            <p>{dateAccomplished.slice(0, 7)}</p>
            <h3 class="semi-bold">Tech Stack</h3>
            {#each stack as tech}
                <li>{tech}</li>
            {/each}
        </div>
        <div class="content">
            {#each content as block}
                {#if block.type === 'text'}
                    <svelte:element this={getTagFromStyle(block.style)}>{block.textToRender}</svelte:element>
                    {:else if block.type === 'image'}
                    <img src={block.url} alt="" class="content-image" />
                {/if}
            {/each}
    </div>
</main>

<style>
    .work-page {
        padding-top: 80px;
        padding-bottom: 140px;
    }
    .project-image {
        width: 100%;
        max-height: 400px;
        object-fit: cover;
    }
    .content-image {
        width: 100%;
    }
    .project-container {
        display: flex;
        justify-content: space-between;
    }
    .meta-data {
        min-width: 200px;
    }
</style>