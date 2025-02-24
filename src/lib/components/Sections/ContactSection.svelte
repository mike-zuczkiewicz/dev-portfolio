<script lang="ts">
    import { Button, SectionHeadline } from "$components";

    let contactName: string = $state("");
    let contactMail: string = $state("");
    let informationAboutProject: string = $state("");
    let isFormInvalid: boolean = $state(false);

    function onclick(event: Event) {
        event.preventDefault();

        if(contactName && contactMail && informationAboutProject) {
            console.log("Form is valid");
        } else {
            isFormInvalid = true;
        }

    }

    $effect(() => {
        if(contactName || contactMail || informationAboutProject || !contactName || !contactMail || !informationAboutProject) {
            isFormInvalid = false;
        }
    });

</script>

<section>
    <SectionHeadline sectionName="contact-form">Let's talk</SectionHeadline>

    <div class="form-container default-margin mt-m">
        <form>
            <input type="text" 
                class="text-input mb-m" 
                class:input-error={isFormInvalid && !contactName} 
                placeholder="Your Name"
                bind:value={contactName} />
            <input type="text" 
                class="text-input mb-m" 
                class:input-error={isFormInvalid && !contactMail}
                placeholder="Your Email"
                bind:value={contactMail} />
            <textarea 
                class:input-error={isFormInvalid && !informationAboutProject}
                placeholder="Tel me about your project"
                bind:value={informationAboutProject} ></textarea>
            <Button { onclick }>Submit</Button>
        </form>
        <div class="form-text">
            <h3 class="bold mb-s">Talk to me about your project</h3>
            <p>
                I'm always excited to hear about new and innovative ideas! Whether
                you're in the early stages of planning or have a well-defined project,
                I'm here to help bring your vision to life. Feel free to drop me a
                message with some details about your project, and let's start a
                conversation about how we can work together. I look forward to
                connecting with you and discussing the possibilities. Talk to you soon!
            </p>
        </div>
    </div>
    <!-- <div class="spinner-container">
        <div class="spinner"></div>
        Validating and Saving
    </div> -->
</section>
    
<style>
    section {
        padding-bottom: 8rem;
    }
    .form-container {
        display: flex;
        justify-content: space-between;
    }
    .form-text {
        width: 39%;
    }
    form {
        width: 45%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    form * {
        font-size: 1.2rem;
        font-family: 'Inter Tight', sans-serif;
        font-weight: 500;
        color: #000;
    }
    textarea, input {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.035);
        border-radius: 8px;
        padding: .25rem .75rem;
        border: none;
        outline: none;
    }
    input {
        height: 2.5rem;
    }
    textarea {
        height: 8rem;
        margin-bottom: 2rem;
    }
    textarea::placeholder, input::placeholder {
        font-size: 1.2rem;
        font-weight: 400;
    }
    .input-error {
        background-color: rgba(223, 87, 87, 0.667);
    }
    .input-error::placeholder {
        color: #fff;
    }
    .spinner-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-top: 4px solid #000;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        margin-right: 1.2rem;
        animation: spin 1s linear infinite;
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>