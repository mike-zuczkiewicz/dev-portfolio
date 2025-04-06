<script lang="ts">
	import '../app.css';
	import { Header } from '$components';
	import { Footer } from '$components';

	let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />
