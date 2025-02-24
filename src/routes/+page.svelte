<script lang="ts">
  import { HeroSection, AboutMeSection, MyWorkSection, SkillsSection, ContactSection } from "$components";

  const { data } = $props();
  let { workExperience, projects, skills } = $derived(data);

</script>

<HeroSection />
<AboutMeSection {workExperience}/>
<MyWorkSection {projects}/>
<SkillsSection {skills}/>
<ContactSection />
