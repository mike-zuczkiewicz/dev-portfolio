<script lang="ts">

  interface ExperienceTableProps {
      workExperience: SanityWorkExperience[];
  }

  let { workExperience }: ExperienceTableProps = $props();

</script>

<section class="default-margin work-experience mt-m">
    <ul class="work-experience-list">
        {#each workExperience as job}
            <li class="work-item">
              <article>
                <h3 class="semi-bold mb-xs">{job.jobTitle}</h3>
                <div class="company-and-date">
                  <p>{job.company}</p>
                  <p class="dark-grey">
                    {job.startDate?.slice(0,7)} / {job.endDate?.slice(0,7) ?? 'Present'}</p>
                </div>
              </article>
            </li>
        {/each}
    </ul>

    <h2 class="headline">Past Work<br />Experience</h2>
</section>

<style>
    .work-experience {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .work-experience-list {
      width: 50%;
    }
    .headline {
      text-align: right;
    }
    .work-item {
      border-bottom: 1px solid #f0eded;
    }
    .work-item:not(:first-of-type) {
      padding-top: 16px;
    }
    .work-item p {
      margin-bottom: 0;
    }
    .company-and-date {
      display: flex;
      justify-content: space-between;
    }
</style>