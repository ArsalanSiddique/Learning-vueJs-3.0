export default {
    template: `                         
    <button class="btn btn-success ps-4 pe-4" :disabled=is_disabled>
        <slot />
    </button>
    `,
    data() {
        return {
            is_disabled: true,
        };
    }
}