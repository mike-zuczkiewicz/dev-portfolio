<script lang="ts">
    import {SectionHeadline} from "$components";

    interface SkillsSectionProps {
        skills: Skill[];
    }
    let {skills}: SkillsSectionProps = $props();
</script>

<section class="mt-l">
    <SectionHeadline sectionName="skills">Skills</SectionHeadline>

        <div class="wrapper default-margin">
            <div class="skills-container mb-l">
                {#each skills as skill}
                    <div class="skill-container">
                        <i class={skill.iconClass}></i>
                    </div>
                {/each}
            </div>
        </div>
</section>

<style>
    .skills-container {
        width: 50%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        row-gap: 1rem;
    }
    i {
        font-size: 5rem;
        margin: 0.5rem;
    }
    .wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>