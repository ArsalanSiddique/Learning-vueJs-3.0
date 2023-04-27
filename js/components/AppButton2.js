export default {
    template: `
        <button :class="{
            'btn ps-4 pe-4 ms-1 me-1': true,
            'btn-primary':type == 'primary',
            'btn-secondary':type == 'secondary',
            'btn-success':type == 'success',
            'btn-danger':type == 'danger',
            'disabled':isDisabled == true,
        }" >
            <slot />
        </button>
    `,
    props: {
        type: {
            type: String,
            default: 'btn-primary'
        },
        isDisabled: {
            type: Boolean,
            default: false
        }
    }
}